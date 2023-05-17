<template>
  <div id="contact-help">
    <icon-feedback />
    <div>
    <input
      v-model="inputValue"
      :placeholder="placeholderContact"
      id="custom-input-contact"
    />
    </div>
  </div>
</template>

<script>
import IconFeedback from "@/Icon/IconFeedback.vue";
export default {
  components: {
    IconFeedback
  },
  props: {
    placeholderContact: {
      type: String,
      requited: true,
    },
  },
};
</script>

<style scoped>
#contact-help {
  width: 527px;
  height: 144px;
  background: #f5f6f7;
  border-radius: 8px;
  margin-bottom: 15px;
  display: flex;
  padding: 20px 0;
}
#custom-input-contact {
  font-family: "Mulish", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #070707;
  background: #f5f6f7;
  border: none;
  outline: none;
  border-color: transparent;
  width: 350px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>