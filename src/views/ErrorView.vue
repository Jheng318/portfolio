<template>
  <layout>
    <div class="error-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for is not here.</p>
      <router-link to="/" class="link"> Go Back to Home </router-link>
    </div>
  </layout>
</template>

<script setup lang="ts">
import layout from "@/shared/layout.vue";
</script>
<style scoped>
:root {
  --font-s: 16px;
  --font-m: 18px;
  --font-l: 20px;
  --background-color: #fcf7ff;
  --medium-color: #a4969b;
  --main-color: #655560;
}
.error-container {
  text-align: center;
  background-color: var(--background-color);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 5rem;
  color: var(--main-color);
}

p {
  font-size: 1.5rem;
  color: var(--medium-color);
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  background-color: var(--main-color);
  color: var(--background-color);
  padding: 10px 20px;
  border-radius: 3px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

a:hover {
  background-color: #e6482e;
}
</style>
