<template>
  <div id="container-partner">
    <header-view />
    <!-- title -->
    <div id="title-contact">
      <font-text-mulish titleContactUs="Become a Partner" />
      <font-text-mulish contentNotes="Questions, bug reports, feedback." />
    </div>
    <!-- body -->
    <div id="contact-partner">
      <!-- left -->
      <div id="contact-modal">
        <div id="form-contact">
          <contact-email placeholderText="Email address"/>
          <contact-name placeholderText="Name"/>
          <contact-company placeholderText="Company name"/>
        </div>
        <send-now-button id="btn-send-now" />
      </div>
      <!-- right -->
      <div id="background-partner">
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
import SendNowButton from "@/button/SendNowButton.vue";
import ContactEmail from "@/BuildTap/ContactUsTap/ContactItem/ContactEmail.vue";
import ContactName from "@/BuildTap/ContactUsTap/ContactItem/ContactName.vue";
import ContactCompany from './ContactItem/ContactCompany.vue';
export default {
  components: {
    HeaderView,
    FooterView,
    FontTextMulish,
    ContactEmail,
    SendNowButton,
    ContactName,
    ContactCompany,
  },
};
</script>

<style scoped>
#container-partner {
  width: 100%;
  height: auto;
}
#title-contact {
  padding: 40px 160px;
}
#contact-partner {
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
#background-partner {
  width: 500px;
  height: 495px;
  background-image: url("@/assets/Light/Become a Partner.png");
  background-size: cover;
}
.custom-input::placeholder {
  color: #2bd3d3; 
  font-size: 16px; 
  font-family: 'mulish',sans-serif;
}
</style>