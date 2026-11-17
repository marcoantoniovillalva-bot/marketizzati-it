import { serviceRoute } from '@/features/site/lib/service-route'

const route = serviceRoute('googleAds')

export const generateMetadata = route.generateMetadata
export default route.Page
