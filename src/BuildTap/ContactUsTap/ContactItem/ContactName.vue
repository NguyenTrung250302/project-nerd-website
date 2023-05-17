<template>
  <div id="contact-name">
    <icon-user />
    <input
      v-model="inputValue"
      :placeholder="placeholderText"
      id="custom-input"
    />
  </div>
</template>

<script>
import IconUser from "@/Icon/IconUser.vue";
export default {
  components: {
    IconUser
  },
  props: {
    placeholderText: {
      type: String,
      requited: true,
    },
  },
  data() {
    return {
      inputValue: "",
    };
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
</style>