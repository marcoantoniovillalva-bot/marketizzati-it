/** Inline schema.org JSON-LD. */
export function JsonLdBlocks({ blocks }: { blocks: Record<string, unknown>[] }) {
  return (
    <>
      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(b).replace(/</g, '\\u003c') }} />
      ))}
    </>
  )
}
