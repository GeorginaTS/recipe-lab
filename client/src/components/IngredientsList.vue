<script setup lang="ts">
interface Ingredient {
  nom: string
  quantitat?: string
  unitat?: string
}

defineProps<{
  ingredients: (Ingredient | string)[]
}>()
</script>

<template>
  <ul>
    <li v-for="(ingredient, index) in ingredients" :key="index">
      <span>{{ typeof ingredient === 'string' ? ingredient : ingredient.nom }}</span>
      <span v-if="typeof ingredient === 'object' && ingredient.quantitat">
        {{ ingredient.quantitat }} {{ ingredient.unitat || '' }}
      </span>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-sm);
}

li span:last-child {
  color: var(--primary-green-dark);
  font-weight: 600;
}
</style>
