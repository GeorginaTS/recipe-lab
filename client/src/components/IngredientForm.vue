<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const newIngredient = defineModel<string>({ required: true })

const emit = defineEmits<{
  add: [ingredient: string]
}>()

const handleSubmit = () => {
  const ingredient = newIngredient.value.trim()
  if (ingredient) {
    emit('add', ingredient)
    newIngredient.value = ''
  }
}
</script>

<template>
  <section class="ingredient-form-card">
    <h3>🥘 {{ t('home.addButton') }}</h3>
    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <span class="input-icon">⚗️</span>
        <input
          id="ingredient-input"
          v-model="newIngredient"
          type="text"
          :placeholder="t('home.ingredientsPlaceholder')"
        />
        <button type="submit" class="btn-secondary">
          + {{ t('home.addButton') }}
        </button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.ingredient-form-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--spacing-sm);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: 100%;
}

h3 {
  color: var(--primary-green-dark);
  margin-bottom: var(--spacing-md);
  font-size: 1.1rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--spacing-sm);
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  padding: var(--spacing-xs);
  border: 2px solid var(--bg-secondary);
  transition: border-color var(--transition-fast);
}

.input-group:focus-within {
  border-color: var(--primary-green);
}

.input-icon {
  font-size: 1.5rem;
  padding: 0 var(--spacing-sm);
  user-select: none;
}

.input-group input {
  flex: 1;
  border: none;
  background: transparent;
  padding: var(--spacing-sm);
  font-size: 1rem;
}

.input-group input:focus {
  outline: none;
  border: none;
}

.input-group button {
  margin: 0;
  flex-shrink: 0;
  width: 100%;
}

@media (min-width: 481px) {
  .input-group {
    flex-direction: row;
    align-items: center;
  }

  .input-group button {
    width: auto;
  }
}
</style>
