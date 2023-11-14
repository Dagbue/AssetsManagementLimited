<template>
  <div>
  <div id="slider">
    <div class="arrowLeft" @click="arrowLeft()"></div>
    <Slides :image="images[chosenImage]" />
    <div class="arrowRight" @click="arrowRight()"></div>

  </div>
    <div class="bitcoin">
      <div class="livecoinwatch-widget-5"
           lcw-base="USD"
           lcw-color-tx="#999999"
           lcw-marquee-1="coins"
           lcw-marquee-2="movers"
           lcw-marquee-items="10" >
      </div>
    </div>
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
          url: "https://images.unsplash.com/photo-1608841828390-a4eb54fb1987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwYnVpbGRpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          title: "Embark on your journey as an investor in the market and trade with profitability. Gain an advantage by replicating the transactions of traders from across the globe and reaping the benefits of their successful trading strategies.",
          para: "Get Started",
        },
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG9mZmljZSUyMG1lZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          title: "Entrust Your Finances to a Trustworthy Investment Opportunity with Proven Results. Join the rapidly expanding community of millionaires and transform your financial situation with minimal effort.",
          para: "Get Started",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
          title: "With more than two decades of experience in the stock market, are you looking for a faster way to grow your wealth? Simplify the management of your investments for greater profitability and effectiveness.",
          para: "Get Started",
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1511068797325-6083f0f872b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHdvcmxkJTIwbWFwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          title: "Experience the World at Your Fingertips with AML GlobalTrader. Deposit funds in your local currency and effortlessly engage in trading global stocks, as well as options and cryptocurrencies, all from the convenience of your smartphone or tablet.",
          para: "Get Started",
        },
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
