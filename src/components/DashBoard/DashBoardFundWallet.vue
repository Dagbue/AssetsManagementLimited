<template>
  <div>
    <div class="body">
      <fund-wallet-modal @close="hideDialog" v-if="dialogIsVisible" :selected-item="selectedItem" />
      <h2 class="header">Fund Wallet</h2>

      <div class="section-1">
        <form @submit.prevent="showDialog" ref="form">
          <div class="bank-trans">
            <div class="bank-trans-form">
              <label>Enter Amount</label>
              <input type="number" placeholder="Enter Amount" required="required" name="Amount" v-model="deposit"/>
            </div>
            <div class="bank-trans-form2">
              <label>Choose Method Of Deposit</label>
              <select aria-required="required" name="selected" required="required" v-model="depositMethod">
                <option value=""></option>
                <option value="bitcoin">Bitcoin</option>
                <option value="ethereum">Ethereum</option>
                <option value="USDT">USDT</option>
              </select>
            </div>

            <div class="bank-trans-form2">
              <label>Choose Plan</label>
              <select aria-required="required" name="selected" required="required" v-model="selected">
                <option value=""></option>
                <option v-for="option in options" :key="option.id" :value="option">
                  {{ option.label }}
                </option>
              </select>
            </div>


          </div>
          <input type="submit"  class="bank-trans-btn" placeholder="Enter Amount" />
        </form>
      </div>

    </div>
  </div>
</template>

<script>
import FundWalletModal from "@/components/baseComponents/modal/FundWalletModal.vue";
import {  ref, set, push, serverTimestamp } from "firebase/database";
import {database, auth ,db} from "@/firebase/config";
import {doc, setDoc, increment} from "firebase/firestore";
import router from "@/router";

export default {
  name: "DashBoardFundWallet",
  components: {FundWalletModal},
  data() {
    return {
      dialogIsVisible: false,
      deposit: 0,
      withdrawal : 0,
      bonus : 0,
      bonusMain : 0,
      profits : 0,
      depositMethod: "",
      selected: "",
      email: auth.currentUser.email,
      statusDeposit: "Pending",
      transactionType: "deposit",
      selectedItem: null,
      options: [
        { id: 1, label: "STANDARD", value1: "STANDARD", value2: "10%" },
        { id: 2, label: "PREMIUM", value1: "PREMIUM", value2: "30%" },
        { id: 3, label: "DELUXE", value1: "DELUXE", value2: "50%" },
      ],
    };
  },
  methods: {
    async hideDialog() {
      this.dialogIsVisible = false;
      await router.push('/over-view')
    },
    async showDialog() {
      // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
      await setDoc(doc(db, auth.currentUser.email, "USER"), {
        deposit: increment(this.deposit),
        depositMethod: this.depositMethod,
        statusDeposit: this.statusDeposit,
        selected: this.selected.value1,
        ROI: this.selected.value2,
      }, {merge: true})
          .then(() => {
            console.log('saved the deposit')
          })

      await setDoc(doc(db, "Investment", auth.currentUser.email), {
        deposit: increment(this.deposit),
        depositMethod: this.depositMethod,
        statusDeposit: this.statusDeposit,
        withdrawal: this.withdrawal,
        bonus: this.bonus,
        bonusMain: this.bonusMain,
        profits: this.profits,
        email: this.email,
        selected: this.selected.value1,
        ROI: this.selected.value2,
      }, {merge: true})
          .then(() => {
            console.log('saved the deposit admin')
          })

      const myUserId = auth.currentUser.uid;
      const Deposit = ref(database, myUserId + "/DepositRequests");
      const newDeposit = push(Deposit);
      await set(newDeposit, {
        depositMethod: this.depositMethod,
        deposit: this.deposit,
        createdAt: serverTimestamp(),
      })

      const myUserId3 = auth.currentUser.uid;
      const Deposit3 = ref(database, myUserId3 + "/Transactions");
      const newDeposit3 = push(Deposit3);
      await set(newDeposit3, {
        Method: this.depositMethod,
        deposit: this.deposit,
        email: this.email,
        status: this.statusDeposit,
        transactionType: this.transactionType,
        createdAt: serverTimestamp(),
      })

      const Deposit2 = ref(database, "/DepositRequests");
      const newDeposit2 = push(Deposit2);
      await set(newDeposit2, {
        depositMethod: this.depositMethod,
        deposit: this.deposit,
        email: this.email,
        statusDeposit: this.statusDeposit,
        createdAt: serverTimestamp(),
      })
      this.selectedItem = this.depositMethod;
      this.dialogIsVisible = true;
    },
  }
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
.bank-trans{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: rgba(129, 138, 154, 0.5);
  color: #FFFFFF;
  margin-bottom: 1.7%;
  margin-right: 15%;
  margin-left: 12%;
  padding: 25px 6% 60px;
  border-radius: 5px;
}

.bank-trans-form{
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
}
.bank-trans-form2 {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}
input{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 5px;
  font-size: 15px;
}
select{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 5px;
}
option{
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
}
label{
  padding-top: 2px;
  padding-bottom: 12px;
  font-size: 16px;
  color: #124DA8;
  font-weight: 700;
}
.bank-trans-btn{
  padding: 11px 65px;
  color: white;
  background-color: #124DA8;
  border: 1px solid #124DA8;
  border-radius: 5px;
  font-size: 17px;
  text-decoration: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.bank-trans-btn:hover{
  color: white;
  background-color: #D23535;
  border: 1px solid #D23535;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}



@media (max-width: 550px) {
  .bank-trans{
    margin-right: unset;
    margin-left: unset;
  }
  .header-alpha{
    padding-top: 30px;
    margin-left: unset;
    font-size: 24px;
    padding-bottom: 10px;
    text-align: center;
    padding-right: unset;
  }

  input{
    padding-top: 12px;
    padding-bottom: 12px;
  }
  select{
    padding-top: 12px;
    padding-bottom: 12px;
  }
}
</style>