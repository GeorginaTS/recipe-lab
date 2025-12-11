<script setup lang="ts">
defineProps<{
  title: string
  description: string
  time?: string
  difficulty?: string
}>()
</script>

<template>
  <header>
    <div class="recipe-header-content">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <div class="badges" role="list" v-if="time || difficulty">
        <span v-if="time" role="listitem">⏱️ {{ time }}</span>
        <span v-if="difficulty" role="listitem">📊 {{ difficulty }}</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  position: relative;
  text-align: center;
  padding: var(--spacing-xl) var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  background: linear-gradient(135deg, rgba(124, 179, 66, 0.12) 0%, rgba(255, 152, 0, 0.1) 100%);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 2px solid rgba(124, 179, 66, 0.2);
}

header::before {
  content: '👨‍🍳';
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 7rem;
  opacity: 0.08;
  transform: rotate(-10deg);
  pointer-events: none;
}

header::after {
  content: '🍽️';
  position: absolute;
  bottom: -25px;
  left: -25px;
  font-size: 5rem;
  opacity: 0.08;
  transform: rotate(20deg);
  pointer-events: none;
}

.recipe-header-content {
  position: relative;
  z-index: 1;
}

h1 {
  font-size: 1.75rem;
  color: var(--primary-green-dark);
  margin-bottom: var(--spacing-sm);
  font-weight: 800;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  line-height: 1.2;
}

p {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto var(--spacing-md);
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  justify-content: center;
  margin-top: var(--spacing-md);
}

.badges span {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-xl);
  font-size: 0.875rem;
  font-weight: 600;
  background: white;
  color: var(--text-primary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}

.badges span:hover {
  transform: translateY(-2px);
}

@media (min-width: 481px) {
  h1 {
    font-size: 2.25rem;
  }

  p {
    font-size: 1.1rem;
  }

  .badges span {
    font-size: 0.95rem;
  }
}

@media (min-width: 769px) {
  header {
    padding: var(--spacing-2xl) var(--spacing-xl);
  }

  h1 {
    font-size: 2.75rem;
  }

  p {
    font-size: 1.15rem;
  }

  .badges span {
    font-size: 1rem;
    padding: var(--spacing-sm) var(--spacing-lg);
  }
}
</style>
