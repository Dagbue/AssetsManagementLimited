<template>
  <div class="alpha">
    <div class="section-alpha">
      <div class="section-1">

        <div class="section-1-text">
          <p class="header">Contact Us</p>
        </div>


        <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="why-ibkr" class="image"/>

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
  background: linear-gradient(179.02deg, #DEE1E6 -15.49%, #F7F7F7 107.09%);
}

.section-1{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
}

.image{
  width: 25%;
}

.header{
  color: #222;
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
    width: 45%;
  }
}


</style>