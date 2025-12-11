<script setup lang="ts">
interface Variant {
  nom: string
  descripcio: string
}

defineProps<{
  variants: (Variant | string)[]
}>()

const normalizeVariant = (variant: Variant | string): Variant => {
  if (typeof variant === 'string') {
    return { nom: 'Variant', descripcio: variant }
  }
  return variant
}
</script>

<template>
  <div>
    <article v-for="(variant, index) in variants" :key="index">
      <h3>{{ normalizeVariant(variant).nom }}</h3>
      <p>{{ normalizeVariant(variant).descripcio }}</p>
    </article>
  </div>
</template>

<style scoped>
div {
  display: grid;
  gap: var(--spacing-md);
}

article {
  background: var(--bg-secondary);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--secondary-orange);
}

article h3 {
  color: var(--secondary-orange-dark);
}
</style>
