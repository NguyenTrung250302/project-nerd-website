<template>
  <button @click="handleClick" id="btn-send-now">Send Now</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('submit'); // Phát ra sự kiện 'submit' khi người dùng click vào nút
    }
  }
};
</script>


<style scoped>
#btn-send-now {
  width: 145px;
  height: 48px;
  background: #000000;
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.01em;
  color: #fcfdfe;
  transition: transform 0.3s ease;
  text-decoration: none;
  transition-timing-function: ease-in-out;
  margin-left: 30px;
}
#btn-send-now:hover {
  cursor: pointer;
  background-color: #eb8347;
  transform: scale(1.05);
}
</style>