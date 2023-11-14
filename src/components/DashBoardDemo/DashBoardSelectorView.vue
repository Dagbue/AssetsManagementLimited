<template>
  <div class="alpha">

    <div class="first-section" @click="onPostClick2">
      <div>
        <img src="@/assets/select2.png" alt="icon" class="icon">
      </div>
      <div>
        <p class="text">Login to your Trading Account</p>
      </div>
    </div>

    <div class="second-section" @click="onPostClick">
      <div>
        <img src="@/assets/select1.png" alt="icon" class="icon">
      </div>
      <div>
        <p class="text">Login to your Copy Trade Account</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "DashBoardSelectorView",
  methods: {
    onPostClick() {
      this.$router.push("/over-view");
      window.scrollTo(0, 0);
    },
    onPostClick2() {
      this.$router.push("/over-view-demo");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>

.alpha{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  margin-top: 21%;
  margin-left: 10%;
  margin-right: 10%;
}

.icon{
  width: 67%;
  border: 1px solid hsla(208, 7%, 46%, 0.3);
  padding: 17px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.first-section{
  display: flex;
  align-items: center;
  align-content: center;
  border: 1px solid hsla(208, 7%, 46%, 0.3);
  padding: 15px 60px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
.first-section:hover{
  background-color: hsla(208, 7%, 46%, 0.15);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.second-section:hover{
  background-color: hsla(208, 7%, 46%, 0.15);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.second-section{
  display: flex;
  align-items: center;
  align-content: center;
  border: 1px solid hsla(208, 7%, 46%, 0.3);
  padding: 15px 60px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.text{
  font-size: 16px;
}

@media (max-width: 850px) {
  .alpha{
    display: block;
    /*justify-content: space-evenly;*/
    align-items: center;
    align-content: center;
    margin-top: 20%;
    margin-bottom: auto;
    margin-left: 10%;
    margin-right: 10%;
  }

  .first-section{
    margin-bottom: 5%;
  }

}

@media (max-width: 500px) {
  .icon{
    width: 80%;
    border: 1px solid hsla(208, 7%, 46%, 0.3);
    padding: 16px;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  .text{
    font-size: 14px;
  }
}

@media (max-width: 399px) {
  .icon{
    width: 80%;
    border: 1px solid hsla(208, 7%, 46%, 0.3);
    padding: 16px;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  .text{
    font-size: 12px;
  }
}
</style>