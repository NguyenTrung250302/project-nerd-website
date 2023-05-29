<template>
  <div id="contact-item">
    <icon-email />
    <!-- Sử dụng component IconEmail để hiển thị biểu tượng email -->
    <input
      v-model="email"
      :placeholder="placeholderText"
      id="custom-input"
      @blur="validateEmail"
    />
    <!-- Ô input để nhập email -->
  </div>
  <div v-if="isInvalidFormat" id="error-message-email">
    {{ isInvalidFormat }}
    <!-- Hiển thị thông báo lỗi nếu định dạng email không hợp lệ -->
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
      email: "", // Dữ liệu email được lưu trữ trong biến email
      isInvalidFormat: "", // Biến này sẽ lưu trữ thông báo lỗi nếu định dạng email không hợp lệ
    };
  },
  methods: {
    validateEmail() {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
        this.isInvalidFormat = "Vui lòng nhập vào email đúng định dạng !"; // Nếu định dạng email không hợp lệ, gán thông báo lỗi
      } else {
        this.isInvalidFormat = ""; // Nếu định dạng email hợp lệ, xóa thông báo lỗi
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
}
</style>