<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  ingredients: string[]
}>()

const emit = defineEmits<{
  remove: [index: number]
}>()
</script>

<template>
  <ul class="chips-list">
    <li v-for="(ingredient, index) in ingredients" :key="index" class="chip">
      <span class="chip-text">{{ ingredient }}</span>
      <button
        @click="emit('remove', index)"
        :aria-label="`${t('common.close')} ${ingredient}`"
        type="button"
        class="chip-remove"
      >
        ×
      </button>
    </li>
  </ul>
</template>

<style scoped>
.chips-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.chip {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-xs) var(--spacing-lg);
  background: var(--secondary-orange-light);
  border-radius: var(--radius-xl);
  font-size: 0.875rem;
  color: var(--text-primary);
  border: 1px solid rgba(46, 60, 42, 0.15);
  transition: all 0.2s ease;
  cursor: default;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.chip:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(124, 179, 66, 0.3);
}

.chip-text {
  font-weight: 500;
}

.chip-remove {
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: none;
  transition: all 0.2s ease;
  line-height: 1;
  cursor: pointer;
  border-radius: 50%;
  margin: 0;
  width: fit-content;
}

.chip-remove:hover {
  color: white;
  background: var(--primary-green-dark);
  transform: rotate(90deg);
  box-shadow: none;
  border: none;
}

.chip-remove:active {
  transform: rotate(90deg) scale(0.9);
}
</style>
