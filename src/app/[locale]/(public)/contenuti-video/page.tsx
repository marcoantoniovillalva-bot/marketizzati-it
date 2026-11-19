import { serviceRoute } from '@/features/site/lib/service-route'

const route = serviceRoute('video')

export const generateMetadata = route.generateMetadata
export default route.Page
