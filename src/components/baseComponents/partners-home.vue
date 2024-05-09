<template>
<div class="section-alpha" style="display: none">

  <h1>Our Partners</h1>

  <div class="section-1">

<!--    <marquee-text :duration="15">-->

    <a href="https://coinmarketcap.com/"><img src="https://seeklogo.com/images/C/coinmarketcap-logo-5DD5521DC6-seeklogo.com.png"></a>

    <a href="https://trustwallet.com/"><img src="https://seeklogo.com/images/T/trust-wallet-logo-94B05A83EC-seeklogo.com.png"></a>

    <a href="https://www.binance.com/en"><img src="https://seeklogo.com/images/B/binance-exchange-logo-6592EBF48C-seeklogo.com.png"></a>

    <a href="https://discord.com/"><img src="https://seeklogo.com/images/D/discord-logo-855AEC93F1-seeklogo.com.png"></a>

    <a href="https://www.coinbase.com/"><img src="https://seeklogo.com/images/C/coinbase-new-2021-logo-D2BFF3ACD7-seeklogo.com.png"></a>

    <a href="https://crypto.com/"><img src="https://seeklogo.com/images/C/crypto-com-logo-F41F0F9CA2-seeklogo.com.png"></a>


<!--    </marquee-text>-->

  </div>


</div>
</template>

<script>
// import MarqueeText from "vue-marquee-text-component";
export default {
  name: "partners-home",
  components: {  },
}
</script>

<style scoped>
img{
  width: 90%;
  height: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: contain;
  /*padding-right: 35px;*/
}

a{
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  border-radius: 5px;
}

h1{
  text-align: center;
  padding-top: 4%;
  padding-bottom: 1%;
  margin-bottom: 0;
  color: #ffffff;
}

.section-alpha{
  padding-bottom: 5%;
  padding-top: 0;
  margin-top: 0;
}

.section-1{
  display: flex;
  gap: 20px;
  /*justify-content: center;*/
  padding-top: 15px;
  margin-left: 3%;
  margin-right: 3%;
}

@media (max-width: 700px) {
  img{
    width: 100%;
    padding-bottom: 6%;
    padding-right: 20px;
  }
  h1{
    font-size: 25px;
  }
}

@media (max-width: 500px) {
  img{
    width: 42%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 6%;
  }

  .section-1{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: unset;

  }

}
</style>

