// QA: fetches key pages as each AI crawler would (node scripts/qa/ai-crawlers.mjs) and checks status + real server-rendered text.
const UAS = {
  'OpenAI GPTBot': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; GPTBot/1.2; +https://openai.com/gptbot',
  'OpenAI OAI-SearchBot': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot',
  'OpenAI ChatGPT-User': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot',
  'Anthropic ClaudeBot': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)',
  'Anthropic Claude-User': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Claude-User/1.0; +Claude-User@anthropic.com)',
  'Anthropic Claude-SearchBot': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Claude-SearchBot/1.0; +Claude-SearchBot@anthropic.com)',
  'Google Googlebot': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  'Google Gemini (Google-Extended fetch)': 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Mobile Safari/537.36 (compatible; Google-Extended)',
  'Google GoogleOther': 'Mozilla/5.0 (compatible; GoogleOther)',
  'Google NotebookLM': 'Mozilla/5.0 (compatible; Google-NotebookLM)',
  'Microsoft Bingbot (Copilot)': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/131.0 Safari/537.36',
  'Perplexity PerplexityBot': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)',
  'Perplexity-User': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Perplexity-User/1.0; +https://perplexity.ai/perplexity-user)',
  'Apple Applebot': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15 (Applebot/0.1; +http://www.apple.com/go/applebot)',
  'Meta meta-externalagent': 'meta-externalagent/1.1 (+https://developers.facebook.com/docs/sharing/webmasters/crawler)',
  'Meta meta-externalfetcher': 'meta-externalfetcher/1.1 (+https://developers.facebook.com/docs/sharing/webmasters/crawler)',
  'DuckDuckGo DuckAssistBot': 'DuckAssistBot/1.2; (+http://duckduckgo.com/duckassistbot.html)',
  'Mistral MistralAI-User': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; MistralAI-User/1.0; +https://docs.mistral.ai/robots)',
  'Amazon Amazonbot (Alexa/Rufus)': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Amazonbot/0.1; +https://developer.amazon.com/support/amazonbot) Chrome/119.0 Safari/537.36',
  'Common Crawl CCBot': 'CCBot/2.0 (https://commoncrawl.org/faq/)',
  'You.com YouBot': 'Mozilla/5.0 (compatible; YouBot (+http://www.you.com))',
  'ByteDance Bytespider': 'Mozilla/5.0 (Linux; Android 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36 (compatible; Bytespider; spider-feedback@bytedance.com)',
  'Cohere cohere-ai': 'cohere-ai',
  'xAI / generic fetcher (no browser)': 'python-requests/2.32',
}
const PAGES = ['/it', '/it/quanto-costa-un-sito-web', '/it/blog/pubblicita-su-chatgpt-guida', '/llms.txt']
const MUST = { '/it': /Marketizzati/i, '/it/quanto-costa-un-sito-web': /€/, '/it/blog/pubblicita-su-chatgpt-guida': /ChatGPT/i, '/llms.txt': /^# Marketizzati/m }
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
let bad = 0
for (const [name, ua] of Object.entries(UAS)) {
  const row = []
  for (const p of PAGES) {
    try {
      const r = await fetch('https://www.marketizzati.it' + p, { headers: { 'User-Agent': ua, Accept: 'text/html,text/plain,*/*' }, redirect: 'follow' })
      const body = await r.text()
      const text = p.endsWith('.txt') ? body : strip(body)
      const ok = r.status === 200 && MUST[p].test(text) && text.length > 800
      if (!ok) bad++
      row.push(`${p.split('/').pop() || 'it'}:${r.status}${ok ? '' : '!'}(${Math.round(text.length / 1000)}k)`)
    } catch (e) { bad++; row.push(`${p}:ERR`) }
  }
  console.log(name.padEnd(38), row.join('  '))
}
console.log(bad ? `${bad} problems` : 'all crawlers get 200 with the real text')
