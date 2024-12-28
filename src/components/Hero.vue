<template>
  <section class="hero">
    <img src="../assets/laptop-icon-02.svg" id="hero-img" />
    <div class="heroText">
      <h1>Hi, I am <span>Jia Hong</span></h1>
      <p>
        Full-Stack Developer based in Singapore <br />
        interested in new Web Technologies
      </p>
      <button @click="download">Resume</button>
    </div>
  </section>
</template>
<script setup lang="ts">
const download = () => {
  // replace the url with the link of the github pages link
  const url: string = "https://jheng318.github.io/portfolio-vue/resume.pdf";
  const link = document.createElement("a") as HTMLAnchorElement;
  link.href = url;
  link.download = "Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
