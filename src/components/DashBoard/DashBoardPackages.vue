<template>
  <div class="alpha">

    <select-plan-modal @close="hideDialog" v-if="dialogIsVisible" />

    <div class="section-alpha-1">
      <h3 class="header">Choose An Investment Plan</h3>
    </div>

    <div class="section-alpha">

      <div class="third-section top">
        <p class="text-1">Basic</p>
        <p class="text-2">10<span class="text-2-inner">%</span></p>
        <!--        <p class="text-2">4 Months</p>-->
        <p class="text-3">4 Months</p>

        <div @click="showDialog" class="btn" >
          <p>Invest Now</p>
        </div>

        <div class="separate">
          <p>$500 MINIMUM DEPOSIT</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>ENHANCED SECURITY</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>1.3% DAILY</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>GUARANTEED ROI</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>24/7 SUPPORT</p>
          <i class='bx bxs-info-circle'></i>
        </div>
      </div>

      <div class="third-section top">
        <p class="text-1">Standard</p>
        <p class="text-2">20<span class="text-2-inner">%</span></p>
        <!--        <p class="text-2">4 Months</p>-->
        <p class="text-3">8 Months</p>

        <div @click="showDialog" class="btn" >
          <p>Invest Now</p>
        </div>

        <div class="separate">
          <p>$10,000 MINIMUM DEPOSIT</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>ENHANCED SECURITY</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>1.5% DAILY</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>GUARANTEED ROI</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>24/7 SUPPORT</p>
          <i class='bx bxs-info-circle'></i>
        </div>
      </div>

      <div class="third-section top">
        <p class="text-1">Premium</p>
        <p class="text-2">30<span class="text-2-inner">%</span></p>
        <!--        <p class="text-2">4 Months</p>-->
        <p class="text-3">12 Months</p>

        <div @click="showDialog" class="btn" >
          <p>Invest Now</p>
        </div>

        <div class="separate">
          <p>$50,000 MINIMUM DEPOSIT</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>ENHANCED SECURITY</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>1.8% DAILY</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>GUARANTEED ROI</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>24/7 SUPPORT</p>
          <i class='bx bxs-info-circle'></i>
        </div>
      </div>

    </div>

    <div class="section-alpha-2">

      <div class="third-section top">
        <p class="text-1">Deluxe</p>
        <p class="text-2">40<span class="text-2-inner">%</span></p>
        <!--        <p class="text-2">4 Months</p>-->
        <p class="text-3">12 Months</p>

        <div class="btn" >
          <p>Invest Now</p>
        </div>

        <div class="separate">
          <p>$100,000 MINIMUM DEPOSIT</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>ENHANCED SECURITY</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>2.0% DAILY</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>GUARANTEED ROI</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>24/7 SUPPORT</p>
          <i class='bx bxs-info-circle'></i>
        </div>
      </div>

      <div class="third-section top">
        <p class="text-1">401k Plan</p>
        <p class="text-2">50<span class="text-2-inner">%</span></p>
        <!--        <p class="text-2">4 Months</p>-->
        <p class="text-3">24 Months</p>

        <div @click="showDialog" class="btn" >
          <p>Invest Now</p>
        </div>

        <div class="separate">
          <p>$1Million MINIMUM DEPOSIT</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>ENHANCED SECURITY</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>5% DAILY</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>GUARANTEED ROI</p>
          <i class='bx bxs-info-circle'></i>
        </div>

        <div class="separate">
          <p>24/7 SUPPORT</p>
          <i class='bx bxs-info-circle'></i>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

import router from "@/router";
import SelectPlanModal from "@/components/baseComponents/modal/SelectPlanModal.vue";

export default {
  name: "DashBoardPackages",
  components: {SelectPlanModal},
  data() {
    return {
      dialogIsVisible: false,
    };
  },
  methods: {
    onPostClick() {
      this.$router.push("/register");
      window.scrollTo(0, 0);
    },
    hideDialog() {
      this.dialogIsVisible = false;
       router.push('/over-view')
    },
    showDialog() {
      // this.dialogIsVisible = true;
      router.push('/fund-wallet')
    },
  },
}
</script>

<style scoped>

.alpha{
  padding-top: 5%;
  /*padding-bottom: 3%;*/
}
.bxs-info-circle{
  color: #ffffff;
}
.header{
  color: #ffffff;
  letter-spacing: 1px;
  font-size: 25px;
}

.section-alpha{
  display: flex;
  justify-content: space-evenly;
}

.section-alpha-2{
  display: flex;
  justify-content: space-evenly;
}

.section-alpha-1{
  display: block;
  text-align: center;
  margin-bottom: 2%;
}

.third-section{
  width: 370px;
  height: 500px;
  background: #0f171c;
  border: 1px solid #232323;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 6px;
  margin-bottom: 2%;
}

.separate{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 1%;
}

.separate i{
  padding-top: 15px;
  padding-right: 13px;
}

.separate p{
  width: 220px;
  padding-top: 15px;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;
  padding-left: 13px;
}

.btn{
  margin-top: 5%;
  margin-bottom: 1%;
}

.btn p{
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  width: 225px;
  height: 44px;
  background: #5d78ff;
  border: 1px solid #5d78ff;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  text-align: center;
}

.btn p:hover{
  border: 1px solid #3C4A57FF;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.top{
  margin-top: 1%;
}

.text-1{
  text-align: center;
  padding-top: 9%;
  padding-bottom: 3%;
  font-size: 20px;
  color: #FFFFFF;
}

.text-2{
  text-align: center;
  padding-bottom: 4%;
  font-size: 29px;
  font-weight: bold;
  color: #FFFFFF;
}

.text-2-inner{
  font-size: 15px;
  font-weight: normal;
}

.text-3{
  text-align: center;
  font-size: 17px;
  width: 70%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  color: #FFFFFF;
}



@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .section-alpha{
    display: block;
    /*margin-left: 21%;*/
    margin-top: 3.5%;
  }
  .section-alpha-2{
    display: block;
    /*margin-left: 21%;*/
    margin-top: 3.5%;
  }
  .third-section{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 500px) {

  .header{
    font-size: 23px;
  }

}


</style>