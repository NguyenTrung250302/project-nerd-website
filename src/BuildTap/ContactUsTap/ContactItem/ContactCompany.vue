<template>
  <div>
    <div id="contact-company">
      <icon-company />
      <input
        v-model="company"
        :placeholder="placeholderText"
        id="custom-input"
        @blur="validateName"
      />
    </div>
    <div v-if="isInvalidFormat" id="error-message-company">
      {{ isInvalidFormat }}
      <!-- Hiển thị thông báo lỗi nếu định dạng tên không hợp lệ -->
    </div>
  </div>
</template>

<script>
import IconCompany from "@/Icon/IconCompany.vue";
export default {
  components: {
    IconCompany,
  },
  props: {
    placeholderText: {
      type: String,
      requited: true,
    },
  },
  data() {
    return {
      company: "",
      isInvalidFormat: "",
    };
  },
  methods: {
    validateName() {
      if (!/^[A-Z\s]+$/.test(this.company)) {
        this.isInvalidFormat =
          "* Tên cơ quan công ty cần viết hoa và không chứa ký tự đặc biệt !";
      } else {
        this.isInvalidFormat = "";
      }
    },
  },
};
</script>

<style scoped>
#contact-company {
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
#error-message-company {
  margin: 10px 0;
  color: red;
  font-weight: 600;
  font-family: "mulish", sans-serif;
  font-size: 14px;
}
</style>