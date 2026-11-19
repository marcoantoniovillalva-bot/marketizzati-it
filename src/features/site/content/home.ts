import type { Locale } from '../lib/routes'
import { homeIt } from './home-it'
import { homeEs } from './home-es'
import { homeEn } from './home-en'
import type { HomeCopy } from './home-types'

const HOME: Record<Locale, HomeCopy> = { it: homeIt, es: homeEs, en: homeEn }

export const getHomeCopy = (locale: Locale): HomeCopy => HOME[locale] ?? homeIt
