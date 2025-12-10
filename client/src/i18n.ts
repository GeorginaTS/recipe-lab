import { createI18n } from 'vue-i18n'
import ca from './locales/ca.json'
import es from './locales/es.json'
import en from './locales/en.json'

type SupportedLocale = 'ca' | 'es' | 'en'

// Detectar l'idioma del navegador o usar català per defecte
const getBrowserLocale = (): SupportedLocale => {
  const navigatorLocale = navigator.language.split('-')[0]
  const supportedLocales: SupportedLocale[] = ['ca', 'es', 'en']
  return supportedLocales.includes(navigatorLocale as SupportedLocale)
    ? navigatorLocale as SupportedLocale
    : 'ca'
}

// Obtenir l'idioma guardat o usar el del navegador
const savedLocale = localStorage.getItem('locale') as SupportedLocale | null
const defaultLocale = savedLocale || getBrowserLocale()

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'ca',
  messages: {
    ca,
    es,
    en
  }
})

export const setLocale = (locale: SupportedLocale) => {
  i18n.global.locale.value = locale
  localStorage.setItem('locale', locale)
  document.documentElement.lang = locale
}
