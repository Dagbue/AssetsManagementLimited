<template>
  <div class="alpha">
    <div class="section-alpha">

      <p class="header">How To Get Started</p>

      <div class="section-1">

        <div class="section-1-content">
          <img class="image-2" src="@/assets/create.png"/>
          <p class="text-1">Step 1</p>
          <p class="text-2">Create Account</p>
<!--          <p class="text-3">It only takes a few minutes</p>-->
        </div>

        <div class="section-1-content">
          <img class="image-2" src="@/assets/approval.png"/>
          <p class="text-1">Step 2</p>
          <p class="text-2">Verify your Account</p>
<!--          <p class="text-3">Connect your bank or transfer an account</p>-->
        </div>

        <div class="section-1-content">
          <img class="image-2" src="@/assets/select.png"/>
          <p class="text-1">Step 3</p>
          <p class="text-2" style="width: 90%;margin-right: auto;margin-left: auto">Choose an Investment Plan</p>
<!--          <p class="text-3">Take your investing to the next level</p>-->
        </div>

        <div class="section-1-content">
          <img class="image-2" src="@/assets/deposit.png"/>
          <p class="text-1">Step 4</p>
          <p class="text-2" style="width: 80%;margin-right: auto;margin-left: auto">Deposit into your Investment Account</p>
          <!--          <p class="text-3">Take your investing to the next level</p>-->
        </div>

      </div>

      <div class="btn-part" @click="onPostClick">
        <p class="btn">Open An Account</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "steps",
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
  },
}
</script>

<style scoped>
.alpha{
  margin-top: 6%;
}
.header{
  text-align: center;
  font-size: 1.8rem;
  font-weight: 300;
  color: #ffffff;
  padding-bottom: 2rem;
  /*margin-top: 5%;*/
}

.section-1{
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-left: 7%;
  margin-right: 7%;
}

.section-alpha{
  /*background-image: url("https://www.interactivebrokers.com/images/web/candlestick-bkgd.jpg");*/
  background-color: #232323;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-top: 5%;
  padding-bottom: 5%;
}

.btn{
  margin-top: 3%;
  color: #ffffff;
  border: 1px solid #5d78ff;
  background-color: #5d78ff;
  padding: 10px 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 18%;
  border-radius: 5px;
}

/*.btn:hover{*/
/*  background-color: #ffffff;*/
/*  color: #124DA8;*/
/*  border: 1px solid #124DA8;*/
/*  -webkit-transition: all 0.35s ease;*/
/*  transition: all 0.35s ease;*/
/*  box-shadow: 0 0 5px rgba(20, 49, 89, 0.6);*/
/*}*/

.section-1-content{
  color: #ffffff;
}

.section-1-content p{
  padding-top: 5px;
  font-size: 18px;
}

.text-1{
  font-size: 18px;
  padding-bottom: 0.8%;
}

.text-2{
  font-size: 20px;
  padding-bottom: 0.8%;
  width: 100%;
}

.image-2{
  height: 70px;
  width: 70px;
  object-fit: cover;
}

@media (max-width: 700px) {
  .section-1{
    margin-left: unset;
    margin-right: unset;
  }
  .text-1{
    font-size: 17px;
    padding-bottom: 0.9%;
  }

  .text-2{
    font-size: 20px;
    padding-bottom: 0.9%;
    padding-top: 1%;
  }

  .btn{
    width: 40%;
  }

}

@media (max-width: 500px) {
  .section-1{
    display: block;
  }
  .section-1-content{
    margin-bottom: 2%;
  }

  .image-2{
    height: 80px;
    width: 80px;
    object-fit: cover;
  }
}
</style>