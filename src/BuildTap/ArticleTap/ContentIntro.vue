<template>
  <div id="container-content-intro">
    <!-- 1 -->
    <font-text-raleway titleIntro="Intro" />
    <div class="font-content1">
      <font-text-mulish
        contentIntro="Vậy là sau khoảng thời gian dài chờ đợi từ cộng đồng thì cuối cùng Arbitrum cũng đã công bố  token của mình với ticker $ARB. Việc Arbitrum dành đến 11.62% tổng cung của mình để airdrop cho user đã làm cộng đồng chao đảo. Nhiều ngày nay chúng ta
        có thể thấy từ khoá Arbitrum airdrop xuất hiện dày đặc trên các trang thông tin đại
        chúng. Dẫu vậy, có lẽ mọi người đang không để ý 2 từ khoá Arbitrum 
        DAO và Arbitrum Orbit. Bài viết này mình sẽ bàn luận về 2 chủ đề này cũng với điều mọi
        người mong ngóng suốt mấy hôm nay: Now token, wen dump?"
      />
    </div>
    <!-- 2 -->
    <font-text-raleway titleIntro="Arbitrum DAO" />
    <div class="font-content1">
      <font-text-mulish
        contentIntro="Chắc nhiều bạn sẽ nghĩ việc $ARB ra token sẽ chỉ là để incentivze hệ sinh thái hay
        đơn giản chỉ là “ra token để có cái mà team ăn chứ”. Thực ra, lí do không chỉ có vậy."
      />
      <font-text-mulish
        contentIntro="Từ trước đến nay các 
        Layer 2
        nói chung và Arbitrum nói riêng đang khá là
        centralized
        , Đối với Arbitrum thì nó có một khái niệm gọi là chain owner. Chain
        owner này kiểu như là một admin cho mạng lưới, có nhiệm vụ kiểm soát các thay đổi
        với Arbitrum."
      />
      <font-text-mulish
        contentIntro="$ARB token sẽ giúp cho Arbitrum phân quyền hơn thông qua cơ chế DAO khá quen
        thuộc. Offchain Labs chuyển Arbitrum sang DAO cũng có nghĩa họ đã giao quyền sở
        hữu chain này lại cho các $ARB holder."
      />
      <font-text-mulish
        contentIntro="$ARB holder sẽ có quyền vote các proposal của Arbitrum và các proposal này sẽ
        hoàn toàn execute 
        on-chain
        tức là không cần đến đội ngũ coreteam phải đi propose."
      />
      <!-- img -->
      <img id="img-chart" src="@/assets/img/1.png" alt="loading">
      <div id="note-img">
        <font-text-mulish noteImgChart="Self executing DAO" />
      </div>
      <!--  -->
      <font-text-mulish
        contentIntro="Nói chung đơn giản chỉ có vậy thôi. Mình đánh giá utility của ARB là khá giống với
        OP khi hai token này chỉ để govern và không thể được sử dụng để làm 
        gas
        (Arbitrum
        và Optimism hiện tại sử dụng ETH làm gas cho giao dịch). Nhắc đến governace thì
        mình sẽ nói thêm một chút về delegate program."
      />
      <font-text-mulish
        contentIntro="Voting power của ARB holder sẽ dựa trên số lượng ARB mà họ nắm giữ. Những
        người này sẽ có thể tự vote theo ý thich của mình hoặc nếu lười thì có thể uỷ quyền
        cho người khác để vote các proposal thay mình thông qua Tally."
      />
      <font-text-mulish
        contentIntro="Một điểm cần lưu ý là ARB sẽ govern cả Arbitrum One và Arbitrum Nova."
      />
    </div>
    <!-- 3 -->
    <font-text-raleway titleIntro="Arbitrum Orbit" />
    <div class="font-content1">
      <font-text-mulish
        contentIntro="Sau Layer 2 là gì? Layer 3? Well u get that right. Cùng với việc công bố DAO model
        thì Arbitrum cũng giới thiệu về Arbitrum Orbit. Đơn giản dễ hiểu thì Orbit là một bộ
        khung mẫu cho các dev có thể xây dựng lên các Layer 3 trên Arbitrum. Các Layer 3
        này sẽ hoàn toàn permissionless (tức là không cần DAO phải thông qua để deploy
        trên Arbitrum)."
      />
      <font-text-mulish
        contentIntro="Có 3 lí do chính để deploy 1 Layer 3 trên Arbitrum"
      />
      <ul>
        <li class="hidden">
          <font-text-mulish
            contentIntro="* Khả năng mở rộng tốt hơn: Mỗi Layer 3 sẽ sử dụng resource của riêng mình nên
            sẽ tránh được bottleneck của việc sử dụng chung."
          />
        </li>
        <li class="hidden">
          <font-text-mulish
            contentIntro="* Khả năng linh động trong việc chọn security model (ví dụ như kết hợp 
            trust
            minimization của Arbitrum One và phí giao dịch thấp của Arbitrum Nova)."
          />
        </li>
        <li class="hidden">
          <font-text-mulish
            contentIntro="* Khả năng linh động trong việc chọn môi trường xử lí giao dịch"
          />
        </li>
      </ul>
    </div>
    <!-- Share this Article -->
    <div id="share-article">
        <font-text-mulish shareArticle="Share this Article"/>
        <!-- icon -->
        <div id="block-icon">
            <icon-twitter />
            <icon-facebook />
            <icon-coppy-link />
        </div>
    </div>
  </div>
</template>

<script>
import FontTextRaleway from "@/font/FontTextRaleway.vue";
import FontTextMulish from "@/font/FontTextMulish.vue";
import IconTwitter from '@/Icon/IconTwitter.vue';
import IconFacebook from '@/Icon/IconFacebook.vue';
import IconCoppyLink from '@/Icon/IconCoppyLink.vue';

export default {
  components: {
    FontTextRaleway,
    FontTextMulish,
    IconTwitter,
    IconFacebook,
    IconCoppyLink

  },
};
</script>

<style scoped>
#container-content-intro {
  width: 950px;
  height: auto;
}
.font-content1 {
  width: 740px;
  height: auto;
}
#img-chart {
  width: 740px;
  height: 1200px;
  background-color: cadetblue;
  margin-top: 50px;
  overflow: hidden;
  /* object-fit: cover; */
}
#note-img {
  width: 740px;
  height: auto;
  display: flex;
  justify-content: center;
}
.hidden {
  display: flex;
  align-items: center;
}
#share-article {
    margin-top: 50px;
}
#block-icon {
    display: flex;
    margin-top: 5px;
}
</style>