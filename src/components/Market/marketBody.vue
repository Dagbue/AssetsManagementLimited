<template>
  <div class="alpha">

    <div class="bit-1">

      <div class="livecoinwatch-widget-1"
           lcw-coin="BTC"
           lcw-base="EUR"
           lcw-secondary="BTC"
           lcw-period="d"
           lcw-color-tx="#ffffff"
           lcw-color-pr="#0693e3"
           lcw-color-bg="#1f2434" l
           cw-border-w="1" >
      </div>

      <div class="livecoinwatch-widget-1"
           lcw-coin="ETH"
           lcw-base="EUR"
           lcw-secondary="ETH"
           lcw-period="d"
           lcw-color-tx="#ffffff"
           lcw-color-pr="#0693e3"
           lcw-color-bg="#1f2434" l
           cw-border-w="1" >
      </div>

      <div class="livecoinwatch-widget-1"
           lcw-coin="USDT"
           lcw-base="EUR"
           lcw-secondary="USDT"
           lcw-period="d"
           lcw-color-tx="#ffffff"
           lcw-color-pr="#0693e3"
           lcw-color-bg="#1f2434" l
           cw-border-w="1" >
      </div>

    </div>

    <div class="bit-1">


      <div class="livecoinwatch-widget-1"
           lcw-coin="XRP"
           lcw-base="EUR"
           lcw-secondary="XRP"
           lcw-period="d"
           lcw-color-tx="#ffffff"
           lcw-color-pr="#0693e3"
           lcw-color-bg="#1f2434" l
           cw-border-w="1" >
      </div>

      <div class="livecoinwatch-widget-1"
           lcw-coin="ADA"
           lcw-base="EUR"
           lcw-secondary="ADA"
           lcw-period="d"
           lcw-color-tx="#ffffff"
           lcw-color-pr="#0693e3"
           lcw-color-bg="#1f2434" l
           cw-border-w="1" >
      </div>

      <div class="livecoinwatch-widget-1"
           lcw-coin="DOGE"
           lcw-base="EUR"
           lcw-secondary="DOGE"
           lcw-period="d"
           lcw-color-tx="#ffffff"
           lcw-color-pr="#0693e3"
           lcw-color-bg="#1f2434" l
           cw-border-w="1" >
      </div>
    </div>

    <div class="bit-2">
      <qc-heatmap height="400px" num-of-coins="50" currency-code="USD"></qc-heatmap>
    </div>

    <div class="bit-3">
      <qc-grid-widget theme="light" width="650px" ranking-type="winners_and_losers" currency-code="USD"></qc-grid-widget>

      <qc-grid-widget theme="light" width="650px" ranking-type="top_20" currency-code="USD"></qc-grid-widget>
    </div>

  </div>
</template>

<script>

export default {
  name: 'marketBody',
}
</script>

<style scoped>
.bit-1{
  margin-top: 3%;
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
}

.bit-2{
  margin-top: 3%;
  margin-left: 5%;
  margin-right: 5%;
}

.bit-3{
  display: flex;
  margin-top: 4%;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
}

@media (max-width: 700px) {

  .bit-1{
    display: block;
  }

  .bit-2{
    margin-left: 2%;
    margin-right: 2%;
  }

  .bit-3{
    display: block;
    margin-top: 4%;
    justify-content: space-between;
    margin-left: 2.5%;
    margin-right: 5%;
  }

}

@media (max-width: 500px) {
  .bit-3{
    display: none;
  }
}

</style>