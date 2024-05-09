<template>
  <div class="alpha">

    <div class="section-1">
      <div class="section-1-text">
        <div class="width">
          <p class="section-1-text-header">Discover a World of Opportunities</p>
          <p class="section-1-text-subheader">Invest globally in stocks, options, futures, currencies, bonds and funds from a single unified platform .
            Fund your account in multiple currencies and trade assets denominated in multiple currencies. Access market
            data 24 hours a day and six days a week.</p>
          <div class="separate">
            <div class="separate-inner">
              <h2>150</h2>
              <p>Markets</p>
            </div>
            <div class="separate-inner">
              <h2>33</h2>
              <p>Countries</p>
            </div>
            <div class="separate-inner">
              <h2>26</h2>
              <p>Currencies</p>
            </div>
          </div>
          <div class="btn-part" @click="onPostClick">
            <p class="btn">Global Markets</p>
          </div>

          <p class="section-1-text-header-last">Graphic is for illustrative purposes only and should not be relied upon for investment decisions.</p>
        </div>
      </div>

      <div class="section-1-image">
        <img src="https://www.interactivebrokers.com/images/web/map-solo-2245664933.png" alt="map-solo" class="image">
      </div>
    </div>

  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'discover',
  methods: {
    onPostClick() {
      this.$router.push("/market-view");
    },
  },
}
</script>

<style scoped>
.section-1{
  display: flex;
  align-items: center;
  align-content: center;
  margin-top: 5%;
  margin-bottom: 6%;
}

.image{
  width: 95%;
  margin-top: 1.5%;
  border-radius: 5px;
}

.section-1-text{
  width: 70%;
  margin-left: 6%;
  margin-top: 2.3%;
}

.section-1-image{
  margin-right: 1%;
}

.section-1-text-header{
  color: #ffffff;
  margin-top: 0;
  font-size: 30px;
  margin-bottom: 2%;
}

.section-1-text-subheader{
  color: #818a91;
  margin-bottom: 2%;
  line-height: 1.7;
  font-size: 18px;
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
  font-size: 15px;
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
  width: 40%;
  border-radius: 5px;
}


@media (max-width: 700px) {
  .section-1{
    display: block;
  }
  .section-1-text{
    width: 100%;
    margin-left: unset;
    margin-top: 2%;
  }
  .width{
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .section-1-image{
    margin-right: 3%;
    margin-left: 3%;
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

}

@media (max-width: 500px) {
  .section-1-text-header{
    font-size: 23px;
  }
}
</style>