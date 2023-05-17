<template>
  <p id="font-text">{{ TextContactButton }}</p>
  <p id="name-designer">{{ NameDesigner }}</p>
  <p id="fundamental-item">{{ FundamentalItem }}</p>
  <!-- tap coming soon -->
  <p id="coming-content">{{ contentComingSoon1 }}</p>
  <!-- tap contact-us -->
  <p id="contact-us">{{ titleContactUs }}</p>
  <p id="content-notes">{{ contentNotes }}</p>
  <!-- btn send now -->
  <p id="btn-send-now">{{ btnSendNow }}</p>
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
    FundamentalItem: {
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
      requited: true
    }
  },
};
</script>

<style scoped>
#font-text {
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  font-size: 14px;
  font-family: "mulish", sans-serif;
  font-weight: 600;
}
#name-designer {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-bottom: 10px;
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
#btn-send-now{
  font-family: 'Mulish';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
letter-spacing: -0.01em;
color: #FCFDFE;
}
</style>