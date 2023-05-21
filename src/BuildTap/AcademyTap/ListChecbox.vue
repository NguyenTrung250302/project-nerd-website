<template>
  <div class="container-list-checkbox">
    <h1>technology</h1>
    <ul>
      <li class="font-li" v-for="technology in technology" :key="technology.id">
        <label>
          <input
            class="input-check"
            type="checkbox"
            v-model="technology.checked"
          />
          {{ technology.label }}
        </label>
      </li>
    </ul>
  </div>
  <!--  -->
  <div class="container-list-checkbox">
    <h1>topic</h1>
    <ul>
      <li class="font-li" v-for="topic in topic" :key="topic.id">
        <label>
          <input class="input-check" type="checkbox" v-model="topic.checked" />
          {{ topic.label }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technology: [
        { id: 1, label: "python", checked: false },
        { id: 2, label: "R", checked: false },
        { id: 3, label: "theory", checked: false },
        { id: 4, label: "SQL", checked: false },
        { id: 5, label: "Power BI", checked: false },
        { id: 6, label: "spreadsheets", checked: false },
        { id: 7, label: "tableau", checked: false },
        { id: 8, label: "shell", checked: false },
        { id: 9, label: "git", checked: false },
        { id: 10, label: "julia", checked: false },
        { id: 11, label: "docker", checked: false },
        { id: 12, label: "excel", checked: false },
        { id: 13, label: "scala", checked: false },
      ],
      topic: [
        { id: 1, label: "AI & machine learning", checked: false },
        { id: 2, label: "probability & statistics", checked: false },
        { id: 3, label: "programming", checked: false },
        { id: 4, label: "data manipulation", checked: false },
        { id: 5, label: "data visualization", checked: false },
        { id: 6, label: "applied finance", checked: false },
        { id: 7, label: "case studies", checked: false },
        { id: 8, label: "importing & cleaning data", checked: false },
        { id: 9, label: "data engineering", checked: false },
        { id: 10, label: "other", checked: false },
        { id: 11, label: "management", checked: false },
        { id: 12, label: "reporting", checked: false },
      ],
    };
  },
};
</script>

<style scoped>
.container-list-checkbox {
  margin: 20px 0;
}
ul {
  list-style-type: none;
}
.font-li {
  margin-bottom: 10px;
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-transform: capitalize;
  color: #05192d;
  display: flex;
}
.input-check {
  width: 16px;
  height: 16px;
  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(103, 110, 118, 0.08),
    0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  /* note */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  outline: none;
}
h1 {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #05192d;
}
</style>
