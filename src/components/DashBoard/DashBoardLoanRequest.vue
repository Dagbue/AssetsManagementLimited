<template>
  <div>
    <div class="body">
      <fund-wallet-modal2 @close="hideDialog" v-if="dialogIsVisible" :selected-item="selectedItem" />

      <form @submit.prevent="showDialog" id="InteracFundingCard" class="dashboard-body-wrapper align-center">

        <h4 class="header">Follow the instructions below to make a loan request</h4>

        <hr/>

        <div class="margin-top margin-medium">

          <div class="interac-funding-steps">
            <div class="margin-bottom margin-small">
              <div class="text-block-60">STEP 1</div>
            </div>

            <div >
              <a class="">
                <br/>
                <div class="setup-title-wrapper">
                  <img src="@/assets/bank.svg" loading="lazy" alt="">
                  <div class="setup-title">
                    <div class="text-block-51">
                      Choose A Loan Plan
                      <!--                    <strong>payment@rubieswire.com</strong>-->
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>

          <div class="input-form-2">
            <select
                required
                class="input-form-3"
                v-model="model.loanPlan"
                aria-required="required"
                data-name="Field"
            >
              <option selected disabled value="">Loan Plan list</option>
              <option :value="null" disabled>Loan Plan list</option>
              <option value="Personal Loan">Personal Loan</option>
              <option value="Business Loan">Business Loan</option>
              <option value="Investment Loan">Investment Loan</option>
            </select>
          </div>

          <div class="interac-funding-steps">
            <div class="margin-bottom margin-small">
              <div class="text-block-60">STEP 2</div>
            </div>

            <div >
              <a >
                <br/>
                <div class="setup-title-wrapper">
                  <img src="@/assets/bank.svg" loading="lazy" alt="">
                  <div class="setup-title">
                    <div class="text-block-51">
                      Enter Amount Below
                      <!--                    <strong>payment@rubieswire.com</strong>-->
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>

          <div class="input-form-2">
            <input type="number" v-model="model.amount" class="input-form-3" placeholder="Amount" required name="Amount" />
          </div>

          <div class="interac-funding-steps">
            <div class="margin-bottom margin-small">
              <div class="text-block-60">STEP 3</div>
            </div>

            <div >
              <a >
                <br/>
                <div class="setup-title-wrapper">
                  <img src="@/assets/bank.svg" loading="lazy" alt="">
                  <div class="setup-title">
                    <div class="text-block-51">
                      Select Deposit Method Below
                      <!--                    <strong>payment@rubieswire.com</strong>-->
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>

          <div class="input-form-2">
            <select
                required
                class="input-form-3"
                v-model="depositMethod"
                aria-required="required"
                data-name="Field"
            >
              <option selected disabled value="">Deposit Method List</option>
                            <option :value="null" disabled>Deposit Method List</option>
              <option value="Bitcoin">Bitcoin</option>
              <option value="Ethereum">Ethereum</option>
              <option value="USDT">USDT</option>
            </select>
          </div>

          <div class="interac-funding-steps">
            <div class="margin-bottom margin-small">
              <div class="text-block-60">STEP 4</div>
            </div>

            <div >
              <a class="">
                <br/>
                <div class="setup-title-wrapper">
                  <img src="@/assets/bank.svg" loading="lazy" alt="">
                  <div class="setup-title">
                    <div class="text-block-51">
                      Additional Comment
                      <!--                    <strong>payment@rubieswire.com</strong>-->
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>

          <div class="input-form-2">
            <input type="text" v-model="model.loanAdditionalComment" class="input-form-3" placeholder="Enter Additional Comment" required name="Amount" />
          </div>


          <div class="interac-funding-steps">
            <div class="margin-bottom margin-small">
              <div class="text-block-60">STEP 5</div>
            </div>

            <div>
              <a>
                <br/>
                <div class="setup-title-wrapper"><img src="@/assets/bank.svg" loading="lazy" alt="">
                  <div class="setup-title">
                    <div class="text-block-51">
                      Click Proceed to begin transactions
                      <!--                    <strong>payment@rubieswire.com</strong>-->
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>

        </div>

        <div class="margin-top margin-medium">
          <div class="payment-email-wrapper">
            <div class="payment-email">
              <!--              <div  class="text-block-62"></div>-->
              <div style="font-size: 15px;"  class="text-block-61">Selected Method :
                <span style="padding-left: 10px;">{{depositMethod}}</span>
              </div>
              <!--          <div class="text-block-62">Selected Currency would be displayed here</div>-->
            </div>
            <div class="copy-button">
              <!--              <p  class="button">Proceed</p>-->
              <base-button
                  style="
                    border: 0.5px solid #5d78ff;
                    background-color: #5d78ff;"
                  :loading="loading"
                  class="button"
              >Proceed</base-button>
            </div>
          </div>
        </div>

