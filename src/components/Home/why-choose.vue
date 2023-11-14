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
          title: "Best In-Class Experience",
          description:
              "Yes, we are very serious about this being easy for our users. Our designers focus every waking hour to get this right.",
          subtitle: "Learn More",
        },
        {
          titleImage: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxpdmUlMjBzdXBwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          title: "Live Support",
          description:
              "Our Live support service is available 24 hours a day, 7 days a week. When you need us, we are always here for you.",
          subtitle: "Learn More",
        },
        {
          titleImage: "https://images.unsplash.com/photo-1461685265823-f8d5d0b08b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          title: "Premium Security",
          description:
              "Your personal information and trading activities are encrypted to ensure your safety and privacy. Your safety matters.",
          subtitle: "Learn More",
        },
        {
          titleImage: "https://images.unsplash.com/photo-1637763723578-79a4ca9225f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
          title: "Registered Company",
          description:
              "Company Name is a fully registered company. The licensed trading firm has the FCA and PRA licenses.",
          subtitle: "Learn More",
        },
      ],
    };
  },
};
</script>

<style scoped>
.career-choice-container {

  padding: 0 8% 50px;
  /*background-color: rgba(242, 250, 253, 0.4);*/
  /*background-color: hsla(208, 7%, 46%, 0.15);*/
  color: #071333;
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

@media (max-width: 990px) {
  .career-choice-header .one{
    font-size: 27px;
  }
  .career-choice-header .two{
    font-size: 17px;
    width: 85%;
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
}

</style>