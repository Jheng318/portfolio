<template>
  <header>
    <div class="headerDiv">
      <RouterLink to="/">
        <img src="../assets/logo-new_logo.svg" id="logo" />
      </RouterLink>
      <label for="hamburger" class="hamburgerIcon"> &#9776; </label>
    </div>
    <input type="checkbox" id="hamburger" />
    <nav>
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
