import { PublicResourcePage } from '@/features/portal/components/public-resource-page'

type SharedResourcePageProps = {
  params: Promise<{
    id: string
    token: string
  }>
}

export default async function SharedResourcePage({ params }: SharedResourcePageProps) {
  const { id, token } = await params
  return <PublicResourcePage id={id} token={token} />
}
