<template>
  <nav aria-label="Language selector" class="language-selector">
    <button
      v-for="lang in languages"
      :key="lang.code"
      :data-active="currentLocale === lang.code"
      :aria-label="`${lang.label}`"
      @click="changeLocale(lang.code)"
      class="btn-lang"
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

<style>
.language-selector {
  display: flex;
  gap: 0.25rem;
}
.btn-lang {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0;
  border-radius: var(--radius-sm);
  transition: background-color 0.3s;
}

.btn-lang[data-active='true'] {
  background-color: var(--primary-green-light);
  font-weight: bold;
}
</style>
