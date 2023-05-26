<template>
  <div id="container-register">
    <!-- title -->
    <div id="title-contact">
      <font-text-mulish titleContactUs="Course Register" />
      <font-text-mulish contentNotes="Introduction to Python" />
    </div>
    <!-- body -->
    <div id="contact-partner">
      <!--component input info -->
      <div id="contact-modal">
        <div id="form-contact">
          <contact-email placeholderText="Email address" />
          <contact-name placeholderText="Name" />
        </div>
        <!--component btn click -->
        <send-now-button id="btn-send-now" />
      </div>
    </div>
    <!--  -->
    <div class="image-container">
      <img src="@/assets/img/1.png" alt="Your Image" />
    </div>
  </div>
</template>

<script>
import FontTextMulish from "@/font/FontTextMulish.vue";
import SendNowButton from "@/button/SendNowButton.vue";
import ContactEmail from "@/BuildTap/ContactUsTap/ContactItem/ContactEmail.vue";
import ContactName from "@/BuildTap/ContactUsTap/ContactItem/ContactName.vue";
export default {
  components: {
    FontTextMulish,
    ContactEmail,
    SendNowButton,
    ContactName,
  },
};
</script>

<style scoped>
.image-container {
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 300px;
  border-radius: 10px;
}

.image-container img {
  transition: transform 0.5s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}
</style>