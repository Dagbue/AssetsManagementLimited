<template>
  <div class="section-alpha">
    <p class="section-header-1">Loan Features</p>



    <div class="section-content">

      <div class="first-part">

        <div class="separate">
          <div class="icon-part">
            <img src="@/assets/no-security.png" alt="icon" class="icon">
          </div>
          <div class="text-part">
            <p style="font-size: 20px; font-weight: bold; padding-bottom: 5px">No Security Required</p>
            <p>Loans are fully unsecured with no security required.</p>
          </div>
        </div>
        <div class="separate">
          <div class="icon-part">
            <img src="@/assets/easy-repay.png" alt="icon" class="icon">
          </div>
          <div class="text-part">
            <p style="font-size: 20px; font-weight: bold; padding-bottom: 5px">Easy Repayment.</p>
            <p>Repayment directly from your account with us.</p>
          </div>
        </div>
        <div class="separate">
          <div class="icon-part">
            <img src="@/assets/convenience.png" alt="icon" class="icon">
          </div>
          <div class="text-part">
            <p style="font-size: 20px; font-weight: bold; padding-bottom: 5px">Convenience.</p>
            <p>Wide range of channels where you can make repayment.</p>
          </div>
        </div>

      </div>

      <div class="second-part">
        <div class="separate">
          <div class="icon-part">
            <img src="@/assets/takeOver.png" alt="icon" class="icon">
          </div>
          <div class="text-part">
            <p style="font-size: 20px; font-weight: bold; padding-bottom: 5px">Take Over Facility</p>
            <p>We can help you move your loan with another bank <br/>to take advantage of our competitive terms.</p>
          </div>
        </div>

        <div class="separate">
          <div class="icon-part">
            <img src="@/assets/no-fee.png" alt="icon" class="icon">
          </div>
          <div class="text-part">
            <p style="font-size: 20px; font-weight: bold; padding-bottom: 5px">No Pre-liquidation Charges</p>
            <p>You can make free partial or full liquidation at your<br/> convenience through our 24/7 online banking.</p>
          </div>
        </div>


        <div class="separate">
          <div class="icon-part">
            <img src="@/assets/top-up.png" alt="icon" class="icon">
          </div>
          <div class="text-part">
            <p style="font-size: 20px; font-weight: bold; padding-bottom: 5px">Top Up For Your Needs.</p>
            <p>If you need additional financing during your loan tenor, <br/>
              we offer you a top up as long as you have made regular repayments.</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "LoanFeatures"
}
</script>

<style scoped>
.section-alpha{
  /*background-color: #f0f2f4;*/
  padding-bottom: 7%;
  padding-left: 5%;
  padding-right: 4%;
  /*margin-top: 5%;*/
}

.section-header-1{
  font-size: 29px;
  color: #ffffff;
  padding-top: 5%;
  padding-bottom: 3%;
  text-align: center;
  font-weight: bold;
}

.section-content{
  display: flex;
  justify-content: space-evenly;
  padding-top: 3%;
  padding-bottom: 2%;
  background-color: #232323;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(20, 49, 89, 0.4);
}

.separate{
  display: flex;
  padding-top: 6%;
  padding-bottom: 6%;
}

.bx{
  font-size: 70px;
  color: #D23535;
}

.text-part p {
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 16px;
  color: #818a91;
}
.icon-part{
  padding-right: 2%;
}

.icon{
  height: 70px;
  width: 70px;
  object-fit: cover;
  margin-right: 10px;
}

@media (max-width: 1280px) {
  .first-part{
  margin-left: 6%;
}
  .second-part{
    margin-right: 3%;
  }
}

@media (max-width: 1100px) {
  .first-part{
    margin-top: 2%;
  }
  .text-part p {
    font-size: 16px;
  }
}

@media (max-width: 900px) {
  /*.section-content{*/
  /*  display: block;*/
  /*  margin-right: auto;*/
  /*  margin-left: auto;*/
  /*}*/
  .bx{
    font-size: 60px;
  }
  .text-part p {
    font-size: 14px;
  }
}

@media (max-width: 700px) {
  .section-content{
    display: block;
  }
  .bx{
    padding-top: 10%;
    font-size: 45px;
  }
  .icon-part{
  }
  .text-part{
    text-align: center;
  }
  .text-part p {
    font-size: 17px;
  }
  .separate{
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
  .first-part{
    margin-left: unset;
  }
  .second-part{
    margin-right: unset;
  }
}

@media (max-width: 500px) {
  .text-part p {
    font-size: 15px;
  }
}

</style>