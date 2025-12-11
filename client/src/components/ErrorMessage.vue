<template>
  <aside role="alert">
    <div>❌</div>
    <h2 v-if="title">{{ title }}</h2>
    <p>{{ message }}</p>
    <button
      v-if="showRetry"
      @click="$emit('retry')"
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


