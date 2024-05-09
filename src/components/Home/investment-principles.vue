<template>
  <div class="section-2">

    <div class="text-box-2">
      <h4 class="benefit-header">Benefits of Investing with AML</h4>
      <p class="benefit-text">Advantages of Managed Funds The benefits of using managed funds include the ability to gain exposure to
         different asset classes and market sectors.</p>
      <ul class="list-alpha">

        <li class="list-item">Diversification</li>
        <li class="list-item"> Potential wealth generation</li>
        <li class="list-item">Cost-effective investment</li>
         <li class="list-item"> Access to a range of assets</li>
         <li class="list-item">Geared exposure</li>
          <li class="list-item">Underperforming investments</li>
      </ul>

      <p class="benefit-text">You don't need to be an expert to build your Investment portfolio and digital wealth Investing in
        cryptocurrency can be intimidating, especially for beginners. Sometimes managing a crypto investment is
        daunting due to the uncertainty and volatility of the market, as well as the time investment needed to be
        successful.
      </p>



    </div>

    <div class="text-box">

      <h4 class="heading-primary-main-2">Why Invest With Bitcoin?</h4>
      <section class="video">
        <iframe width="770" height="400" src="https://www.youtube.com/embed/YIVAluSL9SU" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture" allowfullscreen>

        </iframe>
      </section>

      <div class="heading-primary">
        <p class="heading-primary-main">Our Investment Principles</p>
        <p class="heading-primary-sub">Our goal is to maximize investor return and minimize any potential loss by
          applying these principles in a disciplined and pragmatic process. We rely on facts, not speculation to
          purchase high return, predictable companies at significant discounts to intrinsic values</p>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: "investment-principles"
}
</script>

<style scoped>
.section-2 {
  font-size: 16px;
  line-height: 1.7;
  color: #ffffff;
  height: 100vh;
  background-image:
      linear-gradient(to right bottom,
      rgba(35, 35, 35, 0.85),
      rgba(35, 35, 35, 0.85)),
      url("https://img.freepik.com/free-vector/global-business-background-with-stock-chart-blue-tone_53876-117483.jpg?t=st=1711970141~exp=1711973741~hmac=144a7d3fc5045e4e900a6b44f6e512591e15b97d5cbbd551172d3fb26f7d02b0&w=1800");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  padding-top: 50px;
  padding-bottom: 50px;
}

.text-box {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.heading-primary-main {
  display: block;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 1px;
  padding-bottom: 0;
}

.heading-primary-main-2{
  display: block;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 1px;
  padding-bottom: 10px;
}

.heading-primary-sub {
  font-size: 17px;
  font-weight: 400;
  color: white;
  padding-left: 15%;
  padding-right: 15%;
}



iframe{
  width: 70%;
}

.text-box{
  width: 50%;
  margin-top: 3%;
}

.text-box-2{
  width: 50%;
  text-align: center;
  margin-top: 3%;
}
.benefit-header{
  display: block;
  font-size: 22px;
  font-weight: bold;
  color: #Fff;
  letter-spacing: 1px;
  padding-bottom: 10px;
}

.benefit-text{
  font-size: 18px;
  font-weight: 400;
  color: white;
  padding-left: 5%;
  padding-right: 5%;
}


.list-alpha{
  list-style: none;
  font-weight: bold;
  font-size: 17px;
  margin-top: 3%;
  margin-bottom: 3%;
}

.list-item{
  display: grid;
  place-items: center;
  position: relative;
  height: 40px;
  width: 55%;
  background: white;
  color: #222222;
  border-radius: 7px;
  margin-bottom: 15px;
  /*margin-left: 19%;*/
  margin-left: auto;
  margin-right: auto;
}

.list-item::before{
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  background: white;
  width: 12px;
  height: 12px;
  transform: translate(-50%,-50%) rotate(45deg);
}

@media (max-width: 500px) {
  iframe{
    width: 90%;
  }
  .list-alpha{
    font-size: 14px;
  }
  .list-item{
    width: 70%;
  }

  .heading-primary-sub {
    padding-left: 5%;
    padding-right: 5%;
  }

}

@media (max-width: 990px) {
  .section-2 {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .text-box-2{
    width: 100%;
    text-align: center;
    margin-top: 3%;
  }
  .text-box{
    width: 100%;
    text-align: center;
    margin-top: 3%;
  }
}



</style>
