<template>
  <div class="career-choice-container">
    <div class="career-choice-header"

    >
      <p class="one">Why Choose Us</p>
      <p class="two">
        Managing capital for institutions and private investors all over the
        world. Let investment professionals help you.
      </p>
    </div>
    <div class="career">
      <investments-home
          v-for="(career, index) in careerList"
          :key="index"
          :career="career"
      />

    </div>

    <div class="section-2">
      <p class="section-2-header">Award Winning Platform & Services</p>

      <div class="section-2-content">

        <div class="section-2-content-inner">
          <img src="https://www.interactivebrokers.com/images/web/2022_sb-badge-1-professional-trading.png" alt="2022_sb-badge-1" class="section-2-image"/>
          <p class="section-2-text-1">Professional Trading</p>
          <p class="section-2-text-2">Offering of Investments</p>
        </div>

        <div class="section-2-content-inner">
          <img src="https://www.interactivebrokers.com/images/web/awards-2021-Fintech-Awards-Winner-Badge.png" alt="2022_sb-badge-1" class="section-2-image"/>
          <p class="section-2-text-1">Lifetime Achievement</p>
          <p class="section-2-text-2">Best Paper Trading Platform</p>
        </div>

        <div class="section-2-content-inner">
          <img src="https://www.interactivebrokers.com/images/web/award-barrons-2023-best-online-broker.png" alt="2022_sb-badge-1" class="section-2-image"/>
          <p class="section-2-text-1">#1 Best Online Broker</p>
          <p class="section-2-text-2">5 out of 5 stars</p>
        </div>

        <div class="section-2-content-inner">
          <img src="https://www.interactivebrokers.com/images/web/awards-investopedia-2022-General.png" alt="2022_sb-badge-1" class="section-2-image"/>
          <p class="section-2-text-1">4.6 out of 5 stars</p>
          <p class="section-2-text-2">Overall</p>
        </div>

        <div class="section-2-content-inner">
          <img src="https://www.interactivebrokers.com/images/web/award-2023-brokerchooser.png" alt="2022_sb-badge-1" class="section-2-image"/>
          <p class="section-2-text-1">Best Online Broker</p>
        </div>

      </div>



      <div class="btn-part">
        <p class="btn">Get Started</p>
      </div>
    </div>
  </div>
</template>


<script>
import InvestmentsHome from "@/components/Home/investmentsHome.vue";
export default {
  name: "why-choose",
  components: {InvestmentsHome},
  data() {
    return {
      careerList: [
        {
          titleImage: "https://images.unsplash.com/photo-1522202195465-df8a5f26fa15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          title: "Retirement Planning",
          description:
              "Securing a stable financial future is invaluable. Instead of spending all your money today, prioritize\n" +
              "planning for a brighter tomorrow. We offer guidance on managing your finances today to ensure you can\n" +
              "confidently smile about your financial prospects in the future.",
          subtitle: "Learn More",
        },
        {
          titleImage: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxpdmUlMjBzdXBwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          title: "Risk Management",
          description:
              "Nowadays, numerous global investment firms can make choosing the right one a daunting task. Our risk\n" +
              "assessment service offers a thorough report and expert advice for your investment decisions.",
          subtitle: "Learn More",
        },
        {
          titleImage: "https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Financial Market",
          description:
              "Our primary investments are in cryptocurrency and forex, while our parent company also participates in\n" +
              "short-term projects overseas, including Agriculture and Oil & Gas partnerships.",
          subtitle: "Learn More",
        },
        {
          titleImage: "https://images.unsplash.com/photo-1637763723578-79a4ca9225f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
          title: "Loan Services",
          description:
              "A personal loan offers the chance to achieve your future aspirations by providing an unsecured loan option\n" +
              "with a repayment period of up to 60 months and a competitive monthly interest rate of just 1.083%.",
          subtitle: "Learn More",
        },
      ],
    };
  },
};
</script>

<style scoped>
.career-choice-container {

  padding: 0 8% 0;
  /*background-color: rgba(242, 250, 253, 0.4);*/
  /*background-color: hsla(208, 7%, 46%, 0.15);*/
  color: #ffffff;
}

.career-choice-header {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.career-choice-header .one {
  margin: 0;
  font-size: 27px;
  line-height: 46px;
  letter-spacing: 0;
  text-align: center;
  padding-bottom: 10px;
  width: 60%;
  font-weight: bold;
}

.career-choice-header .two {
  font-size: 16.5px;
  line-height: 24px;
  letter-spacing: 0;
  text-align: center;
  padding-bottom: 30px;
  width: 60%;
  margin: 0;
  color: #818a91;
}

.career-choice-header button {
  outline: none;
  background: #0098da;
  border-radius: 70px;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0;
  text-align: center;
  padding: 16px 25px;
  transition: background-color 0.5s ease-in;
  /*margin-bottom: 100px;*/
}

.career-choice-header button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.career-choice-header button:hover,
.career-choice-header button:focus {
  background-color: rgba(7, 19, 51, 1);
  color: white;
}

.career-choice-header button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: -3.5px;
  right: -20px;
  transition: 0.5s;
  font-size: 40px;
  color: white;
}

.career-choice-header button:hover span {
  padding-right: 25px;
}

.career-choice-header button:hover span:after {
  opacity: 1;
  right: 0;
}

.career {
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;
}

.career-choice .three button img {
  animation: moveforwardbackward 2s infinite;
  animation-direction: reverse;
}

@keyframes moveforwardbackward {
  from {
    left: 0;
  }
  to {
    left: 200px;
  }
}

.career-choice button {
  border: none;
  background: transparent;
  outline: none;
}

.section-2-header{
  text-align: center;
  font-size: 1.7rem;
  font-weight: 300;
  color: #ffffff;
  padding-bottom: 2rem;
  margin-top: 5%;
}
.section-2-content{
  display: flex;
  justify-content: space-between;
  margin-left: 12%;
  margin-right: 12%;
}

.section-2-content-inner{
  text-align: center;
  color: #818a91;
}

.section-2-image{
  height: 150px;
  width: 150px;
  object-fit: cover;
}

.btn{
  border: 1px solid #CD0511;
  padding: 13px 10px;
  display: block;
  margin: 3% auto;
  text-align: center;
  width: 20%;
  border-radius: 5px;
  color: #ffff;
}

.btn:hover{
  background-color: #D23535;
  color: #ffff;
  border: 1px solid #D23535;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 5px rgba(20, 49, 89, 0.6);
}

@media (max-width: 990px) {
  .career-choice-header .one{
    font-size: 27px;
  }
  .career-choice-header .two{
    font-size: 17px;
    width: 85%;
  }
  .section-2-header{
    font-size: 1.5rem;
  }
  .section-2-content{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .section-2-content-inner{
    margin-bottom: 4%;
  }
  .section-2-image{
    height: 200px;
    width: 200px;
    object-fit: cover;
  }
  .btn{
    width: 45%;
  }
}

@media (max-width: 500px) {
  .career {
    display: block;
  }
  .career-choice-header .one {
    font-size: 23px;
    width: unset;
  }

  .career-choice-header .two {
    font-size: 15px;
    width: unset;
    line-height: 20px;
    padding-bottom: 28px;
  }
  .section-2-image{
    height: 140px;
    width: 140px;
    object-fit: cover;
  }
  .section-2-header{
    font-size: 1.4rem;
  }
}

</style>