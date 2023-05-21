<template>
  <div id="container-introduction">
    <div id="introduction">
      <!-- title introduction -->
      <font-text-mulish titleIntroduction="Nerd Academy" />
      <!-- content introduction -->
      <div id="content-introduction">
        <font-text-mulish
          ContentIntroduction="Master the basics of data analysis with Python in just four hours. This online course will introduce the Python interface and explore popular packages."
        />
      </div>
      <!--  -->
      <div>
        <p class="font-arial">
          <icon-clock />
          Learn at your own pace
        </p>
        <p class="font-arial">
          <icon-code />
          Get hands-on experience
        </p>
        <p class="font-arial">
          <icon-block />
          Complete bite-sized chapters
        </p>
      </div>
    </div>
    <!--  -->
    <div>
      <img
        id="background-img"
        src="@/assets/Light/Nerd-Academy.png"
        alt="loading"
      />
    </div>
  </div>
</template>

<script>
import FontTextMulish from "@/font/FontTextMulish.vue";
import IconClock from "@/Icon/iconClock.vue";
import IconBlock from "@/Icon/IconBlock.vue";
import IconCode from "@/Icon/IconCode.vue";

export default {
  components: {
    FontTextMulish,
    IconClock,
    IconBlock,
    IconCode,
  },
};
</script>

<style scoped>
#container-introduction {
  width: 1090px;
  height: 450px;
  margin: 100px auto 0 auto;
  display: flex;
  justify-content: center;
}
#introduction {
    display: flex;
    flex-direction: column;
}
#content-introduction {
  width: 555px;
  height: auto;
}
.font-arial {
  font-family: "Arial", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #272e35;
  margin: 10px 0;
  padding: 0;
}
#background-img {
  width: 435px;
  height: 400px;
}
</style>