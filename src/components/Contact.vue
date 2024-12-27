<template>
  <section id="contact">
    <form @submit.prevent="submitForm">
      <h2>Contact Me</h2>
      <input type="text" name="name" v-model="name" placeholder="Full Name" />
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="Email Address"
      />
      <textarea
        name="message"
        v-model="message"
        placeholder="Your Message"
      ></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const name = ref("");
const email = ref("");
const message = ref("");

const submitForm = async () => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name.value,
      email: email.value,
      message: message.value,
    }),
  });
  const result = await response.json();
  if (result.success) {
    console.log(result);
  }
};
</script>
