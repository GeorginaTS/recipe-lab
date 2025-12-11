<template>
  <nav>
    <button
      v-for="lang in languages"
      :key="lang.code"
      :data-active="currentLocale === lang.code"
      :aria-label="`${lang.label}`"
      @click="changeLocale(lang.code)"
    >
      {{ lang.code.toUpperCase() }}
    </button>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '../i18n'

const { locale } = useI18n()

type SupportedLocale = 'ca' | 'es' | 'en'

const languages: Array<{ code: SupportedLocale; label: string; flag: string }> = [
  { code: 'ca', label: 'Català', flag: '🇦🇩' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇬🇧' }
]

const currentLocale = computed(() => locale.value)

const changeLocale = (newLocale: SupportedLocale) => {
  setLocale(newLocale)
}
</script>


