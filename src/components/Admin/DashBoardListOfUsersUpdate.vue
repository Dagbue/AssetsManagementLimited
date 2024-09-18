<template>
  <div class="alpha">


    <div style="color: white;" class="section-2-alpha">

      <div class="lawrence">
        <p class="text-1">UPDATE USER INFO</p>
        <p class="btn-2" @click="back">Back</p>
      </div>
      <hr/>
      <div class="form">
        <form @submit.prevent="updateDetails">

          <div class="separate">

            <div class="space">
              <label>First Name</label>
              <input type="text" v-model="firstName"  class="form-input"/>
            </div>

            <div class="space">
              <label>Last Name</label>
              <input type="text" v-model="lastName"  class="form-input"/>
            </div>

          </div>

          <div class="separate">

            <div class="space">
              <label>Email</label>
              <input type="text" v-model="email" class="form-input"/>
            </div>

            <div class="space">
              <label>Country</label>
              <input type="text" v-model="country"  class="form-input"/>
            </div>

          </div>

          <div class="separate">

            <div class="space">
              <label>Password</label>
              <input type="text" v-model="password"   class="form-input"/>
            </div>

            <div class="space">
              <label>Phone Number</label>
              <input type="text" v-model="phoneNumber"  class="form-input"/>
            </div>

          </div>

          <div class="separate">

            <div class="space">
              <label>Deposited Amount</label>
              <input type="number" v-model="totalDepositedAmount"  class="form-input"/>
            </div>

            <div class="space">
              <label>Withdrawn Amount</label>
              <input type="number" v-model="totalWithdrawals"  class="form-input"/>
            </div>

          </div>

          <div class="separate">

            <div class="space">
              <label>Profits</label>
              <input type="number" v-model="totalProfits"  class="form-input"/>
            </div>


            <div class="space">
              <label>Bonus</label>
              <input type="number" v-model="totalBonus"  class="form-input"/>
            </div>

          </div>

          <div class="separate">
            <div  class="space">
              <label>Loan Requested</label>
              <input type="text" v-model="totalLoanRequested"  class="form-input"/>
            </div>

            <div class="space">
              <label>Account Type</label>
              <p class="edit">current type : {{accountType}}</p>
              <!--              <input type="text" v-model="userStatus" required="required" class="form-input"/>-->
              <select v-model="accountType"  class="form-input">
                <option selected disabled value="">select account Type</option>
                <option :value="null" disabled>select account Type</option>
                <option value="Joint">Joint</option>
                <option value="Single">Single</option>
              </select>
            </div>
          </div>

          <div v-show="this.readUserById.user.accountType === 'Joint'">
            <div class="separate">

              <div class="space">
                <label>Account2 FirstName</label>
                <input type="number" v-model="account2FirstName"  class="form-input"/>
              </div>

              <div class="space">
                <label>Account2 LastName</label>
                <input type="number" v-model="account2LastName"  class="form-input"/>
              </div>

            </div>

            <div class="separate">

              <div class="space">
                <label>Account2 Email</label>
                <input type="number" v-model="account2Email"  class="form-input"/>
              </div>


              <div class="space">
                <label>Account2 PhoneNumber</label>
                <input type="number" v-model="account2PhoneNumber"  class="form-input"/>
              </div>

            </div>
          </div>


          <div class="separate">

            <div class="space">
              <label>Loan Prepayment Fee</label>
              <input type="number" v-model="loanPrepaymentFee"  class="form-input"/>
            </div>

            <div class="space">
              <label>Loan Plan</label>
              <input type="text" v-model="loanPlan"  class="form-input"/>
            </div>

          </div>

          <div class="separate">

            <div class="space">
              <label>Date Created</label>
              <input type="text" v-model="createdAt"   class="form-input"/>
            </div>

            <div class="space">
              <label>Activation Code</label>
              <input type="text" v-model="twoFactorAuthenticationCode"  class="form-input"/>
            </div>

          </div>

          <div class="separate">

            <div class="space">
              <label>Wallet Name</label>
              <input type="text" v-model="walletName"   class="form-input"/>
            </div>

            <div class="space">
              <label>Wallet Address</label>
              <input type="text" v-model="walletAddress"  class="form-input"/>
            </div>

          </div>


          <div class="separate">
            <div  class="space">
              <label>key Phrases</label>
              <textarea rows="3" cols="50" class="form-input-2"  v-model="keyPhrases"></textarea>
            </div>


            <div  class="space">
              <label>current Plan</label>
              <p class="edit">current Plan : {{currentPlan}}</p>
              <!--              <input type="text" v-model="userStatus" required="required" class="form-input"/>-->
              <select v-model="currentPlan"  class="form-input">
                <option selected disabled value="">select Plan</option>
                <option :value="null" disabled>select Plan</option>
                <option value="Basic">Basic</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="Deluxe">Deluxe</option>
                <option value="401kPlan">401k Plan</option>
              </select>
            </div>

          </div>



          <div style="margin-left: 3%;" class="space">
            <label>Private Key</label>
            <input type="text" v-model="privateKey"   class="form-input"/>
          </div>





          <div class="separate">

            <div class="space">
              <label>Loan status</label>
              <p class="edit">current status : {{loanStatus}}</p>
              <!--              <input type="text" v-model="userStatus" required="required" class="form-input"/>-->
              <select v-model="loanStatus"  class="form-input">
                <option selected disabled value="">select status</option>
                <option :value="null" disabled>select status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
              </select>
            </div>

            <div class="space">
              <label>User Account status</label>
              <p class="edit">current status : {{userStatus}}</p>
