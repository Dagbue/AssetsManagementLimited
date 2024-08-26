<template>
  <div class="admin">

    <form class="form-part" @submit.prevent="placeTrade">

      <div class="form-header">
        <p style="font-weight: bold;color: #FFFFFF;">MAKE DEPOSIT</p>
      </div>

      <div class="form-group">
        <label class="label">Select User Email</label>
        <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Value" required>
          <option v-for="option in allUsers" :key="option" :value="option" >
            {{ option.email }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label class="label">Amount</label>
        <input type="number" placeholder="Enter Amount"  name="Amount" v-model="amount" required/>
      </div>

      <div class="form-group">
        <label class="label">Deposit Method</label>
        <select name="tradeType" id="tradeType" required v-model="transactionMethod">
          <option selected disabled value="">Select Deposit Method</option>
          <option value="Bitcoin">Bitcoin</option>
          <option value="Ethereum">Ethereum</option>
          <option value="USDT">USDT</option>
        </select>
      </div>


      <div class="form-group">
        <label class="label">Additional Comment</label>
        <input type="text" placeholder="Enter Comment"  name="additionalComment" v-model="additionalComment" required/>
      </div>


      <base-button :loading="loading" style="background-color: #5d78ff;border: 1px solid #5d78ff;">Make Deposit</base-button>
      <br/>
      <base-button @click="populate" :loading="loading2 " style="background-color: #5d78ff;border: 1px solid #5d78ff;">Load Users Deposits</base-button>
    </form>

    <dash-board-user-deposit-table-admin/>

    <br/>


  </div>
</template>

<script>
import BaseButton from "@/components/baseComponents/buttons/BaseButton.vue";
import StoreUtils from "@/utility/StoreUtils";
import {mapState} from "vuex";
import DashBoardUserDepositTableAdmin from "@/components/Admin/DashBoardUserDepositTableAdmin.vue";

export default {
  name: "DashBoardMakeDepositAdmin",
  components: {DashBoardUserDepositTableAdmin, BaseButton},
  data()  {
    return {
      contacts: [],
      SelectEmail: "",
      amount: "",
      transactionMethod: "",
      transactionType: "deposit",
      transactionReference: "",
      depositStatus: "pending",
      additionalComment: "",
      depositDate: null,
      currentDate: "",
      currentDate2: "",
      randomString: "",
      randomString2: "",
    }
  },
  computed:{
    allUsers() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadAllUsers)
    },
    UserDeposit() {
      return StoreUtils.rootGetters(StoreUtils.getters.deposit.getReadUserDeposit)
    },
    ...mapState({
      loading: state => state.trade.loading,
      loading2: state => state.deposit.loading,
      auth: state => state.auth,
    }),
  },
  methods: {

    async populate() {
      await StoreUtils.dispatch(StoreUtils.actions.deposit.readUserDeposit, {
        userId : this.SelectEmail.userId,
      })
      await StoreUtils.rootGetters(StoreUtils.getters.deposit.getReadUserDeposit)
    },

    async placeTrade() {
      // await StoreUtils.dispatch(StoreUtils.actions.deposit.depositCreate, {
      //   userId : this.SelectEmail.userId,
      //   amount : this.amount,
      //   transactionMethod : this.transactionMethod,
      //   transactionType : "deposit",
      //   transactionReference : this.randomString,
      //   depositStatus: "pending",
      //   additionalComment : this.additionalComment,
      //   depositDate : null
      // })
      await StoreUtils.dispatch(StoreUtils.actions.deposit.readUserDeposit, {
        userId : this.SelectEmail.userId,
      })
      await StoreUtils.rootGetters(StoreUtils.getters.deposit.getReadUserDeposit)
      // this.SelectEmail = "";
      // this.amount = "";
      // this.transactionMethod = "";
      // this.transactionType = "";
      // this.transactionReference = "";
      // this.depositStatus = "";
      // this.additionalComment = "";
      // this.depositDate = "";
      // this.getCurrentDate();
      // this.getCurrentDateTime();
      // this.generateRandomString();
      // this.generateRandomString2();
    },

    getCurrentDate() {
      const today = new Date();

      // Format the date as needed, for example: YYYY-MM-DD
      const formattedDate = today.toISOString().split('T')[0];

      // Save the formatted date to the data property
      this.currentDate2 = formattedDate;
    },


    getCurrentDateTime() {
      const today = new Date();

      // Format the date as YYYY-MM-DD HH:mm:ss
      const formattedDateTime = today.toISOString().slice(0, 19).replace("T", " ");

      // Save the formatted date and time to the data property
      this.currentDate = formattedDateTime;
    },

    generateRandomString() {
      const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString = result;
    },

    generateRandomString2() {
      const characters = '0123456789';
      let result = '';
      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString2 = result;
    }
  },
  created() {
    this.getCurrentDate();
    this.getCurrentDateTime();
    this.generateRandomString();
    this.generateRandomString2();

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadAllUsers)
  },
  mounted() {
    this.getCurrentDate();
    this.getCurrentDateTime();
    this.generateRandomString();
    this.generateRandomString2();

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.dispatch(StoreUtils.actions.auth.allUsers)
  }
}
</script>

<style scoped>

.form-header{
  padding-top: 5px;
  padding-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group input {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 13px 16px;
  height: 45px;
  border: 0.5px solid #3C4A57FF;
  box-shadow: none;
  width: 430px;
  background: #ffffff;
  margin-top: 1.5%;
  color: #071333;
  border-radius: 8px;
}

.form-group input:focus {
  outline: none;
}

.form-group input::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.form-group select {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 13px 16px;
  height: 45px;
  border-radius: 8px;
  border: 0.5px solid #3C4A57FF;
  box-shadow: none;
  width: 430px;
  background: #ffffff;
  margin-top: 1.5%;
  color: #071333;
}

option{
  color: #071333;
}

.form-group select:focus {
  outline: none;
}

.form-group select::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.form-part{
  max-width: 550px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border: 0.5px solid #3C4A57FF;
  padding: 22px 25px;
  border-radius: 5px;
  background: #3C4A57FF;
  margin-top: 2%;
}

.label{
  margin-left: 3%;
  font-size: 14px;
  color: #FFFFFF;
}



@media (max-width: 700px) {
  .form-part{
    max-width: unset;
    width: 95%;
    margin-top: 5%;
  }

  .form-group input {
    width: 100%;
  }

  .form-group select {
    width: 100%;
  }



}

</style>