<template>
  <div class="alpha">
    <div class="section-alpha">
      <div class="section-1">

        <div class="section-1-text">
          <p class="header">Markets</p>
        </div>

        <img src="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNyeXB0byUyMG1hcmtldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="why-ibkr" class="image"/>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'marketHeader',
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