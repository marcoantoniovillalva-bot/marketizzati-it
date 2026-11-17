import { serviceRoute } from '@/features/site/lib/service-route'

const route = serviceRoute('artigiani')

export const generateMetadata = route.generateMetadata
export default route.Page
