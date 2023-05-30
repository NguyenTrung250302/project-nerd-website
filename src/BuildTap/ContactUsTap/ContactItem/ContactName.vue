<template>
  <div>
    <div id="contact-name">
      <icon-user />
      <input
        v-model="name"
        :placeholder="placeholderText"
        id="custom-input"
        @blur="validateName"
      />
    </div>
    <div v-if="isInvalidFormat" id="error-message-name">
      {{ isInvalidFormat }}
      <!-- Hiển thị thông báo lỗi nếu định dạng tên không hợp lệ -->
    </div>
  </div>
</template>

<script>
import IconUser from "@/Icon/IconUser.vue";
export default {
  components: {
    IconUser,
  },
  props: {
    placeholderText: {
      type: String,
      requited: true,
    },
  },
  data() {
    return {
      name: "",
      isInvalidFormat: "",
    };
  },
  methods: {
    validateName() {
      if (!/^[A-Z\s]+$/.test(this.name)) {
        this.isInvalidFormat =
          "*Tên của bạn phải viết hoa và không chứa các ký tự đặc biệt !"; // Nếu định dạng tên không hợp lệ, gán thông báo lỗi
      } else {
        this.isInvalidFormat = ""; // Nếu định dạng tên hợp lệ, xóa thông báo lỗi
      }
    },
  },
};
</script>

<style scoped>
#contact-name {
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
#error-message-name {
  margin: 10px 0;
  color: red;
  font-weight: 600;
  font-family: "mulish", sans-serif;
  font-size: 14px;
}
</style>