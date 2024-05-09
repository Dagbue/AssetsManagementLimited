<template>
  <div>
    <p class="about-text-1">About Company</p>
    <div class="about-alpha" >

      <div class="about-section-1">
        <h4 class="about-header-1">We Help Our Clients To Achieve Their Desired Goals</h4>
        <p class="about-text-2">Assets Management Limited is designed to trade your investment(s) for your benefit in
          stocks options, gold and cryptocurrency. We ensure a consistent day-by-day profit from your investment(s).</p>

        <div class="box">
          <div class="about-content">
            <i class='bx bx-task'></i>
            <div class="about-content-text">
              <h4>Guaranteed ROI</h4>
              <p>Trading is a difficult task which can result in loss sometimes. Our low ROI rate allows you to be
                compensated every day regardless of market fluctuations. We also provide a bonus if we experience
                negative trends, so there are no worries on your end!</p>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="about-content">
            <i class='bx bx-paper-plane'></i>
            <div class="about-content-text">
              <h4>Our Mission</h4>
              <p>Our goal is to break down barriers between the privileged and lower class by investing in digital
                technologies that are accessible for everybody, regardless of socio-economic status.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="about-section-2">
        <img alt="About-Image" src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="about-image" />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "about-company",
  methods: {
     onPostClick() {
      this.$router.push("/about");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>
.about-alpha{
  display: flex;
  padding-bottom: 5%;
}
.about-image{
  width: 92%;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-left: 10px;
  margin-top: 9%;
}
.about-content{
  display: flex;
  padding-top: 15px;
  padding-right: 25px;
}
.about-content-text{
  padding-left: 10px;
}
.about-content-text h4{
  font-weight: bold;
  font-size: 22px;
  color: #FFFFFF;
}
.about-content-text p {
  font-size: 17px;
  color: #818a91;
  line-height: 1.3;
  padding-top: 5px;
}
.about-section-1{
  width: 80%;
  padding-left: 80px;
  padding-right: 20px;
  padding-top: 40px;
  color: #222222;
}
.box{
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  background-color: #232323;
  border-radius: 5px;
  margin-bottom: 12px;
  padding-top: 5px;
  padding-bottom: 32px;
  padding-left: 15px;
  padding-right: 10px;
}


.about-text-1{
  text-align: center;
  font-size: 25px;
  color: #FFFFFF;
  font-weight: bold;
  padding-top: 1.5%;
}

.about-header-1{
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  padding-bottom: 10px;
  color: #FFFFFF;
}
.about-text-2{
  font-size: 17px;
  padding-bottom: 15px;
  color: #818a91;
}
.about-section-2{
  padding-right: 20px;
}




i{
  font-size: 35px;
  color: #5d78ff;
  padding-right: 5px;
}

/*.about-content-text h4{*/
/*  font-size: 25px;*/
/*  color: #222222;*/
/*}*/

@media (max-width: 990px) {
  .about-alpha{
    display: flex;
    flex-direction: column-reverse;
  }
  .about-section-1{
    width: 100%;
    padding-left: 3%;
    padding-right: 3%;
  }
  .about-section-2{
    padding-right: unset;
    margin-left: 5%;
  }
  .about-image{
    margin-top: 2%;
    margin-bottom: 3%;
  }
  .about-text-2{
    text-align: center;
  }
  .header-button{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
  }
}

@media (max-width: 700px) {
}

@media (max-width: 500px) {
  .about-text-1{
    padding-bottom: 2%;
  }
}
</style>



