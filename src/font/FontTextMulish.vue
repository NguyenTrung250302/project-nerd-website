<template>
  <!-- header -->
  <p id="btn-contact">{{ TextContactButton }}</p>
  <!-- component featured -->
  <p id="name-designer">{{ NameDesigner }}</p>
  <p id="name-designer1">{{ NameDesigner1 }}</p>
  <p id="fundamental-item">{{ FundamentalItem }}</p>
  <p id="fundamental-item-black">{{ FundamentalItemBlack }}</p>
  <!-- tap coming soon -->
  <p id="coming-content">{{ contentComingSoon1 }}</p>
  <!-- tap contact-us -->
  <p id="contact-us">{{ titleContactUs }}</p>
  <p id="content-notes">{{ contentNotes }}</p>
  <!-- btn send now -->
  <p id="btn-send-now">{{ btnSendNow }}</p>
  <!-- tap contact teams -->
  <p id="title-logo-teams">{{ titleLogoTeams }}</p>
  <p id="role-name">{{ roleName }}</p>
  <!-- btn register -->
  <p id="btn-register">{{ btnRegister }}</p>
  <!-- introduction component -->
  <p id="title-introduction">{{ titleIntroduction }}</p>
  <p id="content-introduction">{{ ContentIntroduction }}</p>
  <!-- course component -->
  <p id="course-title">{{ courseTitle }}</p>
  <p id="main-title-course">{{ mainTitleCourse }}</p>
  <p id="content-courses-a">{{ contentCourses }}</p>
  <!-- list introduction component -->
  <p id="title-results">{{ titleResults }}</p>
  <p id="content-results">{{ contentResults }}</p>
</template>

<script>
export default {
  props: {
    TextContactButton: {
      type: String,
      requited: true,
    },
    NameDesigner: {
      type: String,
      requited: true,
    },
    NameDesigner1: {
      type: String,
      requited: true,
    },
    FundamentalItem: {
      type: String,
      requited: true,
    },
    FundamentalItemBlack: {
      type: String,
      requited: true,
    },
    contentComingSoon1: {
      type: String,
      requited: true,
    },
    titleContactUs: {
      type: String,
      requited: true,
    },
    contentNotes: {
      type: String,
      requited: true,
    },
    btnSendNow: {
      type: String,
      requited: true,
    },
    titleLogoTeams: {
      type: String,
      requited: true,
    },
    roleName: {
      type: String,
      required: true,
    },
    btnRegister: {
      type: String,
      required: true,
    },
    titleIntroduction: {
      type: String,
      required: true,
    },
    ContentIntroduction: {
      type: String,
      required: true,
    },
    courseTitle: {
      type: String,
      required: true,
    },
    mainTitleCourse: {
      type: String,
      required: true,
    },
    contentCourses: {
      type: String,
      required: true,
    },
    titleResults: {
      type: String,
      required: true,
    },
    contentResults: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
#btn-contact {
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-size: 14px;
  font-family: "mulish", sans-serif;
  font-weight: 600;
  margin: 0;
  padding: 0;
}
#name-designer {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin: 0;
}
#name-designer1 {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #3e3e5f;
}
#fundamental-item {
  margin: 0 0;
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 8px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
}
#fundamental-item-black {
  margin: 0 0;
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 8px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #030303;
}
#coming-content {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(62, 62, 95, 0.655);
  margin: 0;
  padding: 0;
}
#contact-us {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
  color: #272e35;
  margin: 0;
}
#content-notes {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #6e757c;
  margin: 0;
}
#btn-send-now {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #fcfdfe;
}
#title-logo-teams {
  font-family: "Mulish", sans-serif;
  font-weight: 800;
  font-size: 20px;
  color: #272e35;
  text-align: center;
}
#role-name {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #272e35;
  opacity: 0.75;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 160px;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#btn-register {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.03em;
  color: #fcfdfe;
  position: absolute;
  margin: 0 auto;
}
#title-introduction {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
  color: #272e35;
  margin: 0;
  padding: 0;
}
#content-introduction {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #6e757c;
}
#course-title {
  font-family: "Mulish", sans-serif;
  font-weight: 800;
  font-size: 36px;
  display: flex;
  align-items: center;
  letter-spacing: -1px;
  color: #05192d;
  margin: 0;
  padding: 0;
}
#main-title-course {
  font-family: "Mulish", sans-serif;
  font-weight: 800;
  font-size: 24px;
  display: flex;
  color: #05192d;
  margin: 0;
  padding: 0;
}
#content-courses-a {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #05192d;
  margin: 0;
  padding: 0;
}
#title-results {
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 19px;
  display: flex;
  align-items: center;
  color: #05192d;
}
#content-results {
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #05192d;
  margin: 7px 0;
}
</style>