<script setup lang="ts">
defineProps<{
  subtitle: string
  description: string
}>()
</script>

<template>
  <header>
    <div class="hero-content">
      <h2>{{ subtitle }}</h2>
      <p>{{ description }}</p>
    </div>
  </header>
</template>

<style scoped>
header {
  position: relative;
  text-align: center;
  padding: var(--spacing-xl) var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  background: linear-gradient(135deg, rgba(124, 179, 66, 0.1) 0%, rgba(255, 152, 0, 0.08) 100%);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

header::before {
  content: '🍳';
  position: absolute;
  top: -20px;
  right: -20px;
  font-size: 8rem;
  opacity: 0.1;
  transform: rotate(-15deg);
  pointer-events: none;
}

header::after {
  content: '🥬';
  position: absolute;
  bottom: -30px;
  left: -30px;
  font-size: 6rem;
  opacity: 0.1;
  transform: rotate(25deg);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
}

h2 {
  font-size: 1.75rem;
  color: var(--primary-green-dark);
  margin-bottom: var(--spacing-sm);
  font-weight: 800;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

p {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
}

@media (min-width: 481px) {
  h2 {
    font-size: 2.25rem;
  }

  p {
    font-size: 1.1rem;
  }
}

@media (min-width: 769px) {
  header {
    padding: var(--spacing-2xl) var(--spacing-xl);
  }

  h2 {
    font-size: 2.75rem;
  }

  p {
    font-size: 1.2rem;
  }
}
</style>
