<template>
  <section id="contact">
    <Loader v-if="isLoading" />
    <form @submit.prevent="submitForm">
      <p v-if="success" class="success">
        Your message has successfully been delivered
      </p>
      <h3>Contact Me</h3>

      <span v-if="errors.name" class="error">{{ errors.name }}</span>
      <input
        type="text"
        class="contactInput"
        id="contactName"
        name="name"
        v-model="name"
        placeholder="Full Name"
        @input="validateName(name)"
      />
      <br />
      <span v-if="errors.email" class="error">{{ errors.email }}</span>
      <input
        id="contactEmail"
        class="contactInput"
        type="email"
        name="email"
        v-model="email"
        placeholder="Email Address"
        @input="validateEmail(email)"
      />

      <br />
      <span v-if="errors.message" class="error">{{ errors.message }}</span>
      <textarea
        id="contactMessage"
        class="contactInput"
        name="message"
        v-model="message"
        placeholder="Your Message"
        @input="validateMessage(message)"
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
const WEB3FORMS_ACCESS_KEY = "51eb1f7c-7973-4bf4-8197-7cd31f08f831";

const errors: Ref<{ [key: string]: string }> = ref({
  name: "",
  email: "",
  message: "",
});
const name: Ref<string> = ref("");
const email: Ref<string> = ref("");
const message: Ref<string> = ref("");
const isLoading: Ref<boolean> = ref(false);
const success: Ref<string> = ref("");

const validateName = (name: string) => {
  const nameRegex = /^[a-zA-Z\s]{3,50}$/;
  if (name.length === 0) {
    errors.value.name = "Please enter your name";
  } else if (!nameRegex.test(name)) {
    errors.value.name =
      "Please enter name with at least 3 letters and maximum of 50 letters";
  } else {
    errors.value.name = "";
  }
};
const validateEmail = (email: string) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.length === 0) {
    errors.value.email = "Please enter your email";
  } else if (!emailRegex.test(email)) {
    errors.value.email = "Please enter a valid email address";
  } else {
    errors.value.email = "";
  }
};
const validateMessage = (message: string) => {
  if (message.length === 0) {
    errors.value.message = "Please enter your message";
  } else if (message.length < 10) {
    errors.value.message = "Message should be at least 10 characters long";
  } else {
    errors.value.message = "";
  }
};

const submitForm = async () => {
  validateName(name.value);
  validateEmail(email.value);
  validateMessage(message.value);
  if (!errors.value.name && !errors.value.email && !errors.value.message) {
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
      success.value = result.success;
      setTimeout(() => {
        success.value = "";
      }, 5000);
    }
  } else {
    return;
  }
};
</script>
