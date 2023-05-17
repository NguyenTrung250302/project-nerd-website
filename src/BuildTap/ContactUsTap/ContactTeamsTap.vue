<template>
  <div id="container-teams">
    <header-view />
    <!-- title -->
    <div id="title-contact">
      <font-text-mulish titleContactUs="Meet The Team" />
      <font-text-mulish
        contentNotes="Amet minim mollit non deserunt ullamco est sit aliqua."
      />
    </div>
    <!-- body -->
    <div id="body">
      <div id="member-frame">
        <!-- row 1 -->
        <div id="row">
          <!-- member 1 -->
          <div id="member">
            <div id="avatar">
              <img src="" alt="loading" />
            </div>
            <div id="content">
              <font-text-inter memberName="Lexie Wolff" />
              <font-text-mulish roleName="Communications Strategist" />
            </div>
          </div>
          <!-- member 2 -->
          <div id="member">
            <div id="avatar">
              <img src="" alt="loading" />
            </div>
            <div id="content">
              <font-text-inter memberName="Ida Flatley" />
              <font-text-mulish roleName="Lead Research Producer" />
            </div>
          </div>
          <!-- member 3 -->
          <div id="member">
            <div id="avatar">
              <img src="" alt="loading" />
            </div>
            <div id="content">
              <font-text-inter memberName="Britney Barrows" />
              <font-text-mulish roleName="Implementation Specialist" />
            </div>
          </div>
          <!-- member 4 -->
          <div id="member">
            <div id="avatar">
              <img src="" alt="loading" />
            </div>
            <div id="content">
              <font-text-inter memberName="Chelsey Corkery" />
              <font-text-mulish roleName="Forward Interactions Developer" />
            </div>
          </div>
          <!-- member 5 -->
          <div id="member">
            <div id="avatar">
              <img src="" alt="loading" />
            </div>
            <div id="content">
              <font-text-inter memberName="Chelsey Corkery" />
              <font-text-mulish roleName="Forward Interactions Developer" />
            </div>
          </div>
        </div>
        <!-- row 2 -->
        <div id="row">
          <!-- member 6 -->
          <div id="member">
            <div id="avatar">
              <img src="" alt="loading" />
            </div>
            <div id="content">
              <font-text-inter memberName="Chelsey Corkery" />
              <font-text-mulish roleName="Forward Interactions Developer" />
            </div>
          </div>
          <!-- member 7 -->
          <div id="member">
            <div id="avatar">
              <img src="" alt="loading" />
            </div>
            <div id="content">
              <font-text-inter memberName="Britney Barrows" />
              <font-text-mulish roleName="Implementation Specialist" />
            </div>
          </div>
          <!-- member 8 -->
          <div id="member">
            <div id="avatar">
              <img src="" alt="loading" />
            </div>
            <div id="content">
              <font-text-inter memberName="Lexie Wolff" />
              <font-text-mulish roleName="Communications Strategist" />
            </div>
          </div>
          <!-- member 9 -->
          <div id="member">
            <div id="avatar">
              <img src="" alt="loading" />
            </div>
            <div id="content">
              <font-text-inter memberName="Ida Flatley" />
              <font-text-mulish roleName="Lead Research Producer" />
            </div>
          </div>
          <!-- member 10 -->
          <div id="member">
            <div id="avatar">
              <img src="" alt="loading" />
            </div>
            <div id="content">
              <font-text-inter memberName="Ida Flatley" />
              <font-text-mulish roleName="Lead Research Producer" />
            </div>
          </div>
        </div>
      </div>
      <!-- logo -->
      <div id="background-logo">
        <div id="form-logo">
          <!-- logo1 -->
          <div id="logo">
            <div id="img">
              <img src="@/assets/Light/team_icon_1.png" alt="loading" />
            </div>
            <font-text-mulish titleLogoTeams="Young & passionate" />
          </div>
          <!-- logo1 -->
          <div id="logo">
            <div id="img">
              <img src="@/assets/Light/team_icon_2.png" alt="loading" />
            </div>
            <font-text-mulish titleLogoTeams="Enthusiasm & creativity" />
          </div>
          <!-- logo1 -->
          <div id="logo">
            <div id="img">
              <img src="@/assets/Light/team_icon_3.png" alt="loading" />
            </div>
            <font-text-mulish titleLogoTeams="Cheerful & comfortable" />
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <footer-view />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
import FontTextMulish from "@/font/FontTextMulish.vue";
import FontTextInter from "@/font/FontTextInter.vue";
export default {
  components: {
    HeaderView,
    FooterView,
    FontTextMulish,
    FontTextInter,
  },
};
</script>

<style scoped>
#container-teams {
  width: 100%;
  height: auto;
}
#title-contact {
  padding: 40px 160px;
}
#body {
  margin: 20px 0;
  width: 100%;
  height: auto;
}
#background-logo {
  width: 1100px;
  height: 50vh;
  margin: 0 auto;
  border-top: solid 1px #a1b9db;
  display: flex;
  justify-content: center;
  align-items: center;
}
#form-logo {
  width: 685px;
  height: 142px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
#logo {
  width: 160px;
  height: 142px;
}
#img {
  display: flex;
  justify-content: center;
}
#member-frame {
  width: 1100px;
  height: 545px;
  margin: 0 auto 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
#row {
  width: 1100px;
  height: 236px;
  display: flex;
  justify-content: space-between;
}
#member {
  width: 160px;
  height: 100%;
}
#avatar {
  width: 130px;
  height: 130px;
  background-color: rgb(111, 214, 216);
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
}
#avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#content {
  width: 160px;
  height: 85px;
  position: relative;
}
</style>