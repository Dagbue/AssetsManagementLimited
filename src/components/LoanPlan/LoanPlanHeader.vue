<template>
  <div class="alpha">
    <div class="section-alpha">
      <div class="section-1">

        <div class="section-1-text">
          <p class="header">Loan Plans</p>
        </div>


        <img src="https://images.unsplash.com/photo-1583752028088-91e3e9880b46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="why-ibkr" class="image"/>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "LoanPlanHeader"
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
  width: 25%;
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
    width: 45%;
  }
}


</style>