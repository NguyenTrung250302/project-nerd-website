<template>
  <div id="contact-topic">
    <div id="a">
      <icon-topic />
      <input
        v-model="inputValue"
        :placeholder="placeholderText"
        id="custom-input"
      />
    </div>
    <!-- drop down -->
    <div class="dropdown-container">
      <div class="dropdown-icon" @click="toggleDropdown">
        <icon-drop-down />
      </div>
    </div>
  </div>
</template>

<script>
import IconTopic from "@/Icon/IconTopic.vue";
import IconDropDown from "@/Icon/IconDropDown.vue";
export default {
  components: {
    IconTopic,
    IconDropDown,
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
#contact-topic {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 527px;
  height: 56px;
  background: #f5f6f7;
  border-radius: 8px;
  margin-bottom: 15px;
}
#a {
  display: flex;
  align-items: center;
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