<template>
  <div class="alpha">

    <p class="section-1-header">Our Core Services</p>


    <div class="section-1">

      <div class="section-1-content">
<!--        <img src="https://www.interactivebrokers.com/images/web/crd-low-cost.svg" alt="crd-low-cost" class="section-1-content-image">-->
        <img src="@/assets/wealth.png" alt="" class="section-1-content-image">
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Wealth Management</p>
          <p class="section-1-content-text-2">
            Wealth management is the ability of an advisor or advisory team to deliver a full range of financial
            services and products to an affluent client in a consultative way.
          </p>
        </div>
      </div>

      <div class="section-1-content">
<!--        <img src="https://www.interactivebrokers.com/images/web/crd-global-access.svg" alt="crd-low-cost" class="section-1-content-image">-->
        <img src="@/assets/stocks.png" alt="" class="section-1-content-image">
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Stocks, Bonds & Mutual Funds</p>
          <p class="section-1-content-text-2">
            While stocks typically are higher risk investments due to market volatility, they offer potentially high
            returns. Let us help you manage your portfolio and offer financial advice.
          </p>
        </div>
      </div>

      <div class="section-1-content">
<!--        <img src="https://www.interactivebrokers.com/images/web/crd-technology.svg" alt="crd-low-cost" class="section-1-content-image">-->
        <img src="@/assets/insurance-64.png" alt="" class="section-1-content-image">
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Insurance & Annuities</p>
          <p class="section-1-content-text-2">
            We offer a variety of solutions from leading financial service providers, so you have many options when
            deciding what type of annuity is right for you.
          </p>
        </div>
      </div>

      <div class="section-1-content">
<!--        <img src="https://www.interactivebrokers.com/images/web/crd-vault-icon.svg" alt="crd-low-cost" class="section-1-content-image">-->
        <img src="@/assets/coll.png" alt="" class="section-1-content-image">
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Retirement & College Savings</p>
          <p class="section-1-content-text-2">
            Finding a balance with your money is a crucial part of personal finance. Saving for retirement does not
            have to be mutually exclusive from saving for college.
          </p>
        </div>
      </div>

    </div>

<!--    <div class="section-2">-->
<!--      <p class="section-2-header">Award Winning Platform & Services</p>-->

<!--      <div class="section-2-content">-->

<!--        <div class="section-2-content-inner">-->
<!--            <img src="https://www.interactivebrokers.com/images/web/2022_sb-badge-1-professional-trading.png" alt="2022_sb-badge-1" class="section-2-image"/>-->
<!--          <p class="section-2-text-1">Professional Trading</p>-->
<!--          <p class="section-2-text-2">Offering of Investments</p>-->
<!--        </div>-->

<!--        <div class="section-2-content-inner">-->
<!--          <img src="https://www.interactivebrokers.com/images/web/awards-2021-Fintech-Awards-Winner-Badge.png" alt="2022_sb-badge-1" class="section-2-image"/>-->
<!--          <p class="section-2-text-1">Lifetime Achievement</p>-->
<!--          <p class="section-2-text-2">Best Paper Trading Platform</p>-->
<!--        </div>-->

<!--        <div class="section-2-content-inner">-->
<!--          <img src="https://www.interactivebrokers.com/images/web/award-barrons-2023-best-online-broker.png" alt="2022_sb-badge-1" class="section-2-image"/>-->
<!--          <p class="section-2-text-1">#1 Best Online Broker</p>-->
<!--          <p class="section-2-text-2">5 out of 5 stars</p>-->
<!--        </div>-->

<!--        <div class="section-2-content-inner">-->
<!--          <img src="https://www.interactivebrokers.com/images/web/awards-investopedia-2022-General.png" alt="2022_sb-badge-1" class="section-2-image"/>-->
<!--          <p class="section-2-text-1">4.6 out of 5 stars</p>-->
<!--          <p class="section-2-text-2">Overall</p>-->
<!--        </div>-->

<!--        <div class="section-2-content-inner">-->
<!--          <img src="https://www.interactivebrokers.com/images/web/award-2023-brokerchooser.png" alt="2022_sb-badge-1" class="section-2-image"/>-->
<!--          <p class="section-2-text-1">Best Online Broker</p>-->
<!--        </div>-->

<!--      </div>-->



<!--      <div class="btn-part" @click="onPostClick">-->
<!--        <p class="btn">Get Started</p>-->
<!--      </div>-->
<!--    </div>-->

  </div>
</template>

<script>


export default {
  name: 'lowestCost',
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
  },
}
</script>

<style scoped>
.section-1{
  display: flex;
  margin-right: 3%;
  margin-left: 3%;
  margin-top: 2.5%;
}
.section-1-header{
  text-align: center;
  font-size: 1.7rem;
  font-weight: 300;
  color: #071333;
  /*padding-bottom: 0.3rem;*/
  margin-top: 2.5%;
}
.section-1-content{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.section-1-content-text-1{
  font-weight: 600;
  color: #071333;
  margin-top: 0;
  font-size: 17px;
  margin-bottom: 1%;
}
.section-1-content-text-2{
  margin: 0;
  font-size: .9rem;
  color: #818a91;
  width: 90%;
  line-height: 1.4;
  padding-top: 1.5%;
}
.section-1-content-image{
  height: 80px;
  width: 80px;
  object-fit: cover;
  margin-right: 10px;
}


.section-2-header{
  text-align: center;
  font-size: 1.7rem;
  font-weight: 300;
  color: #071333;
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
  margin-top: 3%;
  margin-bottom: 3%;
  color: #124DA8;
  border: 1px solid #124DA8;
  padding: 13px 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 10%;
  border-radius: 5px;
}

.btn:hover{
  background-color: #D23535;
  color: #ffff;
  border: 1px solid #D23535;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 5px rgba(20, 49, 89, 0.6);
}

@media (max-width: 1000px) {
  .section-1-content-text-2{
    font-size: .750rem;
    width: 95%;
  }

  .section-1-content-text-1{
    font-size: 16px;
  }
}

@media (max-width: 700px) {
  .section-1{
    display: block;
    margin: 2.5% 2% 2.5% 4%;
  }

  .section-1-content{
    margin-bottom: 4%;
  }

  .section-1-content-text-2{
    font-size: .875rem;
    width: 95%;
  }

  .section-1-content-text-1{
    font-size: 18px;
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



