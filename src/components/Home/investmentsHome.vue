<template>
  <div class="career-choice">

    <p class="one">{{ career.title }}</p>
    <img :src=career.titleImage alt="logo" class="image">
    <p class="two">
      {{ career.description }}
    </p>
    <p class="three" @click="onPostClick">
      {{ career.subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: "investmentsHome",
  props: {
    career: {
      type: Object,
      required: true
    }
  },
  methods: {
    onPostClick() {
      this.$router.push("/about");
    },
  },
};
</script>

<style scoped>
.career-choice{
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 7px #232323;
  border-radius: 5px;
  padding-left: 40px;
  padding-top: 40px;
  width: 45%;
  margin: 10px auto;
  background-color: #232323;
  transition: 4ms ease-in;
}



.career-choice .one{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0;
  text-align: center;
  margin: 0;
  padding-top: 25px;
  padding-bottom: 20px;
  padding-right: 5%;
  /*text-transform: uppercase;*/
  font-weight: 700;
}



.career-choice .two {
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0;
  margin: 0;
  padding-bottom: 40px;
  padding-right: 50px;
  color: #818a91;
}

.career-choice .three{
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0;
  color: #CD0511;
  padding-bottom: 30px;
  margin: 0;
}

.career-choice .three:hover {
  font-size: 17px;
  font-weight: bold;
  transition: 4ms ease-in;
}


.career-choice button{
  border: none;
  background: transparent;
  outline: none;
}

.image{
  width: 63%;
  margin-bottom: 4%;
  margin-left: 14.5%;
  border-radius: 5px;
  box-shadow: 0 0 7px rgba(20, 49, 89, 0.2);
}

@media (max-width: 990px) {
  .career-choice .one{
    font-size: 21px;
  }
  .career-choice .two{
   font-size: 17px;
  }
}

@media (max-width: 990px) {
  .career-choice{
    width: unset;
  }
}
@media (max-width: 500px) {
  .career-choice .one{
    font-size: 20px;
    line-height: 26px;
    text-align: center;
  }
  .career-choice .two {
    font-size: 15px;
    line-height: 20px;
    padding-right: unset;
  }
  .career-choice{
    padding-right: 30px;
  }
  .career-choice .three{
    font-size: 14px;
    line-height: 17px;
  }
}
</style>


