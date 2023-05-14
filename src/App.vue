<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  padding: 0;
}
div {
  margin: 0;
  padding: 0;
}
ul,li{
  list-style: none;
  margin: 0;
  padding: 0;
}
/* Áp dụng khi chiều rộng màn hình nhỏ hơn hoặc bằng 768px (mobile) */
@media (max-width: 768px) {
  .element {
    font-size: 14px;
    padding: 10px;
    /* Các điều chỉnh khác tùy ý */
  }
}

/* Áp dụng khi chiều rộng màn hình lớn hơn 768px (desktop) */
@media (min-width: 769px) {
  .element {
    font-size: 16px;
    padding: 20px;
    /* Các điều chỉnh khác tùy ý */
  }
}
</style>
