<template>
  <div id="contact-company">
    <icon-company />
    <input
      v-model="inputValue"
      :placeholder="placeholderText"
      id="custom-input"
    />
  </div>
</template>

<script>
import IconCompany from '@/Icon/IconCompany.vue';
export default {
  components: {
    IconCompany
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
</style>