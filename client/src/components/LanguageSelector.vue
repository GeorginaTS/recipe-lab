<template>
  <div class="language-selector">
    <button
      v-for="lang in languages"
      :key="lang.code"
      :class="['lang-btn', { active: currentLocale === lang.code }]"
      :aria-label="`${lang.label}`"
      @click="changeLocale(lang.code)"
    >
      {{ lang.code.toUpperCase() }}
    </button>
  </div>
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

<style scoped>
.language-selector {
  width: fit-content;
  display: flex;
  gap: 0.25rem;
  align-items: flex-end;
}

.lang-btn {
  padding: 0.5rem 1rem;
  border: 1px solid rgba(46, 60, 42, 0.2);
  background: var(--bg-secondary);
  color: var(--text-primary);
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 0.875rem;
  transition: var(--transition-fast);
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.lang-btn:hover {
  background: var(--bg-card);
  border-color: var(--primary-green-light);
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

.lang-btn.active {
  background: var(--primary-green);
  color: white;
  border-color: var(--primary-green);
}

.lang-btn:focus-visible {
  outline: 2px solid var(--primary-green);
  outline-offset: 2px;
}
</style>
