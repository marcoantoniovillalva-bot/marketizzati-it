import { serviceRoute } from '@/features/site/lib/service-route'

const route = serviceRoute('siti')

export const generateMetadata = route.generateMetadata
export default route.Page
