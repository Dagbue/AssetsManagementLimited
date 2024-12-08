<template>
    <div class="body">
      <fund-wallet-modal @close="hideDialog" v-if="dialogIsVisible" :selected-item="selectedItem" />

      <form @submit.prevent="showDialog" id="InteracFundingCard" class="dashboard-body-wrapper align-center">

        <h4 class="header">Follow the instructions below to fund your wallet</h4>

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
                      Enter Amount Below
                      <!--                    <strong>payment@rubieswire.com</strong>-->
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>

          <div class="input-form-2">
            <input type="number" class="input-form-3" placeholder="Amount" required name="Amount" v-model="btcBalance" />
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
              <!--              <option :value="null" disabled>Select Digital Currency</option>-->
              <option value="Bitcoin">Bitcoin</option>
              <option value="Ethereum">Ethereum</option>
              <option value="USDT">USDT</option>
            </select>
          </div>

          <div class="interac-funding-steps">
            <div class="margin-bottom margin-small">
              <div class="text-block-60">STEP 3</div>
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
            <input type="text" class="input-form-3" placeholder="Enter Additional Comment" required name="Amount" v-model="model.additionalComment" />
          </div>


          <div class="interac-funding-steps">
            <div class="margin-bottom margin-small">
              <div class="text-block-60">STEP 4</div>
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
                  class="button"
                  :loading="loading"
              >Proceed</base-button>
            </div>
          </div>
        </div>

        <p class="text-block-51" style="padding-top: 10px; color: #6c757d;" >
          Note: Deposits will be credited to your Assets Management Limited account after 2 network confirmations.
        </p>

      </form>

    </div>
</template>

<script>
import FundWalletModal from "@/components/baseComponents/modal/FundWalletModal.vue";
import router from "@/router";
import BaseButton from "@/components/baseComponents/buttons/BaseButton.vue";
import DepositRequest from "@/model/request/DepositRequest";
import StoreUtils from "@/utility/StoreUtils";
import {mapState} from "vuex";

export default {
  name: "DashBoardFundWallet",
  components: {
    BaseButton,
    FundWalletModal
  },
  computed:{
    ...mapState({
      loading: state => state.deposit.loading,
      auth: state => state.auth,
    }),
  },
  data() {
    return {
      model: new DepositRequest().createDeposit,
      dialogIsVisible: false,
      btcBalance: "",
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
      await StoreUtils.dispatch(StoreUtils.actions.deposit.depositCreate, {
        userId : this.userId,
        amount : this.btcBalance,
        transactionMethod : this.depositMethod,
        transactionType : "deposit",
        transactionReference : this.randomString,
        depositStatus: "pending",
        additionalComment : this.model.additionalComment,
        depositDate : null
      })
      await StoreUtils.dispatch(StoreUtils.actions.paymentWallet.readPaymentWalletById, {
        walletId: 1,
      })
      StoreUtils.rootGetters(StoreUtils.getters.paymentWallet.getReadPaymentWalletById)
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
    this.populateForm()

    StoreUtils.dispatch(StoreUtils.actions.paymentWallet.readPaymentWalletById, {
      walletId: 1,
    })
    StoreUtils.rootGetters(StoreUtils.getters.paymentWallet.getReadPaymentWalletById)

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
.company-logo{
  width: 35%;
  display: block;
  margin-left: auto;
  margin-right: auto;
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