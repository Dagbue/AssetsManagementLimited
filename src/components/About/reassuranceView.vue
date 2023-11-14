<template>
<div class="alpha">
  <p class="section-header-1">Reassurance</p>
  <p class="section-header">Your money is in safe hands</p>
  <div class="section-2-content">
    <div class="section-2-content-alpha">
      <img src="@/assets/first.png" alt="logo"/>
      <h3 class="section-2-content-header">Registered Company</h3>
      <p>Assets Management Limited is a fully registered company. Assets Management Limited has its FCA and PRA licensing, and We abide by the
         rules and regulations by host nations.</p>
    </div>
    <div class="section-2-content-alpha">
      <img src="@/assets/second.png" alt="logo"/>
      <h3 class="section-2-content-header">Security Conscious</h3>
      <p>Security comes first! your personal information and trading activities are encrypted and can't be accessed by
        third party companies. All your activities here are protected.</p>
      <a @click.prevent="onPostClick" class="btn btn-white btn-animated">CREATE ACCOUNT</a>
    </div>
    <div class="section-2-content-alpha">
      <img src="@/assets/last.png" alt="logo"/>
      <h3 class="section-2-content-header">World Class System</h3>
      <p>Semi-automated trading system that guarantees daily return on investment. Tested and trusted by thousands of
         users. Our support is available 24/7 to assist you and answer your questions.</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "reassuranceView",
  methods: {
    onPostClick() {
      this.$router.push("/register");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>

.alpha{
  background-color: #f0f2f4;
  margin-bottom: 5%;
}

.section-header{
  font-size: 25px;
  color: rgba(125, 144, 184, 1);
  text-align: center;
  font-weight: 300;
}
.section-header-1{
  font-size: 32px;
  color: #071333;
  font-weight: bold;

  padding-bottom: 0;
  margin-bottom: 0;
  letter-spacing: 1px;
  text-align: center;
}

img{
  width: 23%;
}

.section-2-content{
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  text-align: center;
  padding: 3% 8% 5%;
  color: #676767;
  margin-top: 0;
}


.section-2-content-header{
  font-size: 25px;
  padding-top: 18px;
  font-weight: bold;
  color: #124DA8;
}

p{
  padding-top: 10px;
  line-height: 1.5;
  color: #676767;
}

.section-2-content-alpha{
  padding-right: 15px;
  width: 33%;
  line-height: 27px;
}

.btn:link,
.btn:visited {
}
.btn:hover {
  background-color: #D23535;
  color: #ffffff;
  border: 1px solid #D23535;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 5px rgba(20, 49, 89, 0.6);
}

.btn-white {
  background-color: #124DA8;
  color: #ffffff;
  border: 1px solid #124DA8;
  font-size: 15px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 50px;
  margin-top: 10%;
  display: inline-block;
  transition: all .2s;
  position: relative;
  border-radius: 5px;
}

@media (max-width: 990px) {
  .section-2-header{
    font-size: 25px;
  }
  img{
    width: 28%;
  }
  .section-2-content-header{
    font-size: 25px;
  }
  p{
    font-size: 16px;
  }
}

@media (max-width: 550px) {
  .section-2-content{
    display: block;
    height: 100%;
  }
  .section-2-content-alpha{
    width: unset;
  }
  .section-2{
    height: 100%;
  }
  .btn-white {
    display: none;
  }
  .section-2-header{
    font-size: 18px;
    padding-top: 20px;
  }
  .section-2-content-header{
    font-size: 19px;
    padding-top: 25px;
  }
}

</style>