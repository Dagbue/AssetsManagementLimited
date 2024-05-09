<template>
  <div class="body">
    <subscribe-modal @close="hideDialog" v-if="dialogIsVisible"/>
    <mt4-modal @close="hideDialog2" v-if="dialogIsVisible2"/>
    <h2 class="header">Subscription Trade</h2>
    <div class="section-1">
      <div class="support">
        <h1 class="support-header"><span>Assets Management Limited</span> Account Manager</h1>
        <p class="support-subheader">Don’t have time to trade or learn how to trade? Our Account Management Service is
          The Best Profitable Trading Option for you, We can help you to manage your account in the financial MARKET
          with a simple subscription model. Terms and Conditions apply Reach us at support@assetsmanagementlimited.com for
          more info.</p>
        <p class="para-last">
          <button class="one" @click="showDialog">Subscribe Now</button>
          <button class="two" @click="showDialog2" >Submit  MT4 Details</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SubscribeModal from "@/components/baseComponents/modal/SubscribeModal.vue";
import Mt4Modal from "@/components/baseComponents/modal/Mt4Modal.vue";

export default {
  name: "DashBoardSubscriptionTrade",
  components: {Mt4Modal, SubscribeModal},
  data() {
    return {
      dialogIsVisible: false,
      dialogIsVisible2: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    showDialog2() {
      this.dialogIsVisible2= true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    hideDialog2() {
      this.dialogIsVisible2 = false;
    },
  },
}
</script>

<style scoped>
.section-1{
  margin-top: 5%;
}
.body{
  padding: 32px;
}
.header{
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #353542;
}
.support{
  text-align: center;
  padding-right: 6%;
  padding-top: 5%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: rgba(129, 138, 154, 0.5);
  color: #353542;
  margin-bottom: 1.7%;
  margin-right: 15%;
  margin-left: 12%;
  border-radius: 5px;
}
.support-header{
  font-size: 22px;
  padding-bottom: 10px;
  padding-left: 20px;
}
.support-subheader{
  font-size: 15px;
  padding-bottom: 10px;
  padding-left: 60px;
  line-height: 1.5;
}

i{
  font-size: 47px;
  color: #124DA8;
}
p{
  font-size: 15px;
  padding-bottom: 10px;
}
.para-last{
  padding-bottom: 8%;
  padding-top: 4%;
}
.one{
  padding: 11px 25px;
  margin-right: 20px;
  border-radius: 5px;
  color: white;
  background-color: #124DA8;
  border: 1px solid #124DA8;
}
.one:hover{
  color: white;
  background-color: #D23535;
  border: 1px solid #D23535;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.two:hover{
  color: white;
  background-color: #D23535;
  border: 1px solid #D23535;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.two{
  padding: 11px 25px;
  border-radius: 5px;
  color: white;
  background-color: #124DA8;
  border: 1px solid #124DA8;
}

@media (max-width: 550px) {
  .support{
    text-align: center;
    padding-right: unset;
    margin-right: unset;
    margin-left: unset;
  }
  .support-subheader{
    padding-right: 5%;
    padding-left: 5%;
    font-size: 14px;
  }
  .support-header{
    font-size: 18px;
    padding-left: unset;
  }
}
</style>