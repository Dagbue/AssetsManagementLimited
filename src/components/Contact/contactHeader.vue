<template>
  <div class="alpha">
    <div class="section-alpha">
      <div class="section-1">

        <div class="section-1-text">
          <p class="header">Contact Us</p>
        </div>


        <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/xxxl_exness_support_d4b510a1a7.jpg" alt="why-ibkr" class="image"/>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'contactHeader',
}
</script>

<style scoped>
.section-alpha{
  background: #232323;
}

.section-1{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
}

.image{
  width: 40%;
}

.header{
  color: #ffffff;
  font-size: 2.1rem;
  line-height: 1.3;
  font-weight: bold;
}

.section-1-text{
  margin-left: 13%;
}


.section-2-content p {
  color: #818a91;
  font-size: 14.5px;
}


@media (max-width: 700px) {
  .header{
    font-size: 1.8rem;
  }
  .image{
    width: 35%;
  }
  .section-1-text{
    margin-left: 5%;
  }
}

@media (max-width: 500px) {
  .header{
    font-size: 1.3rem;
  }
  .image{
    width: 50%;
    height: 130px;
  }
}


</style>