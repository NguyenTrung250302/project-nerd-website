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
        <send-now-button />
      </div>
    </div>
    <!--  -->
    <div>
      <textarea id="area" v-model="message" placeholder="haha"></textarea>
      <button @click="sendMessage">Gửi</button>
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
  data() {
    return {
      message: '', // Dữ liệu của textarea
      sentMessage: '' // Thông tin đã gửi
    };
  },
  methods: {
    sendMessage() {
      // Xử lý gửi thông tin ở đây
      // Ví dụ: gửi thông tin lên server, lưu trữ vào cơ sở dữ liệu, vv.
      // Trong ví dụ này, chúng ta chỉ cập nhật thuộc tính sentMessage với nội dung từ textarea
      this.sentMessage = this.message;
      this.message = ''; // Xóa nội dung của textarea sau khi gửi
    }
  }
};
</script>

<style scoped>
#area {
  width: 300px;
  height: 200px;
  border: none;
  outline: none;
  background-color: cadetblue;
}
</style>