<!--        <p class="text-block-51" style="padding-top: 10px; color: #6c757d;" >-->
<!--          Note: Deposits will be credited to your Assets Management Limited account after 2 network confirmations.-->
<!--        </p>-->

        <p class="text-block-51" style="padding-top: 10px; color: #6c757d;" v-if="this.model.loanPlan === 'Personal Loan'">
          NB: loan amount ranges from $10,000 to $500,000. If you wish to make a prepayment, a fee of
          15% of the outstanding loan amount will be charged if the request is made two weeks prior to the funding
          date. If the prepayment is requested on the day of funding, the fee will be increased to 30%
        </p>

        <p class="text-block-51" style="padding-top: 10px; color: #6c757d;" v-if="this.model.loanPlan === 'Business Loan'">
          NB: loan amount ranges from $50,000 to $3,000,000. If you wish to make a prepayment, a fee of
          15% of the outstanding loan amount will be charged if the request is made two weeks prior to the funding
          date. If the prepayment is requested on the day of funding, the fee will be increased to 30%
        </p>

        <p class="text-block-51" style="padding-top: 10px; color: #6c757d;" v-if="this.model.loanPlan === 'Investment Loan'">
          NB: loan amount ranges from $500,000 to $10,000,000. If you wish to make a prepayment, a fee of
          15% of the outstanding loan amount will be charged if the request is made two weeks prior to the funding
          date. If the prepayment is requested on the day of funding, the fee will be increased to 30%
        </p>

      </form>

    </div>

  </div>
</template>

<script>
import router from "@/router";
import FundWalletModal2 from "@/components/baseComponents/modal/FundWalletModal2.vue";
import LoanRequest from "@/model/request/LoanRequest";
import StoreUtils from "@/utility/StoreUtils";
import BaseButton from "@/components/baseComponents/buttons/BaseButton.vue";
import {mapState} from "vuex";
export default {
  name: "DashBoardLoanRequest",
  components: {BaseButton, FundWalletModal2},
  computed:{
    ...mapState({
      loading: state => state.loan.loading,
      auth: state => state.auth,
    }),
  },
  data() {
    return {
      model: new LoanRequest().createLoan,
      dialogIsVisible: false,
      depositMethod: "",
      selectedItem: null,
      options: [
        { id: 1, label: "STANDARD", value1: "STANDARD", value2: "10%" },
        { id: 2, label: "PREMIUM", value1: "PREMIUM", value2: "30%" },
        { id: 3, label: "DELUXE", value1: "DELUXE", value2: "50%" },
      ],
      userId: "",
      userInfo: "",
      randomString: ""
    };
  },
  methods: {
    async hideDialog() {
      this.dialogIsVisible = false;
      await router.push('/over-view')
    },

    async showDialog() {
      await StoreUtils.dispatch(StoreUtils.actions.loan.loanCreate, {
        userId : this.userId,
        amount : this.model.amount,
        transactionReference : this.randomString,
        loanPlan: this.model.loanPlan,
        loanDepositMethod: this.depositMethod,
        loanAdditionalComment: this.model.loanAdditionalComment,
        loanPrepaymentFee: 15,
        loanStatus: "pending"
      })
      await StoreUtils.dispatch(StoreUtils.actions.auth.updateUser, {
        userId: this.userId,
        totalLoanRequested: this.model.amount,
        loanPrepaymentFee: 15,
        loanPlan: this.model.loanPlan,
        loanStatus: "pending",
      })
      await StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
        userId : localStorage.getItem('userId')
      })
      await StoreUtils.dispatch(StoreUtils.actions.paymentWallet.readPaymentWalletById, {
        walletId: 1,
      })
      StoreUtils.rootGetters(StoreUtils.getters.paymentWallet.getReadPaymentWalletById)
      StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
      this.selectedItem = this.depositMethod;
      this.dialogIsVisible = true;
    },

    generateRandomString() {
      const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString = result;
    }

  },

  beforeMount() {
    this.generateRandomString()

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
    this.generateRandomString()

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


.body{
  padding: 32px;
}

.header{
  font-weight: 700;
  font-size: 19px;
  /*line-height: 25px;*/
  color: #ffffff;
  text-align: left;
}


.text-block-60 {
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 2px;
}

.interac-card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 16px 24px 16px 16px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
  background-color: #0f171c;
  border: 0.5px solid #3C4A57FF;
  text-decoration: none;
}

