<template>
  <div class="alpha">
    <div class="section-alpha-1">
      <h3 class="header">Choose A Loan Plan</h3>
    </div>

    <div class="section-alpha">

      <div class="box">
        <div class="color">
          <h4 class="color-header">PERSONAL LOAN</h4>
          <h5 class="text-1">Min amount $10,000,<br/> Max  amount $500,000.</h5>

          <ul class="list-alpha">
            <li class="list-item">No Credit Score Required</li>
          </ul>

          <p class="text-1">
            Maximum loan terms vary depending on the investment plan for crypto investments.<br/>
            For personal use, loan terms are limited to 3% bi-weekly or 5% monthly.
          </p>
        </div>
        <h5 class="text-2">PREPAYMENT FEE : 15%</h5>
        <p class="text">Funds are released two weeks after your payment is approved</p>

        <h5 class="text-2">PREPAYMENT FEE : 30%</h5>
        <p class="text">Funds are released on the next business day after your payment is approved</p>



        <div class="text">
          <p class="text-parah">REQUIREMENTS:</p>
          <ul style="list-style: none">
            <li>register on our website</li>
            <li>Valid ID</li>
            <li>Valid Phone Number</li>
<!--            <li>SSN</li>-->
          </ul>
        </div>

        <p class="text">
          Means Of Payment: BTC & USDT
        </p>
        <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Apply Now</button>
      </div>

      <div class="box">
        <div class="color">
          <h4 class="color-header">BUSINESS LOAN</h4>
          <h5 class="text-1">Min amount $50,000<br/>Max Amount $3,000,000</h5>
          <ul class="list-alpha">
            <li class="list-item">No Credit Score Required</li>
          </ul>
          <p class="text-1">
            Maximum loan terms vary depending on the investment plan for crypto investments.<br/>
            For personal use, loan terms are limited to 3% bi-weekly or 5% monthly.
          </p>
        </div>
        <h5 class="text-2">PREPAYMENT FEE : 15%</h5>
        <p class="text">Funds are released two weeks after your payment is approved</p>

        <h5 class="text-2">PREPAYMENT FEE : 30%</h5>
        <p class="text">Funds are released on the next business day after your payment is approved</p>


        <div class="text">
          <p class="text-parah">REQUIREMENTS:</p>
          <ul style="list-style: none">
            <li>register on our website</li>
            <li>Office Tel ☎</li>
            <li>TIN</li>
            <li>Office address</li>
            <li>Office Utility bill</li>
<!--            <li>Business Owner SSN</li>-->
            <li>Business Owner Phone number</li>
          </ul>
        </div>


        <p class="text">
          Means Of Payment: BTC , USDT and BankWire
        </p>
        <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Apply Now</button>
      </div>

      <div class="box">
        <div class="color">
          <h4 class="color-header">INVESTMENT LOAN</h4>
          <h5 class="text-1">Min amount $500,000<br/>Max Amount $10,000,000</h5>
          <ul class="list-alpha">
            <li class="list-item">No Credit Score Required</li>
          </ul>
          <p class="text-1">
            Maximum loan terms vary depending on the investment plan for crypto investments.<br/>
            For personal use, loan terms are limited to 3% bi-weekly or 5% monthly.
          </p>
        </div>
        <h5 class="text-2">PREPAYMENT FEE : 15%</h5>
        <p class="text">Funds are released two weeks after your payment is approved</p>

        <h5 class="text-2">PREPAYMENT FEE : 30%</h5>
        <p class="text">Funds are released on the next business day after your payment is approved</p>

        <div class="text">
          <p class="text-parah">REQUIREMENTS:</p>
          <ul style="list-style: none">
            <li>register on our website</li>
            <li>Valid ID</li>
            <li>Valid phone number</li>
<!--            <li>SSN</li>-->
            <li>Utility bill</li>
          </ul>
        </div>

        <p class="text">
          Means Of Payment: BTC , USDT and BankWire
        </p>
        <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Apply Now</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "LoanPlanBody",
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
  padding-top: 5%;
  /*background-color: #f0f2f4;*/
  padding-bottom: 5%;
}

.header{
  color: #ffffff;
  letter-spacing: 1px;
  font-size: 30px;
}

.box{
  background-color: #232323;
  /*box-shadow:  20px 20px 60px #d9d9d9,*/
  /*-20px -20px 60px #ffffff;*/
  padding: 50px 40px;
  /*padding-left: 80px;*/
  /*padding-right: 80px;*/
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 3%;
  margin-left: 3.7%;
  margin-right: 3.7%;
  text-align: center;

}

.section-alpha{
  display: flex;
  justify-content: space-evenly;
}

.section-alpha-1{
  display: block;
  text-align: center;
}

.color-header{
  color: #5d78ff;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 5px;
}

.color{
  padding-bottom: 15px;
}

.text{
  color: #ffffff;
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 17px;
  border-bottom: 3px solid #626B7F;
  letter-spacing: 1.5px;
}

.text-2{
  color: #5d78ff;
  font-size: 17px;
  padding-top: 5px;
}

ul{
  text-align: unset;
}

.text-parah{
  padding-bottom: 0;
  margin-bottom: 0;
  color: #5d78ff;
}

.text-1{
  color: #ffffff;
  letter-spacing: 0.8px;
  font-size: 17px;
}

/*.btn:hover {*/
/*  background-color: #D23535;*/
/*  color: #ffffffff;*/
/*  border: 1px solid #D23535;*/
/*  -webkit-transition: all 0.35s ease;*/
/*  transition: all 0.35s ease;*/
/*  box-shadow: 0 0 5px rgba(20, 49, 89, 0.6);*/
/*}*/
.btn-white {
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
  margin-top: 10%;
}

.list-alpha{
  list-style: none;
  font-weight: bold;
  font-size: 18px;
  margin-top: 3%;
  margin-bottom: 6%;

}

.list-item{
  /*display: grid;*/
  /*place-items: center;*/
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  height: 40px;
  width: 90%;
  background: white;
  color: #071333;
  border-radius: 7px;
  margin-bottom: 15px;
  /*margin-left: 10%;*/
  padding-top: 7.5px
}

.list-item::before{
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  background: white;
  width: 15px;
  height: 15px;
  transform: translate(-50%,-50%) rotate(45deg);
}

@media (max-width: 990px) {
  .section-alpha{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .box{
    margin: 3% 8% 8%;
  }
}

</style>