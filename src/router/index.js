import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ComingSoonTap from "@/BuildTap/ComingSoonTap/ComingSoonTap.vue";
import ContactUsTap from "@/BuildTap/ContactUsTap/ContactUsTap.vue";
import ContactPartnerTap from "@/BuildTap/ContactUsTap/ContactPartnerTap.vue";
import ContactAffiliateTap from "@/BuildTap/ContactUsTap/ContactAffiliateTap.vue";
import ContactRegisterTap from "@/BuildTap/ContactUsTap/ContactRegisterTap";
import ContactTeamsTap from "@/BuildTap/ContactUsTap/ContactTeamsTap.vue";
import AcademyMainTap from "@/BuildTap/AcademyTap/AcademyMainTap.vue";
import AcademyDetailTap from "@/BuildTap/AcademyTap/AcademyDetailTap.vue";
import ArticleDetail from "@/BuildTap/ArticleTap/ArticleDetail.vue";
import ComponentTest from "@/BuildTap/Test/ComponentTest.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/testUi",
    component: ComponentTest,
  },
  {
    path: "/comingSoon",
    component: ComingSoonTap,
  },
  {
    path: "/contactUs",
    component: ContactUsTap,
  },
  {
    path: "/partner",
    component: ContactPartnerTap,
  },
  {
    path: "/affiliate",
    component: ContactAffiliateTap,
  },
  {
    path: "/register",
    component: ContactRegisterTap,
  },
  {
    path: "/teams",
    component: ContactTeamsTap,
  },
  {
    path: "/academy",
    component: AcademyMainTap,
  },
  {
    path: "/academyDetail",
    component: AcademyDetailTap,
  },
    {
    path: "/articleDetail",
    component: ArticleDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
