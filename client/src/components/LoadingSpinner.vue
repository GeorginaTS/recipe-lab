<template>
  <div class="loading-spinner" role="status" aria-live="polite">
    <div class="spinner"></div>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message?: string;
}>();
</script>

<style scoped>
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2xl);
  gap: var(--spacing-md);
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid var(--bg-secondary);
  border-top-color: var(--primary-green);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-spinner p {
  color: var(--text-secondary);
  font-size: 1rem;
  margin: 0;
}

/* Mobile (320px+) */
@media (min-width: 481px) {
  .spinner {
    width: 60px;
    height: 60px;
  }

  .loading-spinner p {
    font-size: 1.1rem;
  }
}
</style>
