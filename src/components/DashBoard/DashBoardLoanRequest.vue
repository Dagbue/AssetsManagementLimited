<template>
  <div>
    <h1 class="history-header">Loan Services</h1>

    <form @submit.prevent="sendDeposit" >
      <div class="bank-trans">

        <div class="bank-trans-form2">
          <label>Choose A Loan Plan</label>
          <select aria-required  name="selected" required="required" v-model="loan" >
            <option value=""></option>
            <option value="Personal Loan">Personal Loan</option>
            <option value="Business Loan">Business Loan</option>
            <option value="Investment Loan">Investment Loan</option>
          </select>
        </div>

        <p class="note" v-if="this.loan === 'Personal Loan'">
          NB: loan amount ranges from $10,000 to $500,000. If you wish to make a prepayment, a fee of
          15% of the outstanding loan amount will be charged if the request is made two weeks prior to the funding
          date. If the prepayment is requested on the day of funding, the fee will be increased to 30%
        </p>

        <p class="note" v-if="this.loan === 'Business Loan'">
          NB: loan amount ranges from $50,000 to $3,000,000. If you wish to make a prepayment, a fee of
          15% of the outstanding loan amount will be charged if the request is made two weeks prior to the funding
          date. If the prepayment is requested on the day of funding, the fee will be increased to 30%
        </p>

        <p class="note" v-if="this.loan === 'Investment Loan'">
          NB: loan amount ranges from $500,000 to $10,000,000. If you wish to make a prepayment, a fee of
          15% of the outstanding loan amount will be charged if the request is made two weeks prior to the funding
          date. If the prepayment is requested on the day of funding, the fee will be increased to 30%
        </p>
        <br/>
        <div class="bank-trans-form">
          <label>Enter Amount</label>
          <input type="number"  required="required" name="Amount" v-model="deposit" />
        </div>
        <br/>
        <div class="bank-trans-form2">
          <label>Choose Method Of Deposit</label>
          <select aria-required  name="selected" required="required" v-model="depositMethod" >
            <option value=""></option>
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="USDT">USDT</option>
            <!--            <option value="GLC">Gold Coin</option>-->
            <option value="BCH">Bitcoin Cash</option>
          </select>
        </div>
      </div>
      <input type="submit" class="bank-trans-btn" placeholder="Request Loan" />
    </form>


  </div>
</template>

<script>
import {doc, increment, setDoc} from "firebase/firestore";
import {auth, database, db} from "@/firebase/config";
import {push, ref, serverTimestamp, set} from "firebase/database";
import router from "@/router";
export default {
  name: "DashBoardLoanRequest",
  data() {
    return {
      loan: "",
      depositMethod:"",
      deposit: "",
      statusDeposit: "Pending",
      email: auth.currentUser.email,
      prepaymentFee: 0
    }
  },
  methods: {
    onPostClick() {
      this.$router.push("/fund-wallet");
      window.scrollTo(0, 0);
    },
    async sendDeposit() {
      await setDoc(doc(db, auth.currentUser.email, "USER"), {
        loanDeposit: increment(this.deposit),
        loanDepositMethod: this.depositMethod,
        statusLoan: this.statusDeposit,
        loanPlan: this.loan,
        prepaymentFee: this.prepaymentFee
      }, {merge: true})
          .then(() => {
            console.log('saved the deposit')
          })

      await setDoc(doc(db,"loans", auth.currentUser.email), {
        loanDeposit: increment(this.deposit),
        loanDepositMethod: this.depositMethod,
        statusLoan: this.statusDeposit,
        loanPlan: this.loan,
        prepaymentFee: this.prepaymentFee,
        email: this.email
      }, {merge: true})
          .then(() => {
            console.log('saved the deposit admin')
          })

      const myUserId = auth.currentUser.uid;
      const Deposit = ref(database, myUserId + "/loanRequests");
      const newDeposit = push(Deposit);
      await set(newDeposit, {
        loanDepositMethod: this.depositMethod,
        loanDeposit: this.deposit,
        email: this.email,
        createdAt: serverTimestamp(),
      })


      const Deposit2 = ref(database, "/loanRequests");
      const newDeposit2 = push(Deposit2);
      await set(newDeposit2, {
        loanDepositMethod: this.depositMethod,
        loanDeposit: this.deposit,
        email: this.email,
        statusLoan: this.statusDeposit,
        createdAt: serverTimestamp(),
      })
      await router.push('/fund-wallet')
    },
  },
}
</script>

<style scoped>
.history-header{
  padding-top: 3%;
  padding-bottom: 30px;
  font-size: 25px;
  text-align: center;
  color: #071333;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.header-alpha{
  padding-top: 60px;
  margin-left: 10%;
  font-size: 26px;
  padding-bottom: 10px;
  text-align: center;
  padding-right: 110px;
  letter-spacing: 3px;
  color: #143159;
}
.bank-trans{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: rgba(129, 138, 154, 0.5);
  color: #FFFFFF;
  margin-bottom: 3%;
  margin-right: 15%;
  margin-left: 15%;
  padding: 4% 4% 6% 5%;
  border-radius: 5px;
}

.bank-trans-form{
  display: flex;
  flex-direction: column;
  /*padding-bottom: 10px;*/
}
.bank-trans-form2 {
  display: flex;
  flex-direction: column;
  /*padding-top: 20px;*/
}
input{
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  background-color: aliceblue;
  border: none;
  border-radius: 5px;
  font-size: 15px;
}
select{
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  background-color: aliceblue;
  border: none;
  border-radius: 5px;
  font-size: 15px;
}
option{
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
}
label{
  padding-bottom: 10px;
  font-size: 17px;
  color: #124DA8;
  font-weight: 700;
}
.bank-trans-btn{
  margin-bottom: 4%;
  padding: 11px 80px;
  color: white;
  background-color: #124DA8;
  border: 1px solid #124DA8;
  border-radius: 5px;
  font-size: 16px;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.bank-trans-btn:hover{
  color: white;
  background-color: #D23535;
  border: 1px solid #D23535;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}


.note {
  padding-top: 13px;
  color: #D23535;
  font-size: 15px;
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
}



@media (max-width: 990px) {
  .history-header{
    font-size: 22px;
  }
  .fields-alpha{
    margin-left: unset;
    margin-right: unset;

  }
  .content-sep, hr{
    margin-left: unset;
    margin-right: unset;
  }
  .foot{
    font-size: 15px;
  }
}


@media (max-width: 550px) {
  .history-header{
    font-size: 20px;
  }
  .foot{
    font-size: 11px;
  }
  .bank-trans{
    margin-bottom: 3%;
    margin-right: 7%;
    margin-left: 5%;
    padding: 4% 4% 6% 5%;
    border-radius: 5px;
  }
}
</style>