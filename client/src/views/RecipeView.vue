<template>
  <main class="recipe-view">
    <div class="container">
      <LoadingSpinner v-if="loading" message="Carregant recepta..." />

      <ErrorMessage
        v-else-if="error"
        :message="error"
        title="Error"
        show-retry
        retry-text="Tornar a l'inici"
        @retry="goHome"
      />

      <article v-else-if="recipe" class="content-card">
        <header class="recipe-header">
          <nav aria-label="Navegació">
            <button @click="goHome" class="btn btn-back" type="button">← Tornar</button>
          </nav>
          <h1>{{ recipe.titol }}</h1>
          <p class="description text-secondary">{{ recipe.descripcio }}</p>
          <div class="meta" role="list">
            <span class="badge" role="listitem">⏱️ {{ recipe.temps }}</span>
            <span class="badge" role="listitem">📊 {{ recipe.dificultat }}</span>
          </div>
        </header>

        <section class="section" aria-labelledby="ingredients-heading">
          <h2 id="ingredients-heading">🥘 Ingredients</h2>
          <ul class="ingredients-list list-styled">
            <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
              <span class="ingredient-name">{{ ingredient.nom || ingredient }}</span>
              <span v-if="ingredient.quantitat" class="ingredient-quantity">
                {{ ingredient.quantitat }} {{ ingredient.unitat || '' }}
              </span>
            </li>
          </ul>
        </section>

        <section class="section" aria-labelledby="steps-heading">
          <h2 id="steps-heading">👨‍🍳 Passos</h2>
          <ol class="steps-list list-numbered">
            <li v-for="(pas, index) in normalizedSteps" :key="index">
              {{ pas }}
            </li>
          </ol>
        </section>

        <section v-if="recipe.variants && recipe.variants.length > 0" class="section" aria-labelledby="variants-heading">
          <h2 id="variants-heading">💡 Variants</h2>
          <div class="variants">
            <article v-for="(variant, index) in normalizedVariants" :key="index" class="variant-card card card-border">
              <h3>{{ variant.nom }}</h3>
              <p class="text-secondary">{{ variant.descripcio }}</p>
            </article>
          </div>
        </section>

        <details v-if="recipe.raw" class="raw-response">
          <summary>Veure resposta original</summary>
          <pre>{{ recipe.raw }}</pre>
        </details>
      </article>

      <ErrorMessage
        v-else
        message="No hi ha cap recepta disponible"
        title="Cap recepta"
        show-retry
        retry-text="Generar una recepta"
        @retry="goHome"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useRecipeStore } from '@/stores/recipe.ts';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';

const router = useRouter();
const recipeStore = useRecipeStore();

const recipe = computed(() => recipeStore.recipe);
const loading = computed(() => recipeStore.loading);
const error = computed(() => recipeStore.error);

const normalizedSteps = computed(() => {
  if (!recipe.value?.passos) return [];

  return recipe.value.passos.map((pas: string | { descripcio: string }) => {
    if (typeof pas === 'string') return pas;
    return pas.descripcio || '';
  });
});

const normalizedVariants = computed(() => {
  if (!recipe.value?.variants) return [];

  return recipe.value.variants.map((variant: string | { nom: string; descripcio: string }) => {
    if (typeof variant === 'string') {
      return { nom: 'Variant', descripcio: variant };
    }
    return variant;
  });
});

const goHome = () => {
  router.push('/');
};
</script>

<style scoped>
/* Layout específic RecipeView */
.recipe-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  position: relative;
  padding-top: 4rem;
}

.btn-back {
  position: static;
  margin-bottom: var(--spacing-md);
}

.description {
  font-size: 0.95rem;
  margin-bottom: var(--spacing-md);
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  justify-content: center;
}

.ingredients-list li {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-xs);
}

.ingredient-name {
  font-weight: 500;
}

.ingredient-quantity {
  color: var(--primary-green-dark);
  font-weight: 600;
}

.variants {
  display: grid;
  gap: var(--spacing-md);
}

.variant-card {
  border-left: 4px solid var(--secondary-orange);
}

.variant-card h3 {
  color: var(--secondary-orange-dark);
}

.raw-response {
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--bg-secondary);
}

.raw-response summary {
  cursor: pointer;
  color: var(--primary-green);
  font-weight: 600;
}

.raw-response pre {
  background: var(--bg-secondary);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  overflow-x: auto;
  margin-top: var(--spacing-md);
}

/* Tablet (481px+) */
@media (min-width: 481px) {
  .recipe-view {
    padding: var(--spacing-md);
  }

  .recipe-content {
    padding: var(--spacing-lg);
  }

  .recipe-header h1 {
    font-size: 2rem;
  }

  .description {
    font-size: 1rem;
  }

  .section h2 {
    font-size: 1.5rem;
  }

  .steps-list {
    padding-left: var(--spacing-lg);
  }

  .steps-list li {
    font-size: 1rem;
  }
}

/* Desktop (769px+) */
@media (min-width: 769px) {
  .recipe-view {
    padding: var(--spacing-xl);
  }

  .recipe-content {
    padding: var(--spacing-2xl);
  }

  .recipe-header {
    padding-top: var(--spacing-2xl);
  }

  .recipe-header h1 {
    font-size: 2.5rem;
    margin-top: 0;
  }

  .description {
    font-size: 1.1rem;
  }

  .btn-back {
    position: absolute;
    left: 0;
    top: 0;
    padding: var(--spacing-md) var(--spacing-lg);
    font-size: 1rem;
    margin-bottom: 0;
  }

  .section h2 {
    font-size: 1.75rem;
  }

  .ingredients-list li {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-md);
  }

  .variant-card {
    padding: var(--spacing-lg);
  }

  .variant-card h3 {
    font-size: 1.25rem;
  }
}
</style>
