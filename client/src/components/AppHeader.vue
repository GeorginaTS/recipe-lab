<template>
  <header class="app-header">
    <div class="header-container">
      <div class="logo">
        <h1>🍳 {{ t('home.title') }}</h1>
      </div>
      <LanguageSelector />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSelector from './LanguageSelector.vue'

const { t } = useI18n()
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg-card);
  border-bottom: 1px solid rgba(46, 60, 42, 0.1);
  box-shadow: var(--shadow-sm);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-md) var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-md);
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--text-primary);
}

/* Mobile */
@media (max-width: 480px) {
  .header-container {
    padding: var(--spacing-sm) var(--spacing-md);
  }

  .logo h1 {
    font-size: 1.25rem;
  }
}

/* Tablet and Desktop */
@media (min-width: 769px) {
  .logo h1 {
    font-size: 1.75rem;
  }
}
</style>
