<template>
  <div>
    <div id="contact-item">
      <icon-email />
      <input
        v-model="email"
        :placeholder="placeholderText"
        id="custom-input"
        @blur="validateEmail"
      />
    </div>
    <div v-if="isInvalidFormat" id="error-message-email">
      {{ isInvalidFormat }}
    </div>
  </div>
</template>

<script>
import IconEmail from "@/Icon/IconEmail.vue";

export default {
  components: {
    IconEmail,
  },
  props: {
    placeholderText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      email: "",
      isInvalidFormat: "",
    };
  },
  methods: {
    validateEmail() {
      this.isInvalidFormat = "";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email) || this.email === null) {
        this.isInvalidFormat = "* Vui lòng nhập vào email đúng định dạng!";
        this.$emit("emailValidity", false);
      } else {
        this.$emit("emailValidity", true);
      }
    },
  },
};
</script>

<style scoped>
#contact-item {
  display: flex;
  align-items: center;
  width: 527px;
  height: 56px;
  background: #f5f6f7;
  border-radius: 8px;
  margin-bottom: 15px;
}
#custom-input {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #070707;
  background: #f5f6f7;
  padding: 0 0;
  border: none;
  outline: none;
  border-color: transparent;
  width: 300px;
}
p {
  margin: 0;
  padding: 0;
  font-family: "mulish", sans-serif;
}
#error-message-email {
  margin: 10px 0;
  color: red;
  font-weight: 600;
  font-family: "mulish", sans-serif;
  font-size: 14px;
}
</style>