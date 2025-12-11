<template>
  <main>
    <LoadingSpinner v-if="loading" :message="t('common.loading')" />

      <ErrorMessage
        v-else-if="error"
        :message="error"
        :title="t('common.error')"
        show-retry
        :retry-text="t('recipe.backButton')"
        @retry="goHome"
      />

      <article v-else-if="recipe">
        <header>
          <h1>{{ recipe.titol }}</h1>
          <p>{{ recipe.descripcio }}</p>
          <div role="list">
            <span role="listitem">⏱️ {{ recipe.temps }}</span>
            <span role="listitem">📊 {{ recipe.dificultat }}</span>
          </div>
        </header>

        <section aria-labelledby="ingredients-heading">
          <h2 id="ingredients-heading">🥘 {{ t('recipe.ingredients') }}</h2>
          <IngredientsList :ingredients="recipe.ingredients || []" />
        </section>

        <section aria-labelledby="steps-heading">
          <h2 id="steps-heading">👨‍🍳 {{ t('recipe.steps') }}</h2>
          <ol>
            <li v-for="(pas, index) in normalizedSteps" :key="index">
              {{ pas }}
            </li>
          </ol>
        </section>

        <section
          v-if="recipe.variants && recipe.variants.length > 0"
          aria-labelledby="variants-heading"
        >
          <h2 id="variants-heading">💡 {{ t('recipe.variants') }}</h2>
          <VariantsList :variants="recipe.variants" />
        </section>

        <details v-if="recipe.raw">
          <summary>Veure resposta original</summary>
          <pre>{{ recipe.raw }}</pre>
        </details>
      </article>

      <ErrorMessage
        v-else
        :message="t('home.error')"
        :title="t('common.error')"
        show-retry
        :retry-text="t('home.generateButton')"
        @retry="goHome"
      />

    <nav :aria-label="t('recipe.title')">
      <button @click="goHome" type="button" class="btn-primary">← {{ t('recipe.backButton') }}</button>
    </nav>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useRecipeStore } from '@/stores/recipe.ts'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import IngredientsList from '@/components/IngredientsList.vue'
import VariantsList from '@/components/VariantsList.vue'

const router = useRouter()
const recipeStore = useRecipeStore()
const { t } = useI18n()

const recipe = computed(() => recipeStore.recipe)
const loading = computed(() => recipeStore.loading)
const error = computed(() => recipeStore.error)

const normalizedSteps = computed(() => {
  if (!recipe.value?.passos) return []

  return recipe.value.passos.map((pas: string | { descripcio: string }) => {
    if (typeof pas === 'string') return pas
    return pas.descripcio || ''
  })
})

const goHome = () => {
  router.push('/')
}
</script>
<style>
  h2 {
    margin-top: var(--spacing-lg);
  }
</style>
