import { PublicResourcePage } from '@/features/portal/components/public-resource-page'

type LocalizedSharedResourcePageProps = {
  params: Promise<{
    locale: string
    id: string
    token: string
  }>
}

export default async function LocalizedSharedResourcePage({ params }: LocalizedSharedResourcePageProps) {
  const { id, token } = await params
  return <PublicResourcePage id={id} token={token} />
}
