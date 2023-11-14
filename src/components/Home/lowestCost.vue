<template>
  <div class="alpha">

    <div class="section-1">

      <div class="section-1-content">
        <img src="https://www.interactivebrokers.com/images/web/crd-low-cost.svg" alt="crd-low-cost" class="section-1-content-image">
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Retirement Planning</p>
          <p class="section-1-content-text-2">
            Securing a stable financial future is invaluable. Instead of spending all your money today, prioritize
            planning for a brighter tomorrow. We offer guidance on managing your finances today to ensure you can
            confidently smile about your financial prospects in the future.
          </p>
        </div>
      </div>

      <div class="section-1-content">
        <img src="https://www.interactivebrokers.com/images/web/crd-global-access.svg" alt="crd-low-cost" class="section-1-content-image">
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Risk Management</p>
          <p class="section-1-content-text-2">
            Nowadays, numerous global investment firms can make choosing the right one a daunting task. Our risk
            assessment service offers a thorough report and expert advice for your investment decisions.
          </p>
        </div>
      </div>

      <div class="section-1-content">
        <img src="https://www.interactivebrokers.com/images/web/crd-technology.svg" alt="crd-low-cost" class="section-1-content-image">
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Financial Market</p>
          <p class="section-1-content-text-2">
            Our primary investments are in cryptocurrency and forex, while our parent company also participates in
            short-term projects overseas, including Agriculture and Oil & Gas partnerships.
          </p>
        </div>
      </div>

      <div class="section-1-content">
        <img src="https://www.interactivebrokers.com/images/web/crd-vault-icon.svg" alt="crd-low-cost" class="section-1-content-image">
        <div class="section-1-content-text">
          <p class="section-1-content-text-1">Loan Services</p>
          <p class="section-1-content-text-2">
            A personal loan offers the chance to achieve your future aspirations by providing an unsecured loan option
            with a repayment period of up to 60 months and a competitive monthly interest rate of just 1.083%.
          </p>
        </div>
      </div>

    </div>

    <div class="section-2">
      <p class="section-2-header">Award Winning Platform & Services</p>

      <div class="section-2-content">

        <div class="section-2-content-inner">
            <img src="https://www.interactivebrokers.com/images/web/2022_sb-badge-1-professional-trading.png" alt="2022_sb-badge-1" class="section-2-image"/>
          <p class="section-2-text-1">Professional Trading</p>
          <p class="section-2-text-2">Offering of Investments</p>
        </div>

        <div class="section-2-content-inner">
          <img src="https://www.interactivebrokers.com/images/web/awards-2021-Fintech-Awards-Winner-Badge.png" alt="2022_sb-badge-1" class="section-2-image"/>
          <p class="section-2-text-1">Lifetime Achievement</p>
          <p class="section-2-text-2">Best Paper Trading Platform</p>
        </div>

        <div class="section-2-content-inner">
          <img src="https://www.interactivebrokers.com/images/web/award-barrons-2023-best-online-broker.png" alt="2022_sb-badge-1" class="section-2-image"/>
          <p class="section-2-text-1">#1 Best Online Broker</p>
          <p class="section-2-text-2">5 out of 5 stars</p>
        </div>

        <div class="section-2-content-inner">
          <img src="https://www.interactivebrokers.com/images/web/awards-investopedia-2022-General.png" alt="2022_sb-badge-1" class="section-2-image"/>
          <p class="section-2-text-1">4.6 out of 5 stars</p>
          <p class="section-2-text-2">Overall</p>
        </div>

        <div class="section-2-content-inner">
          <img src="https://www.interactivebrokers.com/images/web/award-2023-brokerchooser.png" alt="2022_sb-badge-1" class="section-2-image"/>
          <p class="section-2-text-1">Best Online Broker</p>
        </div>

      </div>



      <div class="btn-part" @click="onPostClick">
        <p class="btn">Get Started</p>
      </div>
    </div>

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
  font-size: 18px;
  margin-bottom: 1%;
}
.section-1-content-text-2{
  margin: 0;
  font-size: .875rem;
  color: #818a91;
  width: 90%;
}
.section-1-content-image{
  height: 70px;
  width: 70px;
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



