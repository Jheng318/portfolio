<template>
  <section id="skills">
    <h2>My Skills</h2>
    <div class="skillsCon">
      <div class="frontEnd">
        <h3>Front-End</h3>
        <div v-for="frontSkill in frontEndSkills" class="skillDiv">
          <img
            :src="frontSkill.img"
            :alt="frontSkill.name"
            class="skillIcons"
          />
          <p>{{ frontSkill.name }}</p>
        </div>
      </div>
      <div class="backEnd">
        <h3>Back-End</h3>
        <div v-for="backSkill in backEndSkills" class="skillDiv">
          <img :src="backSkill.img" :alt="backSkill.name" class="skillIcons" />
          <p>{{ backSkill.name }}</p>
        </div>
      </div>
      <div class="others">
        <h3>Others</h3>
        <div v-for="other in others" class="skillDiv">
          <img :src="other.img" :alt="other.name" class="skillIcons" />
          <p>{{ other.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import others from "../data/others";
import frontEndSkills from "../data/front-end";
import backEndSkills from "../data/back-end";
</script>