.setup-title-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
}

.text-block-51 {
  color: #FFFFFF;
  font-size: 14px;
  margin-top: 2%;
}

.w-inline-block {
  max-width: 100%;
  display: inline-block;
}

h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

strong{
  text-transform: lowercase;
}
.input-form-2{
  /*margin-top: 7%;*/
  display: block;
  /*justify-content: center;*/
}
.input-form-3{
  order: 1;
  width: 100%;
  padding: 12px 10px;
  /*margin: 8px 0;*/
  display: inline-block;
  box-sizing: border-box;
  background-color: #000000;
}

input{
  box-sizing: border-box;
  background-color: #0f171c;
  border: 0.5px solid #3C4A57FF;
  border-radius: 5px;
  -webkit-transition: 0.3s;
  padding-top: 30px;
  padding-bottom: 30px;
  height: 45px;
  transition: 0.3s;
  outline: none;
  color: #ffffff;
}

input:focus {
  border: 1px solid #3C4A57FF;
}

input::placeholder{
  color: #ffffff;
}

select{
  box-sizing: border-box;
  background-color: #0f171c;
  border: 0.5px solid #3C4A57FF;
  border-radius: 5px;
  -webkit-transition: 0.3s;
  padding-top: 30px;
  padding-bottom: 30px;
  height: 45px;
  transition: 0.3s;
  outline: none;
  color: #ffffff;
}

select:focus {
  border: 1px solid #3C4A57FF;
}

option{
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #667085;
}

.dashboard-body-wrapper.align-center {
  max-width: 600px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #0f171c;
  padding: 30px 40px;
  width: 93%;
}

.interac-funding-steps{
  margin-bottom: 5%;
  margin-top: 5%;
}

.header{
  color: #FFFFFF;
  font-size: 20px;
}

.connected-banks-list{
  margin-top: 1%;
}

.payment-email-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 6%;
}

.text-block-61 {
  color: #ffffff;
  font-size: 17px;
}

.text-block-62 {
  color: #ffffff;
  font-weight: 700;
}

.button{
  color: #FFFFFF;
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 8px 14px;
  gap: 8px;
  font-size: 17px;
  width: 150px;
  height: 42px;
  border: 0.5px solid #5d78ff;
  background-color: #5d78ff;
  border-radius: 6px;
}

.button:hover{
  color: #ffffff;
  border: 0.5px solid #5d78ff;
  background-color: #5d78ff;
  border-radius: 6px;
}

hr {
  border-top: 1px solid #ffffff;
  margin-bottom: 20px;
  margin-top: 20px;
}

@media (max-width: 700px) {
  .header{
    font-size: 18px;
  }

  .button{
    padding: 5px 14px;
    font-size: 13px;
    width: 140px;
    height: 36px;
  }

  hr {
    margin-bottom: 15px;
    margin-top: 15px;
  }

  .dashboard-body-wrapper.align-center {
    max-width: unset;
    padding: 30px 20px;
    width: 100%;
  }

}
</style>