<!--              <input type="text" v-model="userStatus" required="required" class="form-input"/>-->
              <select v-model="userStatus"  class="form-input">
                <option selected disabled value="">select status</option>
                <option :value="null" disabled>select status</option>
                <option value="verified">Verified</option>
                <option value="unVerified">UnVerified</option>
              </select>
            </div>

          </div>



          <div class="btn-alpha">
<!--            <p class="btn">Update Details</p>-->
            <base-button
                style="
                  background-color: #5d78ff;
                  border: 1px solid #5d78ff;"
                :loading="loading" class="btn">Update Details</base-button>
          </div>

        </form>

      </div>
    </div>

  </div>
</template>

<script>
import StoreUtils from "@/utility/StoreUtils";
import {mapState} from "vuex";
import BaseButton from "@/components/baseComponents/buttons/BaseButton.vue";
import router from "@/router";

export default {
  name: "DashBoardListOfUsersUpdate",
  components: {BaseButton},
  data()  {
    return {
      contacts: [],
      firstName: "",
      lastName: "",
      email: "",
      country:"",
      address: "",
      phoneNumber: "",
      password: "",
      btcBalance: "",
      totalDepositedAmount: "",
      totalWithdrawals:"",
      twoFactorAuthenticationCode: "",
      totalProfits: "",
      totalLoanRequested: "",
      loanPrepaymentFee: "",
      loanPlan:"",
      loanStatus: "",
      totalBonus: "",

      accountType: "",
      account2FirstName: "",
      account2LastName: "",
      account2Email:"",
      account2PhoneNumber: "",


      createdAt: "",
      userStatus: "",
      currentPlan: "",

      walletName: "",
      walletAddress: "",
      keyPhrases: "",
      privateKey: ""
    }
  },
  computed:{
    allUsers() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadAllUsers)
    },
    getAdminUserId() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getAdminUserId)
    },
    readUserById() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    },
    ...mapState({
      loading: state => state.auth.loading,
      auth: state => state.auth,
    }),
  },
  methods: {
    back() {
      this.$router.push("/list-of-users");
    },

    // getUserInfo() {
    //   StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
    //     userId: this.getAdminUserId.userId
    //   })
    // },

    populateForm() {
      this.firstName = this.readUserById.user.firstName;
      this.lastName = this.readUserById.user.lastName;
      this.email = this.readUserById.user.email;
      this.country = this.readUserById.user.country;
      this.phoneNumber = this.readUserById.user.phoneNumber;
      this.password = this.readUserById.user.password;
      this.btcBalance = this.readUserById.user.btcBalance;
      this.totalDepositedAmount = this.readUserById.user.totalDepositedAmount;
      this.totalWithdrawals = this.readUserById.user.totalWithdrawals;
      this.twoFactorAuthenticationCode = this.readUserById.user.twoFactorAuthenticationCode;
      this.createdAt = this.readUserById.user.createdAt;
      this.userStatus = this.readUserById.user.userStatus;

      this.totalProfits = this.readUserById.user.totalProfits;
      this.totalBonus = this.readUserById.user.bonus;
      this.totalLoanRequested = this.readUserById.user.totalLoanRequested;
      this.loanPrepaymentFee = this.readUserById.user.loanPrepaymentFee;
      this.loanPlan = this.readUserById.user.loanPlan;
      this.loanStatus = this.readUserById.user.loanStatus;

      this.accountType = this.readUserById.user.accountType;
      this.account2FirstName = this.readUserById.user.account2FirstName;
      this.account2LastName = this.readUserById.user.account2LastName;
      this.account2Email = this.readUserById.user.account2Email;
      this.account2PhoneNumber = this.readUserById.user.account2PhoneNumber;
      this.currentPlan = this.readUserById.user.currentPlan;
      this.walletName = this.readUserById.user.walletName;
      this.walletAddress = this.readUserById.user.walletAddress;
      this.keyPhrases = this.readUserById.user.keyPhrases;
      this.privateKey = this.readUserById.user.privateKey;
    },

    async updateDetails() {
      await StoreUtils.dispatch(StoreUtils.actions.auth.updateUser, {
        userId: this.getAdminUserId.userId,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        country: this.country,
        password: this.password,
        btcBalance: this.btcBalance,
        totalDepositedAmount: this.totalDepositedAmount,
        totalWithdrawals: this.totalWithdrawals,
        twoFactorAuthenticationCode: this.twoFactorAuthenticationCode,
        totalProfits : this.totalProfits,
        bonus : this.totalBonus,
        totalLoanRequested : this.totalLoanRequested,
        loanPrepaymentFee : this.loanPrepaymentFee,
        loanPlan : this.loanPlan,
        loanStatus : this.loanStatus,
        // createdAt: this.createdAt,
        userStatus: this.userStatus,

        accountType : this.accountType,
        account2FirstName : this.account2FirstName,
        account2LastName : this.account2LastName,
        account2Email : this.account2Email,
        account2PhoneNumber : this.account2PhoneNumber,
        currentPlan : this.currentPlan,

        walletName : this.walletName,
        walletAddress : this.walletAddress,
        keyPhrases : this.keyPhrases,
        privateKey : this.privateKey,
      })
      await StoreUtils.dispatch(StoreUtils.actions.auth.allUsers)
      await StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
        userId: this.getAdminUserId.userId,
      })
      await router.push("/list-of-users")
    }
  },

  created() {
    this.populateForm();
    // this.getUserInfo();
    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)

    StoreUtils.rootGetters(StoreUtils.getters.auth.getAdminUserId)

    // StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
    //   userId: this.getAdminUserId.userId
    // })
  },

  mounted() {
    this.populateForm();
    // this.getUserInfo();
    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)

    StoreUtils.rootGetters(StoreUtils.getters.auth.getAdminUserId)

    // StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
    //   userId: this.getAdminUserId.userId
    // })
  }
}
</script>

