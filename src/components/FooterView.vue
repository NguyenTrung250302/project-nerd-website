<template>
  <div class="container-footer">
    <div class="footer-colum">
      <div class="colum">
        <ul>
          <font-text-footer titleColum="Resources" />
          <li>
            <font-text-footer :listSolution="listSolution1" />
          </li>
        </ul>
      </div>
      <div class="colum">
        <ul>
          <font-text-footer titleColum="About Us" />
          <li>
            <font-text-footer :listSolution="listSolution2" />
          </li>
        </ul>
      </div>
      <div class="colum">
        <ul>
          <font-text-footer titleColum="Support" />
          <li>
            <font-text-footer :listSolution="listSolution3" />
          </li>
        </ul>
      </div>
      <div class="colum">
        <ul>
          <font-text-footer titleColum="Social" />
          <li>
            <font-text-footer :listSolution="listSolution4" />
          </li>
        </ul>
      </div>
    </div>
    <!-- end tap -->
    <div class="footer">
        <font-text-footer endTap="©2023 - NERD" />
        <font-text-footer endTap="Terms & Conditions, Privacy" />
    </div>
  </div>
</template>

<script>
import FontTextFooter from "@/font/FontTextFooter.vue";
export default {
  components: {
    FontTextFooter,
  },
  data() {
    return {
      listSolution1: ["Articles", "Nerd Academy", "Weekly Report", "Dashboard"],
      listSolution2: ["Team", "Contact Us", "Careers"],
      listSolution3: ["Help Center", "Become A Partner", "Become An Affiliate"],
      listSolution4: ["Telegram", "Discord"],
    };
  },
};
</script>

<style scoped>
.footer-colum {
  width: 100%;
  height: 310px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0 0;
}
.colum {
  border: solid 1px rgba(238, 238, 238, 1);
}
.footer {
  width: auto;
  height: 75px;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>