import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'
import ts from 'typescript'

// Evaluate the standalone site copy and its local TypeScript dependencies only.
// Type-only imports disappear during transpilation; no Next modules are loaded.
const cache = new Map()
function load(file) {
  file = path.resolve(file)
  if (cache.has(file)) return cache.get(file).exports
  const module = { exports: {} }
  cache.set(file, module)
  const source = fs.readFileSync(file, 'utf8')
  const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText
  const requireLocal = (name) => {
    if (!name.startsWith('.')) throw new Error(`Unexpected import ${name} in ${file}`)
    return load(path.resolve(path.dirname(file), `${name}.ts`))
  }
  vm.runInNewContext(`(function(require,module,exports){${js}\n})`)(requireLocal, module, module.exports)
  return module.exports
}
const entries = []
for (const file of fs.readdirSync('src/features/site/content').filter((name) => /^(home|prezzi|pages-).*(it|es|en)\.ts$/.test(name))) {
  for (const [name, value] of Object.entries(load(`src/features/site/content/${file}`))) {
    if (value && typeof value === 'object' && value.meta && typeof value.meta.title === 'string') entries.push({ name: `${file}:${name}`, ...value.meta })
  }
}
// These page files use literal metadata fields rather than site content objects.
for (const page of ['chi-sono', 'contatti', 'progetti', 'blog', 'condizioni-sito-web']) {
  const file = `src/app/[locale]/(public)/${page}/page.tsx`
  const source = fs.readFileSync(file, 'utf8')
  const regex = /\b(it|es|en):\s*\{\s*(?:meta|metaTitle):\s*(['"`])((?:\\.|(?!\2)[\s\S])*?)\2\s*,\s*(?:desc|description):\s*(['"`])((?:\\.|(?!\4)[\s\S])*?)\4/g
  for (const match of source.matchAll(regex)) entries.push({ name: `${page}:${match[1]}`, title: match[3].replace(/\\(['"`\\])/g, '$1'), description: match[5].replace(/\\(['"`\\])/g, '$1') })
}
let problems = 0
const titles = new Map()
for (const entry of entries) {
  if (entry.title.length > 60) { console.log(`TITLE ${entry.name} (${entry.title.length}): ${entry.title}`); problems++ }
  if (entry.description.length > 155) { console.log(`DESCRIPTION ${entry.name} (${entry.description.length}): ${entry.description}`); problems++ }
  if (titles.has(entry.title)) { console.log(`DUPLICATE ${titles.get(entry.title)} / ${entry.name}: ${entry.title}`); problems++ } else titles.set(entry.title, entry.name)
}
console.log(`Checked ${entries.length} metadata entries; ${problems} problems.`)
if (problems) process.exitCode = 1