<style scoped>
.edit{
  color: #ffffff;
  font-size: 13px;
  padding-bottom: 3px;
}
.alpha{
  display: flex;
  flex-direction: column;
}
.section-2-alpha{
  margin-top: 4%;
  float: left;
  margin-left: 20px;
  background-color: #3C4A57FF;
  padding: 30px 40px;
  width: 93%;
  margin-bottom: 1%;
}
.section-1-alpha{
  margin-top: 4%;
  float: left;
  margin-left: 20px;
  background-color: #0f171c;
  padding: 30px 40px;
  width: 100%;
  max-width: 500px;
}
.section-1-part-1{
  display: flex;
  align-content: center;
  align-items: center;
}
.link-box{
  background-color: #000000;
  border: 1px solid #000000;
  border-radius: 5px 0 0 5px;
  width: 350px;
  height: 33px;
  color: white;
  padding: 5px 20px;
}

.separate{
  display: flex;
  justify-content: space-around;
}

.form-input{
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px ;
  width: 460px;
  height: 35px;
  color: #071333;
  padding: 5px 20px;
}

.form-input-2{
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px ;
  width: 460px;
  color: #071333;
  padding: 5px 20px;
}
.link-button{
  background-color: #5d78ff;
  border: 1px solid #5d78ff;
  display: inline-block;
  font-weight: 400;
  width: 130px;
  padding: 5px 20px;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  /*background-color: transparent;*/
  /*border: 1px solid transparent;*/
  /*padding: 0.375rem 0.75rem;*/
  font-size: 0.875rem;
  height: 35px;
  line-height: 1.4;
  border-radius: 0 5px 5px 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.text-1{
  text-align: left;
}

.referral-part{
  padding-top: 20px;
  display: flex;
}
hr {
  border-top: 1px solid #ffffff;
  margin-bottom: 20px;
  margin-top: 20px;
}
.avatar{
  padding-right: 10px;
  width: 13%;
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
.btn{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  background-color: #5d78ff;
  border: 1px solid #5d78ff;
}

.btn-2{
  width: 100px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: 0.175rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  background-color: #5d78ff;
  border: 1px solid #5d78ff;
}

.btn-alpha{
  display: flex;
  float: left;
  margin-top: 3%;
}

.lawrence{
  display: flex;
  justify-content: space-between;
}



@media (max-width: 700px) {

  .separate{
    display: block;
    justify-content: space-around;
  }

  .section-2-alpha{
    padding: 20px 25px;
    width: 95%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    max-width: 500px;
  }
  .section-1-alpha{
    margin-left: unset;
    padding: 20px 20px;
    width: 100%;
    max-width: 500px;
  }
  .form-input{
    width: 100%;
  }
  .link-button{
    font-size: 10px;
  }
  .btn-alpha{
    margin-top: 8%;
  }
}
</style>