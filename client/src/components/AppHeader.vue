<template>
  <header>
    <div>
      <RouterLink to="/" class="logo">
        <img src="../assets/logo.png" alt="RecipeLAB" />
        <h1>recipe<span>LAB</span></h1>
      </RouterLink>
      <LanguageSelector />
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LanguageSelector from './LanguageSelector.vue'
</script>
<style scoped>
header {
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-card);
  border-radius:  0 0 var(--radius-lg) var(--radius-lg) ;
  padding: var(--spacing-md);
  box-shadow: var(--shadow-lg);
}
header > div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity var(--transition-fast);
}
.logo:hover {
  opacity: 0.8;
}
.logo img {
  height: 40px;
  margin-right: 0.5rem;
}
.logo h1 {
  font-size: 1.5rem;
  margin: 0;
  color: var(--primary-green);
  > span {
    color: var(--secondary-orange);
    font-weight: bolder;
  }
}
</style>
