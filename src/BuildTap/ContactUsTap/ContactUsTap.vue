<template>
  <div class="container-contact">
    <header-view />
    <!-- title -->
    <div id="title-contact">
      <font-text-mulish titleContactUs="Contact Us" />
      <font-text-mulish contentNotes="Questions, bug reports, feedback." />
    </div>
    <!-- body -->
    <div id="contact-us">
      <!-- left -->
      <div id="contact-modal">
        <div id="form-contact">
          <contact-email placeholderText="Email address" />
          <contact-name placeholderText="Name" />
          <contact-company placeholderText="Company name" />
          <contact-choose-topic placeholderText="Choose Topic" />
          <contact-help placeholderContact="How can we help you ?" />
        </div>
        <send-now-button id="btn-send-now" />
      </div>
      <!-- right -->
      <div id="background-contact"></div>
    </div>
    <!--  -->
    <footer-view />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
import FontTextMulish from "@/font/FontTextMulish.vue";
import SendNowButton from "@/button/SendNowButton.vue";
import ContactEmail from "@/BuildTap/ContactUsTap/ContactItem/ContactEmail.vue";
import ContactHelp from "@/BuildTap/ContactUsTap/ContactItem/ContactHelp.vue";
import ContactName from "@/BuildTap/ContactUsTap/ContactItem/ContactName.vue";
import ContactCompany from "./ContactItem/ContactCompany.vue";
import ContactChooseTopic from "./ContactItem/ContactChooseTopic.vue";
export default {
  components: {
    HeaderView,
    FooterView,
    FontTextMulish,
    ContactEmail,
    SendNowButton,
    ContactHelp,
    ContactName,
    ContactCompany,
    ContactChooseTopic,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
#container-contact {
  width: 100%;
  height: auto;
}
#title-contact {
  padding: 40px 160px;
}
#contact-us {
  width: 1170px;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 50px auto 200px auto;
}
#contact-modal {
  width: 590px;
  height: auto;
  box-shadow: 1px 32px 32px -20px #dedede;
  border-radius: 16px;
  padding: 40px 0;
}
#form-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#btn-send-now {
  margin-left: 30px;
}
#background-contact {
  width: 500px;
  height: 495px;
  background-image: url("@/assets/Light/Contact Us.png");
  background-size: cover;
}
.custom-input::placeholder {
  color: #2bd3d3;
  font-size: 16px;
  font-family: "mulish", sans-serif;
}
</style>