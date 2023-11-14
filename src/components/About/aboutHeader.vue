<template>
  <div class="alpha">
    <div class="section-alpha">
      <div class="section-1">

        <div v-show="!mobile"  class="section-1-text">
          <p class="header">Assets Management Limited <br/> is the Professional's Gateway <br/> to the World's Markets</p>
            <p class="btn">Watch Video</p>
        </div>

        <div v-show="mobile" class="section-1-text">
          <p class="header">About Us</p>
        </div>


          <img src="https://www.interactivebrokers.com/images/web/why-ibkr-hero-xl.webp" alt="why-ibkr" class="image"/>

      </div>
    </div>

    <div class="section-2">
      <div class="section-2-alpha">

        <div class="section-2-content">
          <img src="https://www.interactivebrokers.com/images/2015/icons/icon-blk-globe2.svg" alt="" class="image-2"/>
          <p>Global Markets</p>
        </div>

        <div class="section-2-content">
          <img src="https://www.interactivebrokers.com/images/2015/icons/icon-blk-funds-transfer.svg" alt="" class="image-2"/>
          <p>Lowest Costs</p>
        </div>

        <div class="section-2-content">
          <img src="https://www.interactivebrokers.com/images/2015/icons/icon-blk-tech.svg" alt="" class="image-2"/>
          <p>Technology</p>
        </div>

        <div class="section-2-content">
          <img src="https://www.interactivebrokers.com/images/2015/icons/icon-blk-security.svg" alt="" class="image-2"/>
          <p>Strength & Security</p>
        </div>

        <div class="section-2-content">
          <img src="https://www.interactivebrokers.com/images/2015/icons/icon-blk-education.svg" alt="" class="image-2"/>
          <p>Education</p>
        </div>

        <div class="section-2-content">
          <img src="https://www.interactivebrokers.com/images/2015/icons/icon-blk-awards.svg" alt="" class="image-2"/>
          <p>Awards</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'aboutHeader',
  data()  {
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: false,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 600){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
}
</script>

<style scoped>
.section-alpha{
  background: linear-gradient(179.02deg, #DEE1E6 -15.49%, #F7F7F7 107.09%);
  margin-top: 5px;
}

.section-1{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
}

.image{
  width: 35%;
  height: 35%;
}

.header{
  color: #222222;
  font-size: 1.6rem;
  line-height: 1.4;
}

.section-1-text{
  margin-left: 8%;
}

.image-2{
  height: 68px;
  width: 68px;
  object-fit: cover;
}

.section-2-alpha{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  margin-top: 1.5%;
  margin-bottom: 2%;
  margin-left: 17%;
  margin-right: 15%;
}

.section-2-content{
  /*margin-right: 40px;*/
  text-align: center;
}

.section-2-content p {
  color: #818a91;
  font-size: 16px;
}

.btn{
  margin-top: 4%;
  margin-bottom: 3%;
  color: #FFFFFF;
  background-color: #124DA8;
  border: 1px solid #124DA8;
  padding: 12px 5px;
  display: block;
  //margin-left: auto;
  //margin-right: auto;
  text-align: center;
  width: 50%;
  border-radius: 5px;
}

.btn:hover{
  background-color: #D23535;
  color: #ffffff;
  border: 1px solid #D23535;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 5px rgba(20, 49, 89, 0.6);
}

@media (max-width: 700px) {
  .section-1-text{
    margin-left: 4%;
  }
  .image{
    width: 35%;
    height: 35%;
  }
  .btn{
    margin-top: 2%;
    padding: 10px 5px;
    width: 45%;
  }
  .header{
    color: #222222;
    font-size: 1.4rem;
    line-height: 1.4;
  }
  .section-2-alpha{
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
  .image-2{
    height: 60px;
    width: 60px;
    object-fit: cover;
  }
  .section-2-content p {
    font-size: 15px;
  }
}



@media (max-width: 500px) {
  .header{
    font-size: 1.5rem;
  }
  .image{
    width: 55%;
    height: 55%;
  }
  .image-2{
    height: 45px;
    width: 45px;
  }
  .section-2-content p {
    font-size: 12px;
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>