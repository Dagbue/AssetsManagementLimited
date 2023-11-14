<template>
  <div class="alpha">

    <div class="section-1">
      <div class="text-part">
        <p class="text-1">Global Market Access</p>
        <p class="text-2">
          Traders from more than 200 countries and territories have the opportunity to engage in a wide spectrum of
          financial instruments, including stocks, options, futures, currencies, bonds, funds, and cryptocurrencies,
          across 150 global markets, all seamlessly accessible through a single unified platform.
        </p>
        <p class="text-3">
          You can effortlessly fund your trading account and execute trades in 26 different currencies.
        </p>
        <p class="text-4">
          Explore worldwide financial markets for overlooked investment opportunities with the advanced analytical
          tools provided by Assets Management Limited GlobalAnalyst.
        </p>
      </div>

      <div class="image-part">
        <img src="@/assets/about.webp" alt="image" class="image">
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'aboutSection1',
}
</script>

<style scoped>
.section-1{
  display: flex;
  background-color: #F6F6F7;
  background-image: url(https://www.interactivebrokers.com/images/web/why-ibkr-global-market-access-background.png), linear-gradient(#F6F6F7 17.14%, #DFE2E7 95.69%);
  background-repeat: no-repeat;
  background-size: 50%, cover;
  background-position: bottom right, top left;
  padding-top: 2%;
  padding-bottom: 1.5%;
}

.image{
  width: 80%;
}

.text-1{
  color: #222;
  font-size: 27px;
  padding-bottom: 2.5%;
  font-weight: 900;
}

.text-2{
  color: #818a91;
  font-size: 18px;
  padding-bottom: 2%;
  width: 75%;
}

.text-3{
  color: #818a91;
  font-size: 18px;
  padding-bottom: 2%;
}

.text-4{
  color: #818a91;
  font-size: 18px;
  padding-bottom: 2%;
  width: 80%;
}

.text-part{
  margin-top: 2%;
  margin-left: 9%;
}

@media (max-width: 700px) {
  .section-1{
    display: block;
  }
  .image{
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: 45%;
  }
  .text-1{
    font-size: 26px;
    padding-bottom: 2%;
  }
  .text-2{
    font-size: 17px;
    width: 90%;
  }
  .text-part{
    margin-top: 2%;
    margin-left: 5%;
  }
  .text-3{
    font-size: 17px;
  }
}

@media (max-width: 500px) {

}
</style>