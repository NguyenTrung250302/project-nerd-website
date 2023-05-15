<template>
  <div>
    <p class="titleColum">{{ titleColum }}</p>
    <ul>
      <li class="listSolution" v-for="item in listSolution" :key="item">
        {{ item }}
      </li>
    </ul>
    <p class="endTap">{{ endTap }}</p>
  </div>
</template>

<script>
export default {
  props: {
    titleColum: {
      type: String,
      required: true,
    },
    endTap: {
      type: String,
      required: true,
    },
    listSolution: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.titleColum {
  font-family: "Mulish", sans-serif;
  font-weight: 800;
  font-size: 15px;
  line-height: 24px;
  color: #3e3e5f;
  margin: 40px 80px;
}
.listSolution {
  font-family: "Mulish", sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #818196;
  margin: 0 80px 20px 80px;
}
.endTap {
  font-family: "Mulish", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #818196;
}
</style>