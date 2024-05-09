<template>
  <div class="alpha">


    <div class="section-1">

      <div>
        <img src="https://www.cryptoxtake.com/libs/img/featureone.png" alt="image" class="section-1-image">
      </div>

      <div class="section-1-content">
        <p class="section-1-content-header">Experience the lowest costs in the Industry</p>
        <div class="section-1-content-inner">
          <div class="separate">
            <i class='bx bx-check'></i>
            <p>Low commissions starting at $0 with no added spreads, ticket charges, platform fees, or account minimums.</p>
          </div>

          <div class="separate">
            <i class='bx bx-check'></i>
            <p>Assets Management Limited is a powerful suite of advanced trading technologies designed to help clients achieve best execution and maximize price improvement while minimizing market impact.</p>
          </div>

          <div class="separate">
            <i class='bx bx-check'></i>
            <p>Margin rates up to 50% lower than the industry.</p>
          </div>

          <div class="separate">
            <i class='bx bx-check'></i>
            <p>Earn interest of up to USD 4.58% on instantly available cash.</p>
          </div>

          <div class="separate">
            <i class='bx bx-check'></i>
            <p>Earn extra income on your lendable shares.</p>
          </div>

        </div>
        <div class="btn-part" @click="onPostClick">
          <p class="btn">Learn More</p>
        </div>
      </div>

    </div>


  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'experience',
  methods: {
    onPostClick() {
      this.$router.push("/about");
    },
  },
}
</script>

<style scoped>
.alpha{
  /*margin-top: 5%;*/
  /*padding-top: 1.5%;*/
  padding-top: 8%;
  padding-bottom: 8%;
  background-color: #232323;
}
.image-contaier{
  /*width: 50%;*/
}
.section-1{
  display: flex;
  padding-top: 15px;
  align-content: center;
  align-items: center;
  margin-left: 3%;
}

.section-1-image{
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /*height: 100%;*/
  /*margin-right: 4%;*/
  /*margin-top: 4%;*/
  /*border-radius: 15px;*/
}

.section-1-content-header{
  color: #ffffff;
  margin-top: 0;
  font-size: 30px;
  margin-bottom: 1%;
}

.separate{
  display: flex;
  margin-left: 1.5%;
  padding-top: 15px;
  padding-bottom: 15px;
}

.bx-check{
  color: #ffffff;
  margin-right: 10px;
}


.separate p{
  color: #818a91;
  /*width: 80%;*/
}

.section-1-content{
  margin-right: 3%;
}

.btn{
  margin-top: 1%;
  color: #ffffff;
  border: 1px solid #5d78ff;
  background-color: #5d78ff;
  padding: 10px 5px;
  display: block;
  text-align: center;
  width: 20%;
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

@media (max-width: 700px) {
  .section-1{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .section-1-image{
    width: 98%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .separate p{
    width: 100%;
  }

  .section-1-content{
    margin-top: 2%;
    margin-left: 2%;
    margin-right: 2%;
  }

  .section-1-content-header{
    font-size: 28px;
    text-align: center;
  }

  .btn{
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: 40%;
  }

}

@media (max-width: 500px) {
  .section-1-content-header{
    font-size: 24px;
    margin-left: 2%;
    margin-right: 2%;
  }
}

</style>