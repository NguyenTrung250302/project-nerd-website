<template>
  <div class="navigation">
    <button class="nav-button" @click="navigate('left')">
      <icon-left />
      Previous
    </button>
    <div class="form-buttons">
      <button
        class="number-button"
        v-for="num in numbers"
        :key="num"
        @click="navigateTo(num)"
      >
        {{ num }}
      </button>
    </div>
    <button class="nav-button" @click="navigate('right')">
      Next
      <icon-right />
    </button>
  </div>
</template>

<script>
import IconLeft from "@/Icon/IconLeft.vue";
import IconRight from "@/Icon/IconRight.vue";
export default {
  components: {
    IconLeft,
    IconRight,
  },
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      currentIndex: 0,
    };
  },
  methods: {
    navigate(direction) {
      if (direction === "left") {
        this.currentIndex =
          (this.currentIndex - 1 + this.numbers.length) % this.numbers.length;
      } else if (direction === "right") {
        this.currentIndex = (this.currentIndex + 1) % this.numbers.length;
      }
    },
    navigateTo(num) {
      this.currentIndex = this.numbers.indexOf(num);
    },
  },
};
</script>

<style>
bottom:hover {
  cursor: pointer;
}
.navigation {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-button {
  padding: 10px;
  background: #f5f6f7;
  border: none;
  width: 118px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e5e7ea;
}
.nav-button:hover {
  background: #000000;
  cursor: pointer;
  color: #ffffff;
}

.form-buttons {
  display: flex;
  margin: 0;
  padding: 0;
}

.number-button {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #596066;
  width: 40px;
  height: 40px;
  background: #ffffff;
  border-width: 1px 1px 1px 0px;
  border-style: solid;
  border-color: #e5e7ea;
}
.number-button:hover {
  background: #000000;
  cursor: pointer;
  color: #ffffff;
}
</style>
