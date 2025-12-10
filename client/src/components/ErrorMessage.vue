<template>
  <aside class="error-message" role="alert">
    <div class="error-icon">❌</div>
    <h2 v-if="title">{{ title }}</h2>
    <p>{{ message }}</p>
    <button
      v-if="showRetry"
      @click="$emit('retry')"
      class="btn btn-primary"
      type="button"
    >
      {{ retryText }}
    </button>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  message: string;
  title?: string;
  showRetry?: boolean;
  retryText?: string;
}>();

defineEmits<{
  retry: [];
}>();
</script>

<style scoped>
.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2xl);
  gap: var(--spacing-md);
  text-align: center;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 2px solid #ef5350;
}

.error-icon {
  font-size: 3rem;
  animation: shake 0.5s;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}

.error-message h2 {
  margin: 0;
  color: var(--text-primary);
  font-size: 1.25rem;
}

.error-message p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  max-width: 400px;
}

.error-message .btn {
  margin-top: var(--spacing-sm);
}

/* Tablet (481px+) */
@media (min-width: 481px) {
  .error-message h2 {
    font-size: 1.5rem;
  }

  .error-message p {
    font-size: 1rem;
  }
}

/* Desktop (769px+) */
@media (min-width: 769px) {
  .error-message {
    padding: var(--spacing-3xl);
  }

  .error-icon {
    font-size: 4rem;
  }

  .error-message h2 {
    font-size: 1.75rem;
  }

  .error-message p {
    font-size: 1.1rem;
  }
}
</style>
