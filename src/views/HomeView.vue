<template>
  <div class="responsive">
    <layout>
      <main class="main-con">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </layout>
    <!-- <Header />
    <main class="main-con">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer /> -->
  </div>
</template>
<script setup lang="ts">
import layout from "@/shared/layout.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
// how to do https://web3forms.com/blog/contact-forms-portfolio-websites
// for the contact form send it to : https://web3forms.com/
</script>
