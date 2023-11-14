<template>
  <div class="alpha">
    <div class="section-1">
      <div class="section-1-text">
        <div class="width">
          <p class="section-1-text-header">A Broker You Can Trust</p>
          <p class="section-1-text-subheader">When placing your money with a broker, you need to make sure your broker
            is secure and can endure through good and bad times. Our strong capital position, conservative balance
            sheet and automated risk controls are designed to protect IAML and our clients from large trading losses.</p>
          <div class="separate">
            <div class="separate-inner">
              <h2>IAML</h2>
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
          <div class="btn-part">
            <p class="btn">Get Started</p>
          </div>
        </div>
      </div>

      <div class="section-1-image">
        <img src="https://www.bitcoin.com/static/de76dd78681ca1f97d7f0c9d6a20c4bf/114b6/hero-image.avif" alt="map-solo" class="image">
      </div>
    </div>

<!--    <div class="section-2">-->
<!--      <p class="section-2-header">Award Winning Platform & Services</p>-->

<!--      <div class="section-2-content">-->

<!--        <div class="section-2-content-inner">-->
<!--          <img src="https://www.interactivebrokers.com/images/web/2022_sb-badge-1-professional-trading.png" alt="2022_sb-badge-1" class="section-2-image"/>-->
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

<!--    </div>-->
  </div>
</template>

<script>

export default {
  name: 'aboutSection3',
}
</script>

<style scoped>
.section-1{
  display: flex;
  margin-top: 6%;
  margin-left: 4%;
  margin-right: 2.5%;
}

/*.image{*/
/*  width: 90%;*/
/*  height: 365px;*/
/*  margin-top: 1.5%;*/
/*  border-radius: 5px;*/
/*}*/

.image{
  width: 80%;
  border-radius: 5px;
}

.section-1-text{
  width: 90%;
  margin-left: 7%;
  margin-top: 4%;
}

.section-1-image{
  margin-right: 1%;
}

.section-1-text-header{
  color: #222;
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
  color: #222;
  margin-bottom: 4%;
}

.width{
  width: 80%;
}



.btn{
  margin-top: 2%;
  margin-bottom: 3%;
  color: #124DA8;
  border: 1px solid #124DA8;
  padding: 10px 5px;
  display: block;
//margin-left: auto;
//margin-right: auto;
  text-align: center;
  width: 30%;
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



.section-2-header{
  text-align: center;
  font-size: 1.8rem;
  font-weight: 300;
  color: #222;
  padding-bottom: 2.5rem;
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
  .image{
    width: 72%;
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