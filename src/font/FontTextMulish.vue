<template>
  <p id="name-designer1">{{ NameDesigner1 }}</p>
  <!-- tap contact-us -->
  <p id="contact-us">{{ titleContactUs }}</p>
  <p id="content-notes">{{ contentNotes }}</p>
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
  <!-- arbitrum intro component -->
  <p id="content-intro">{{ contentIntro }}</p>
  <p id="note-img-chart">{{ noteImgChart }}</p>
  <p id="share-article">{{ shareArticle }}</p>
  <p id="font-blur">{{ fontBtnBlur }}</p>
  <p id="blurred-letters">{{  }}</p>
</template>

<script>
export default {
  props: {
    NameDesigner1: {
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
    contentIntro: {
      type: String,
      required: true,
    },
    noteImgChart: {
      type: String,
      required: true,
    },
    shareArticle: {
      type: String,
      required: true,
    },
    fontBtnBlur: {
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
  width: 155px;
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
/* course */
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
/* results */
#title-results {
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 19px;
  display: flex;
  align-items: center;
  color: #05192d;
  margin: 0;
  padding: 0;
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
/* intro component */
#content-intro {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #4b4b5a;
  margin: 0;
  padding: 0;
}
#note-img-chart {
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 0.5px;
  color: #4b4b5a;
  opacity: 0.8;
  margin: 10px 0;
}
#share-article {
  font-family: "Mulish", sans-serif;
  font-weight: 800;
  font-size: 11px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #3e3e5f;
  margin: 0;
  padding: 0;
}
#font-blur {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #4b4b5a;
  margin-left: 10px;
  /* border-bottom: 1px solid #4b4b5a; */
}
</style>