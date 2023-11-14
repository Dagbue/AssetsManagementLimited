<template>
  <div class="alpha">

    <div class="section-1">
      <img src="https://www.interactivebrokers.com/images/web/home-tech-full.jpg" alt="home-tech" class="section-1-img"/>

      <div class="section-1-text">
        <p class="header">Powerful Trading Platforms to help you succeed</p>

        <div class="arrange">
          <div class="separate-alpha">
            <div class="separate">
              <p>Trading Platforms</p>
              <!--            <i class='bx bxs-chevron-right'></i>-->
            </div>
            <p class="last">Award winning platforms for every investor from beginner to advanced on mobile, web and desktop.</p>
          </div>

          <div class="section-1-last">
            <div class="separate-alpha">
              <div class="separate">
                <p>Research and News</p>
                <!--              <i class='bx bxs-chevron-right'></i>-->
              </div>
              <p class="last">Discover new investment opportunities with over 200 free and premium research and news providers.</p>
            </div>
            <div class="separate-alpha">
              <div class="separate">
                <p>Free Trading Tools</p>
                <!--              <i class='bx bxs-chevron-right'></i>-->
              </div>
              <p class="last">Spot market opportunities, analyze results, manage your account and make better decisions with our free trading tools.</p>
            </div>
          </div>

          <div class="section-1-last">
            <div class="separate-alpha">
              <div class="separate">
                <p>Order Types and Algos</p>
                <!--              <i class='bx bxs-chevron-right'></i>-->
              </div>
              <p class="last">100+ order types – from limit orders to complex algorithmic trading – help you execute any trading strategy.</p>
            </div>
            <div class="separate-alpha">
              <div class="separate">
                <p>Comprehensive Reporting</p>
                <!--              <i class='bx bxs-chevron-right'></i>-->
              </div>
              <p class="last">Real-time trade confirmations, margin details, transaction cost analysis, sophisticated portfolio analysis and more.</p>
            </div>
          </div>
        </div>




      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'powerfulTrading',
}
</script>

<style scoped>
.section-1{
  display: flex;
  margin-top: 4%;
  margin-bottom: 3%;
}

.section-1-img{
  width: 35%;
  height: 360px;
  margin-right: 3%;
  border-radius: 5px;
  margin-left: 11%;
}
.separate{
  display: flex;
  align-items: center;
  align-content: center;
  color: #124DA8;
  font-size: 17px;
  margin-bottom: 1%;
  margin-top: 1%;
  font-weight: 600;
}

.section-1-last{
  display: flex;
  padding-top: 0.8%;
  padding-bottom: 1%;
}

.header{
  color: #222;
  width: 70%;
  margin-top: 0;
  font-size: 27px;
  margin-bottom: 1%;
  font-weight: 600;
}

.last{
  color: #818a91;
  width: 80%;
}

@media (max-width: 700px) {
  .section-1{
    display: block;
  }
  .section-1-img{
    width: 70%;
    height: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 5%;
  }
  .header{
    width: 100%;
    font-size: 26px;
    text-align: center;
  }
  .arrange{
    margin-left: 10%;
    margin-right: unset;
  }
}

@media (max-width: 500px) {
  .section-1-last{
    display: block;
  }
  .header{
    font-size: 25px;
  }
}

</style>