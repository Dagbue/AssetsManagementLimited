<template>
  <div class="alpha">
    <div class="section-1-alpha">
      <p class="text-1">Lowest Costs</p>
      <div class="section-1">
        <div class="section-1-content">
          <div class="part-1">

            <div class="separate">
              <i class='bx bx-check-double'></i>
              <p>Commissions start at USD 0 on US listed stocks and ETFs with low commissions on other products, and
                there are no added spreads, ticket charges or account minimums</p>
            </div>

            <div class="separate">
              <i class='bx bx-check-double'></i>
              <p>Margin rates up to 50% lower than the industry.</p>
            </div>

            <div class="separate">
              <i class='bx bx-check-double'></i>
              <p>Earn interest of up to USD 4.58% on instantly available cash.</p>
            </div>

          </div>
          <div class="part-2">
            <div class="separate">
              <i class='bx bx-check-double'></i>
              <p>AML BestXTM is a powerful suite of advanced trading technologies designed to help clients achieve
                best execution and maximize price improvement while minimizing market impact.</p>
            </div>

            <div class="separate">
              <i class='bx bx-check-double'></i>
              <p>Earn extra income on your lendable shares.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'aboutSection2',
}
</script>

<style scoped>
.alpha{
  padding-top: 4%;
  padding-bottom: 5%;
}
.section-1-alpha{
  margin-left: 11%;
  margin-bottom: 3%;
}
.section-1{
  width: 88%;
  background-color: #232323;
  padding: 30px 40px;
  padding-top: 60px;
  border-left: 4px solid #5d78ff;
}
.section-1-content{
  display: flex;
}
.separate{
  display: flex;
}
.text-1{
  font-size: 28px;
  margin-top: 3%;
  margin-bottom: 1.5%;
  color: #ffffff;
}
.bx-check-double{
  color: #5d78ff;
  font-size: 20px;
  margin-right: 1%;
}
.separate p{
  color: #818a91;
  font-size: 18px;
  padding-bottom: 8%;
}

@media (max-width: 700px) {
  .section-1{
    width: 95%;
    margin-top: 5%;
  }
  .section-1-alpha{
    margin-left: 3%;
  }
  .separate p{
    font-size: 17px;
  }
  .text-1{
    font-size: 26px;
  }
}

@media (max-width: 500px) {
  .section-1-content{
    display: block;
  }
  .text-1{
    font-size: 26px;
  }
}
</style>