<template>
  <div class="alpha">

    <div class="section-1">
      <div class="section-1-text">
        <div class="width">
          <p class="section-1-text-header">A Broker You Can Trust</p>
          <p class="section-1-text-subheader">When placing your money with a broker, you need to make sure your broker
            is secure and can endure through good and bad times. Our strong capital position, conservative balance
            sheet and automated risk controls are designed to protect Assets Management Limited and our clients from large trading losses.</p>
          <div class="separate">
            <div class="separate-inner">
              <h2>AML</h2>
              <p>Nasdaq Listed</p>
            </div>
            <div class="separate-inner">
              <h2>$12.2B</h2>
              <p>Equity Capital</p>
            </div>
            <div class="separate-inner">
              <h2>75.5%</h2>
              <p>Privately Held</p>
            </div>
          </div>
          <div class="separate">
            <div class="separate-inner">
              <h2>$9.0B</h2>
              <p>Excess Regulatory <br/> Capital</p>
            </div>
            <div class="separate-inner">
              <h2>2.20M</h2>
              <p>Client Accounts</p>
            </div>
            <div class="separate-inner">
              <h2>2.05M</h2>
              <p>Daily Avg Revenue <br/> Trades</p>
            </div>
          </div>
          <div class="btn-part" @click="onPostClick">
            <p class="btn">Get Started</p>
          </div>
        </div>
      </div>

      <div class="section-1-image">
        <img src="https://www.bitcoin.com/static/fee5b2fb5ece950a07eff2d56f9f772a/748fb/verse.webp" alt="map-solo" class="image">
      </div>
    </div>


    <div class="cryptohopper-web-widget" data-id="7" data-label_design="2" data-coins="bitcoin,ethereum,xrp,bnb,cardano,dogecoin,solana,polkadot,bitcoin-cash,shiba-inu" data-numcoins="undefined" data-fullwidth="1" data-realtime="on"></div>

    <div class="section-2">
      <p class="section-2-header">Choose the Best Account Type for You</p>

      <div class="section-2-content">

        <div class="section-2-content-inner">
          <img src="https://www.interactivebrokers.com/images/web/acct-type-individual.svg" alt="individual" class="section-2-image"/>
          <p>Individual Accounts</p>
        </div>

        <div class="section-2-content-inner">
          <img src="https://www.interactivebrokers.com/images/web/acct-type-joint.svg" alt="individual" class="section-2-image reduce"/>
          <p>Joint or Trust Accounts</p>
        </div>

        <div class="section-2-content-inner">
          <img src="https://www.interactivebrokers.com/images/web/acct-type-retirement-ira.svg" alt="individual" class="section-2-image"/>
          <p>Retirement Accounts</p>
        </div>

        <div class="section-2-content-inner">
          <img src="https://www.interactivebrokers.com/images/web/acct-type-friends-family.svg" alt="individual" class="section-2-image"/>
          <p>Non-Professional Advisor</p>
        </div>

        <div class="section-2-content-inner">
          <img src="https://www.interactivebrokers.com/images/web/acct-type-institution.svg" alt="individual" class="section-2-image reduce-2"/>
          <p>Institutional Accounts</p>
        </div>

      </div>
    </div>

  </div>
</template>


<script>

export default {
  name: 'canTrust',
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
  },
}
</script>

<style scoped>

.cryptohopper-web-widget{
  margin-left: 6%;
  margin-right: 5%;
  margin-top: 3%;
}

.section-1{
  display: flex;
  align-content: center;
  align-items: center;
  margin-top: 6%;
  /*margin-left: 3%;*/
  margin-right: 3%;
}

.image{
  width: 95%;
  border-radius: 5px;
}

.section-1-text{
  width: 90%;
  margin-left: 7%;
  /*margin-top: 4%;*/
}

.section-1-image{
  margin-right: 2%;
}

.section-1-text-header{
  color: #ffffff;
  margin-top: 0;
  font-size: 30px;
  margin-bottom: 2%;
  font-weight: 900;
}

.section-1-text-subheader{
  color: #818a91;
  margin-bottom: 2%;
  line-height: 1.7;
}

.separate{
  display: flex;
  justify-content: space-between;
  text-align: center;
  color: #ffffff;
  margin-bottom: 4%;
}

.section-1-text-header-last{
  color: #818a91;
  margin-top: 1%;
  margin-bottom: 3%;
}

.width{
  width: 80%;
}



.btn{
  margin-top: 2%;
  margin-bottom: 3%;
  color: #ffffff;
  border: 1px solid #5d78ff;
  background-color: #5d78ff;
  padding: 10px 5px;
  display: block;
//margin-left: auto;
//margin-right: auto;
  text-align: center;
  width: 30%;
  border-radius: 5px;
}

/*.btn:hover{*/
/*  background-color: #D23535;*/
/*  color: #ffff;*/
/*  border: 1px solid #D23535;*/
/*  -webkit-transition: all 0.35s ease;*/
/*  transition: all 0.35s ease;*/
/*  box-shadow: 0 0 5px rgba(20, 49, 89, 0.6);*/
/*}*/


.section-2-content{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}

.reduce{
  width: 15%;
}

.reduce-2{
  width: 31%;
}

.section-2-header{
  text-align: center;
  font-size: 1.9rem;
  font-weight: 300;
  color: #ffffff;
  padding-bottom: 3rem;
  margin-top: 5%;
}

.section-2-content-inner{
  text-align: center;
}
.section-2-content-inner p{
  color: #ffffff;
  padding-top: 10px;
}

@media (max-width: 700px) {
  .section-1{
    display: block;
    margin-left: unset;
    margin-right: unset;
  }
  .section-1-text{
    width: 100%;
    margin-left: 3%;
  }
  .width{
    width: 92%;
  }
  .section-1-text-header{
    font-size: 28px;
    text-align: center;
  }
  .btn{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 45%;
  }
  .image{
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .section-2-header{
    text-align: center;
    font-size: 1.8rem;
  }
  .section-2-content{
    width: 95%;
  }

  .reduce{
    width: 31%;
  }

  .reduce-2{
    width: 31%;
  }

}

@media (max-width: 500px) {
  .section-2-content{
    display: block;
  }
  .section-2-header{
    font-size: 1.4rem;
    padding-bottom: 2rem;
  }
  .section-2-content-inner{
    margin-bottom: 5%;
  }
  .reduce{
    width: 14%;
  }

  .reduce-2{
    width: 16%;
  }
  .image{
    width: 70%;
  }
  .width{
    width: unset;
    margin-right: unset;
    margin-left: unset;
  }
  .section-1-text{
    width: 100%;
    margin-top: 4%;
    margin-left: unset;
  }
  .separate{
    margin-right: 5%;
    margin-left: 5%;
  }
  .section-1-text-subheader{
    margin-right: 3%;
    margin-left: 3%;
  }
  .section-1-text-header{
    font-size: 26px;
  }
}
</style>