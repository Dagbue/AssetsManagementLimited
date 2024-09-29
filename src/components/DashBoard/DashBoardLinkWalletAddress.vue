<template>
  <div style="color: white;" class="section-2-alpha">
    <p class="text-1">Synchronize your Wallet to your Account</p>
    <hr/>
    <div class="form">
      <form @submit.prevent="updateDetails">



          <div class="space">
            <label>Wallet Name</label>
            <input type="text"  v-model="walletName" required="required"  class="form-input"/>
          </div>




          <div class="space">
            <label>Wallet Address</label>
            <input type="text" v-model="walletAddress" required="required" class="form-input"/>
          </div>


        <div class="space">
          <label>Private Key</label>
          <input type="text" v-model="privateKey" required="required" class="form-input"/>
        </div>



        <div class="space">
          <label>12 key Phrases</label>
          <textarea  rows="4" cols="50" class="form-input-2" required="required" v-model="rawPhrases"></textarea>

        </div>

        <p class="text-block-51" style="padding-top: 10px; color: #6c757d;" >
          Note: Ensure you write out correctly your 12 key Phrases for your wallet address, And also in the right
          order to ensure a seamless Synchronization
        </p>


<!--        <div class="separate">-->

<!--          <div class="space">-->
<!--            <label>Confirm New Wallet Address</label>-->
<!--            <input type="text"  class="form-input"/>-->
<!--          </div>-->

<!--          &lt;!&ndash;          <div class="space">&ndash;&gt;-->
<!--          &lt;!&ndash;            <label>Phone Number</label>&ndash;&gt;-->
<!--          &lt;!&ndash;            <input type="text"  class="form-input"/>&ndash;&gt;-->
<!--          &lt;!&ndash;          </div>&ndash;&gt;-->

<!--        </div>-->

        <div class="btn-alpha">
          <!--          <p class="btn">Update Details</p>-->
          <base-button :loading="loading" style="  background-color: #5d78ff;border: 1px solid #5d78ff;" >Save</base-button>
        </div>

      </form>

    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/baseComponents/buttons/BaseButton.vue";
import {mapState} from "vuex";
import StoreUtils from "@/utility/StoreUtils";
// import Swal from "sweetalert2";

export default {
  name: "DashBoardLinkWalletAddress",
  components: {BaseButton},
  data () {
    return {
      userId: "",
      userInfo: "",
      walletName: "",
      walletAddress: "",
      phrase: "",
      rawPhrases: '', // This holds the user's input
      formattedPhrase: '',// This will store the formatted string
      privateKey: '',
    }
  },
  computed:{
    ...mapState({
      loading: state => state.auth.loading,
      auth: state => state.auth,
    }),
  },

  methods: {
    async updateDetails() {
      // await this.formatPhrases();
      await StoreUtils.dispatch(StoreUtils.actions.auth.updateUser, {
        userId: this.userId,
        walletAddress: this.walletAddress,
        walletName: this.walletName,
        keyPhrases: this.rawPhrases,
        privateKey: this.privateKey,
      }, {route: this.$route})
      await this.clear();
      await this.$router.push("/over-view")
    },



    async formatPhrases() {
      // Split the user input by spaces or newlines and trim whitespace
      const wordsArray = this.rawPhrases.split(/\s+/).filter(word => word.trim() !== '');

      // Join the words into a single string separated by commas
      this.formattedPhrase = wordsArray.join(', ');
    },

    clear(){
      this.walletName = ""
      this.walletAddress = ""
      this.rawPhrases = ""
      this.privateKey = ""
    }
  },

  beforeMount() {
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  },


  created() {
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  },

  mounted() {

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  }
}
</script>

<style scoped>

.section-2-alpha{
  margin-top: 4%;
  float: left;
  margin-left: 20px;
  background-color: #0f171c;
  padding: 30px 40px;
  width: 50%;
}

.separate{
  display: flex;
  justify-content: space-around;
}

.form-input{
  background-color: #000000;
  border: 1px solid #000000;
  border-radius: 5px ;
  width: 100%;
  max-width: 500px;
  height: 35px;
  color: white;
  padding: 5px 20px;
}

.form-input-2{
  background-color: #000000;
  border: 1px solid #000000;
  border-radius: 5px ;
  width: 100%;
  max-width: 500px;
  color: white;
  padding: 5px 10px;
}

.text-1{
  text-align: left;
}


hr {
  border-top: 1px solid #ffffff;
  margin-bottom: 20px;
  margin-top: 20px;
}

.space{
  display: flex;
  flex-direction: column;
  text-align: left;
}
label{
  padding-bottom: 5px;
  padding-top: 25px;
}


.btn-alpha{
  /*display: flex;*/
  /*float: left;*/
  margin-top: 3%;
}

.text-block-51 {
  color: #FFFFFF;
  font-size: 14px;
  text-align: left;
}
/*input{*/
/*  padding-top: 14px;*/
/*  padding-bottom: 14px;*/
/*  padding-left: 10px;*/
/*  background-color: rgba(247, 247, 249, 1);*/
/*  border: none;*/
/*  border-radius: 5px;*/
/*}*/
/*select{*/
/*  padding-top: 14px;*/
/*  padding-bottom: 14px;*/
/*  padding-left: 10px;*/
/*  background-color: rgba(247, 247, 249, 1);*/
/*  border: none;*/
/*  border-radius: 5px;*/
/*}*/


@media (max-width: 700px) {
  .section-2-alpha{
    margin-top: 5%;
    float: unset;
    background-color: #0f171c;
    padding: 30px 40px;
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .btn-alpha{
    margin-top: 8%;
  }
}
</style>