<template>
  <div id="container-list-introduction">
    <!-- left -->
    <div id="results">
      <div id="title-results">
        <font-text-mulish titleResults="417 results" />
      </div>
      <!-- 1 -->
      <div id="result-composition">
        <!-- logo -->
        <logo-python />
        <!--  -->
        <div id="content-result">
          <font-text-mulish titleResults="Introduction to Python" />
          <!-- content -->
          <font-text-mulish
            contentResults="Master the basics of data analysis with Python in just four hours. This online course will introduce the
            Python interface and explore popular packages."
          />
          <!--summary information -->
          <summary-info
            content1="4 hours"
            content2="Programming"
            content3="Hugo Bowne-Anderson"
          />
        </div>
      </div>
      <!-- 2 -->
      <div id="result-composition">
        <!-- logo -->
        <logo-brain />
        <!--  -->
        <div id="content-result">
          <font-text-mulish titleResults="Introduction to ChatGPT" />
          <!-- content -->
          <font-text-mulish
            contentResults="Learn how to use ChatGPT. Discover best practices for writing prompts and explore common
            business use cases for the powerful AI tool."
          />
          <!--summary information -->
          <summary-info
            content1="1 hour"
            content2="AI & Machine Learning"
            content3="James Chapman"
          />
        </div>
      </div>
      <!-- 3 -->
      <div id="result-composition">
        <!-- logo -->
        <logo-sql-serve />
        <!--  -->
        <div id="content-result">
          <font-text-mulish titleResults="Introduction to SQL" />
          <!-- content -->
          <font-text-mulish
            contentResults="Learn how to create and query relational databases using SQL in just two hours."
          />
          <!--summary information -->
          <summary-info
            content1="2 hours"
            content2="Data Manipulation"
            content3="Izzy Weber"
          />
        </div>
      </div>
      <!-- 4 -->
      <div id="result-composition">
        <!-- logo -->
        <logo-r />
        <!--  -->
        <div id="content-result">
          <font-text-mulish titleResults="Introduction to R" />
          <!-- content -->
          <font-text-mulish
            contentResults="Master the basics of data analysis in R, including vectors, lists, and data frames, and practice R with
            real data sets."
          />
          <!--summary information -->
          <summary-info
            content1="4 hours"
            content2="Programming"
            content3="Jonathan Cornelissen"
          />
        </div>
      </div>
      <!-- 5 -->
      <div id="result-composition">
        <!-- logo -->
        <logo-brain />
        <!--  -->
        <div id="content-result">
          <font-text-mulish titleResults="Understanding Data Science" />
          <!-- content -->
          <font-text-mulish
            contentResults="An introduction to data science with no coding involved."
          />
          <!--summary information -->
          <summary-info
            content1="2 hours"
            content2="Other"
            content3="Hadrien Lacroix"
          />
        </div>
      </div>
      <!-- 6 -->
      <div id="result-composition">
        <!-- logo -->
        <logo-brain />
        <!--  -->
        <div id="content-result">
          <font-text-mulish titleResults="Understanding Data Visualization" />
          <!-- content -->
          <font-text-mulish
            contentResults="An introduction to data science with no coding involved."
          />
          <!--summary information -->
          <summary-info
            content1="2 hours"
            content2="Data Visualization"
            content3="Richie Cotton"
          />
        </div>
      </div>
      <!-- 7 -->
      <div id="result-composition">
        <!-- logo -->
        <logo-python />
        <!--  -->
        <div id="content-result">
          <font-text-mulish titleResults="Intermediate Python" />
          <!-- content -->
          <font-text-mulish
            contentResults="Level up your data science skills by creating visualizations using Matplotlib and manipulating
            DataFrames with pandas."
          />
          <!--summary information -->
          <summary-info
            content1="4 hours"
            content2="Programming"
            content3="Hugo Bowne-Anderson"
          />
        </div>
      </div>
      <!-- 8 -->
      <div id="result-composition">
        <!-- logo -->
        <logo-chart />
        <!--  -->
        <div id="content-result">
          <font-text-mulish titleResults="Introduction to Power BI" />
          <!-- content -->
          <font-text-mulish
            contentResults="Master the Power BI basics and learn to use the data visualization software to build impactful
            reports."
          />
          <!--summary information -->
          <summary-info
            content1="3 hours"
            content2="Data Visualization"
            content3="Sara Billen"
          />
        </div>
      </div>
      <!-- 9 -->
      <div id="result-composition">
        <!-- logo -->
        <logo-python />
        <!--  -->
        <div id="content-result">
          <font-text-mulish titleResults="Data Manipulation with pandas" />
          <!-- content -->
          <font-text-mulish
            contentResults="Learn how to import and clean data, calculate statistics, and create visualizations with pandas."
          />
          <!--summary information -->
          <summary-info
            content1="4 hours"
            content2="Data Manipulation"
            content3="Richie Cotton"
          />
        </div>
      </div>
      <!-- 10 -->
      <div id="result-composition">
        <!-- logo -->
        <logo-sql-serve />
        <!--  -->
        <div id="content-result">
          <font-text-mulish titleResults="Intermediate SQL" />
          <!-- content -->
          <font-text-mulish
            contentResults="Accompanied at every step with hands-on practice queries, this course teaches you everything you
            need to know to analyze data using your own SQL code today!"
          />
          <!--summary information -->
          <summary-info
            content1="4 hours"
            content2="Data Manipulation"
            content3="Jasmin Ludolf"
          />
        </div>
      </div>
      <!-- slider -->
      <navigation-bar-introduction />
    </div>
    <!-- right -->
    <div id="technology">
      <list-checbox />
    </div>
  </div>
</template>

<script>
import FontTextMulish from "@/font/FontTextMulish.vue";
import LogoPython from "./logoAcademy/logoPython.vue";
import SummaryInfo from "./SummaryInfo.vue";
import LogoBrain from "@/BuildTap/AcademyTap/logoAcademy/logoBrain.vue";
import LogoSqlServe from "@/BuildTap/AcademyTap/logoAcademy/LogoSqlServe.vue";
import LogoChart from "./logoAcademy/LogoChart.vue";
import LogoR from "@/BuildTap/AcademyTap/logoAcademy/LogoR.vue";
import NavigationBarIntroduction from './NavigationBarIntroduction.vue';
import ListChecbox from "@/BuildTap/AcademyTap/ListChecbox.vue";

export default {
  components: {
    FontTextMulish,
    LogoPython,
    SummaryInfo,
    LogoBrain,
    LogoSqlServe,
    LogoChart,
    LogoR,
    NavigationBarIntroduction,
    ListChecbox
  },
};
</script>

<style scoped>
#container-list-introduction {
  width: 1170px;
  height: auto;
  margin: 0 auto 50px auto;
  background: #f5f6f7;
  display: flex;
  border-radius: 8px;
}
#results {
  width: 880px;
  height: auto;
}
#technology {
  width: 290px;
  height: 900px;
}
#list-checkbox {
  width: 250px;
  height: 900px;
  background-color: skyblue;
  margin: 0 auto;
}
#title-results {
  width: 840px;
  margin: 20px auto;
}
#result-composition {
  width: 840px;
  height: auto;
  background: #ffffff;
  border: 1px solid #272e35;
  border-radius: 8px;
  margin: 15px auto;
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
}
#content-result {
  width: 780px;
  height: auto;
}
#line-spacing {
  margin-bottom: 20px;
}
#slider {
  width: 840px;
  height: 100px;
  background-color: aqua;
  margin: 0 auto;
}
</style>