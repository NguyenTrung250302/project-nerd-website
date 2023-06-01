<template>
  <div id="container-register">
    <div id="contact-partner">
      <div id="contact-modal">
        <div id="form-contact">
          <contact-email
            placeholderText="Email address"
            @emailValidity="isValidEmail = $event"
          />
          <contact-name placeholderText="Name" />
        </div>
        <send-now-button @submit="handleEmailSubmit" />
      </div>
    </div>
  </div>
</template>

<script>
import SendNowButton from "@/button/SendNowButton.vue";
import ContactEmail from "@/BuildTap/ContactUsTap/ContactItem/ContactEmail.vue";
import ContactName from "@/BuildTap/ContactUsTap/ContactItem/ContactName.vue";

export default {
  components: {
    ContactEmail,
    SendNowButton,
    ContactName,
  },
  data() {
    return {
      isValidEmail: true,
    };
  },
  methods: {
    handleEmailSubmit() {
      if (!this.isValidEmail || this.email === "") {
        alert("Vui lòng kiểm tra lại thông tin đăng nhập!");
        return;
      }
      console.log("Email:", this.email);
      this.$router.push("/");
    },
  },
};
</script>