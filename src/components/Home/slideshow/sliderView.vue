<template>
  <div>
  <div id="slider">
    <div class="arrowLeft" @click="arrowLeft()"></div>
    <Slides :image="images[chosenImage]" />
    <div class="arrowRight" @click="arrowRight()"></div>

  </div>
<!--    <div class="bitcoin">-->
<!--      <div class="livecoinwatch-widget-5"-->
<!--           lcw-base="USD"-->
<!--           lcw-color-tx="#999999"-->
<!--           lcw-marquee-1="coins"-->
<!--           lcw-marquee-2="movers"-->
<!--           lcw-marquee-items="10" >-->
<!--      </div>-->
<!--    </div>-->
    <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/ticker-tape/#%7B%22colorTheme%22%3A%22dark%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2FtradeCrypto%22%7D" title="ticker tape TradingView widget" lang="en" style="user-select: none; box-sizing: border-box; display: block; height: 65px; width: 100%;"></iframe>
  </div>
</template>

<script>
import Slides from "./Slides.vue";
export default {
  name: "sliderView",
  components: {
    Slides,
  },

  data() {
    return {
      images: [
        {
          id: 0,
          url: "https://d33vw3iu5hs0zi.cloudfront.net/media/xxl_exness_trading_protection_c6d3f4be8b.jpg",
          title: "Explore cryptocurrency investment opportunities with seasoned traders.",
          title2: "Experience the power of our mirror trading platform, linking you to proficient cryptocurrency traders. " +
              "Replicate their proven strategies effortlessly and unlock the full potential of your investments.",
          para: "Get started",
          para2: "Login",
        },
        {
          id: 1,
          url: "https://d33vw3iu5hs0zi.cloudfront.net/media/xl_exness_crypto_header_desktop_906cc050ef.jpg",
          title: "Select from a varied array of proficient traders.",
          title2: "Experience the ease of creating an account on our mirror trading platform, where you can effortlessly " +
              "replicate the strategies of seasoned traders. No prior trading knowledge is necessary.",
          para: "Get started",
          para2: "Login",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1651340981821-b519ad14da7c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEludmVzdCUyMGNvbmZpZGVudGx5fGVufDB8fDB8fHww",
          title: "Invest confidently by tracking and emulating the strategies of top financial leaders.",
          title2: "Participate in our mirror trading platform to engage with a diverse community of global investors," +
              " where you can exchange investment insights and strategies.",
          para: "Get started",
          para2: "Login",
        },
        // {
        //   id: 3,
        //   url: "https://cdn.pixabay.com/photo/2014/08/21/12/54/investment-423289_960_720.jpg",
        //   title: "Enhance your trading experience with TradeSyncPro.",
        //   title2: "Unprocessed spreads, instantaneous trade signals, and continuous support around the clock.",
        //   para: "Get started",
        //   para2: "Login",
        // },
      ],
      chosenImage: 0,
      intervalObject: null,
    };
  },
  methods: {
    arrowLeft() {
      clearInterval(this.intervalObject);
      this.moveLeft();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveLeft();
      }, 6000);
    },
    arrowRight() {
      clearInterval(this.intervalObject);
      this.moveRight();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveRight();
      }, 6000);
    },
    moveLeft() {
      var flag = this.chosenImage;
      flag--;
      if (flag < 0) {
        flag = this.images.length - 1;
      }
      this.chosenImage = flag;
    },
    moveRight() {
      var flag = this.chosenImage;
      flag++;
      if (flag >= this.images.length) {
        flag = 0;
      }
      this.chosenImage = flag;
    },
  },
  created() {
    var self = this;
    this.intervalObject = setInterval(() => {
      self.moveLeft();
    }, 6000);
  },
};
</script>

<style>
#slider {
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  /*margin-top: 0.8%;*/
}
#slider .arrowLeft,
#slider .arrowRight {
  position: absolute;
  top: 50%;
  border: 20px solid transparent;
}
#slider .arrowLeft {
  border-right-color: #676767;
  z-index: 1;
}
#slider .arrowRight {
  right: 0;
  border-left-color: #676767;
}
#slider .squares div {
  height: 20px;
  width: 20px;
  margin-right: 10px;
  display: inline-block;
  background-color: #676767;
  border-radius: 50%;
  background-image: linear-gradient(
      to top, #000 30%, transparent
  );
}
.bitcoin{
  margin-left: 5%;
  margin-right: 5%;
}
@media (max-width: 700px){
  #slider .arrowLeft{
    display: none;
  }
  #slider .arrowRight{
    display: none;
  }
}
</style>
