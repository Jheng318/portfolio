<template>
  <section id="contact">
    <Loader v-if="isLoading" />
    <form @submit.prevent="submitForm">
      <h3>Contact Me</h3>
      <input
        type="text"
        class="contactInput"
        id="contactName"
        name="name"
        v-model="name"
        placeholder="Full Name"
      />
      <br />
      <input
        id="contactEmail"
        class="contactInput"
        type="email"
        name="email"
        v-model="email"
        placeholder="Email Address"
      />

      <br />
      <textarea
        id="contactMessage"
        class="contactInput"
        name="message"
        v-model="message"
        placeholder="Your Message"
      ></textarea>

      <br />
      <button
        type="submit"
        class="contactSubmit"
        :class="isLoading ? 'disabled' : ''"
        :disabled="isLoading"
      >
        Send
      </button>
    </form>
  </section>
</template>
<script setup lang="ts">
import { ref, type Ref } from "vue";
import Loader from "./Loader.vue";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const errors: { [key: string]: string } = {
  name: "",
  email: "",
  message: "",
};
const isValid: Ref<boolean> = ref(true);
const name: Ref<string> = ref("");
const email: Ref<string> = ref("");
const message: Ref<string> = ref("");
const isLoading: Ref<boolean> = ref(false);
const checkName = () => {};
const checkEmail = () => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.value.length === 0) {
    errors.email = "Email is required";
    isValid.value = false;
  } else if (!regex.test(email.value)) {
    errors.email = "Please enter a proper email address";
    isValid.value = false;
  } else {
    isValid.value = true;
    errors.email = "";
  }
};
const checkMessage = () => {};
const submitForm = async () => {
  isLoading.value = true;

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

  isLoading.value = false;
  name.value = "";
  email.value = "";
  message.value = "";
  if (result.success) {
    console.log(result);
  }
};
</script>
