<template>
  <div id="container-course-description">
    <!--  content -->
    <div id="content-block">
      <font-text-mulish courseTitle="Course Description" />
      <div id="courses">
        <font-text-mulish mainTitleCourse="An Introduction to Python" />
        <font-text-mulish
          contentCourses="Python has grown to become the market leader in programming languages and the
          language of choice for data analysts and data scientists. Demand for data skills is rising
          because companies want to gain actionable insights from their data."
        />
      </div>
      <!--  -->
      <div id="courses">
        <font-text-mulish mainTitleCourse="Discover the Python Basics" />
        <font-text-mulish
          contentCourses="This is a Python course for beginners, and we designed it for people with no prior Python
          experience. It is even suitable if you have no coding experience at all. You will cover the
          basics of Python, helping you understand common, everyday functions and applications,
          including how to use Python as a calculator, understanding variables and types, and
          building Python lists. The first half of this course prepares you to use Python interactively
          and teaches you how to store, access, and manipulate data using one of the most
          popular programming languages in the world."
        />
      </div>
      <!--  -->
      <div id="courses">
        <font-text-mulish
          mainTitleCourse="Explore Python Functions and Packages"
        />
        <font-text-mulish
          contentCourses="PThe second half of the course starts with a view of how you can use functions, methods,
          and packages to use code that other Python developers have written. As an open-
          source language, Python has plenty of existing packages and libraries that you can use
          to solve your problems."
        />
      </div>
      <!--  -->
      <div id="courses">
        <font-text-mulish mainTitleCourse="Get Started with NumPy" />
        <font-text-mulish
          contentCourses="NumPy is an essential Python package for data science. You’ll finish this course by
          learning to use some of the most popular tools in the NumPy array and start exploring
          data in Python."
        />
      </div>
    </div>
    <!-- img -->
    <div id="background-img">
      <icon-coming-soon id="img"/>
    </div>
  </div>
</template>

<script>
import FontTextMulish from "@/font/FontTextMulish.vue";
import IconComingSoon from "@/Icon/IconComingSoon.vue";
export default {
  components: {
    FontTextMulish,
    IconComingSoon,
  },
};
</script>

<style scoped>
#container-course-description {
  width: 1090px;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
}
#content-block {
  width: 750px;
  height: auto;
}
#background-img {
  width: 420px;
  height: 770px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#courses {
  margin: 25px 0 0 0;
}
#img {
  width: 360px;
  height: 540px;
}
</style>