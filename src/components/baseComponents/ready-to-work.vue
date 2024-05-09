<template>
  <div class="download-app-container">
    <div class="download-app-intro">
      <p class="download-intro">Ready to work with us</p>
      <p class="download-sub">Contact us : support@companyname.com</p>
      <p class="download-sub">Phone No : +1 (717) 535‑6321</p>
      <p class="download-sub">71-75 Uxbridge Road, London, England, W5 5SL</p>
      <div class="app-store-container">
      </div>
    </div>
<!--    <div class="download-app-image">-->
<!--      <img src="@/assets/boxes.svg" alt="logo" class="image"/>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "ready-to-work"
}
</script>

<style scoped>
.download-app-container{
  background-image: url("@/assets/readybackground.jpg");
  background-color: #cccccc;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: left;
  height: 335px;
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 10px;
}
.download-app-intro{
  margin-top: 3%;
  margin-left: 1.5%;
}


.download-intro{
  font-size: 30px;
  line-height: 40px;
  color: white;
}

.download-sub{
  color: #ffffff;
  font-size: 18px;
  line-height: 35px;
  padding-top: 3%;
}

@media (max-width: 990px) {
  .download-intro {
    font-size: 24px;
    line-height: normal;
  }
  .download-sub{
    font-size: 17px;
    line-height: normal;
    padding-top: unset;
  }
  .download-app-container{
    height: 250px;
    padding-top: 29px;
  }
  img{
    width: 110%;
  }
}

@media (max-width: 700px){
  .download-app-container{
    height: 250px;
    margin-left: 2%;
    margin-right: 2%;
    border-radius: 5px;
  }
  .image{
    width: 125%;
  }
  .download-app-intro p{
    margin-left: unset;
    line-height: 1.5;
  }
}

@media (max-width: 500px){
  .download-app-container {
    display: none;
  }
}

</style>
