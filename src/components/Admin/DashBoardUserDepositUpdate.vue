<template>
  <div class="alpha">


    <div style="color: white;" class="section-2-alpha">

      <div class="lawrence">
        <p class="text-1">UPDATE DEPOSIT INFO</p>
        <p class="btn-2" @click="back">Back</p>
      </div>
      <hr/>
      <div class="form">
        <form @submit.prevent="updateDetails">


          <div class="separate">

            <div class="space">
              <label class="label-2">Amount</label>
              <input type="number" v-model="amount"  class="form-input"/>
            </div>


            <div class="space">
              <label class="label-2">Deposit Status</label>
              <input type="text" v-model="depositStatus"  class="form-input"/>
            </div>

          </div>

          <div class="separate">

            <div class="space">
              <label class="label-2" >Transaction Method</label>
              <input type="text" v-model="transactionMethod"  class="form-input"/>
            </div>


            <div class="space">
              <label class="label-2" >Transaction Type</label>
              <input type="text" v-model="transactionType"  class="form-input"/>
            </div>

          </div>

          <div class="separate">

            <div class="space">
              <label class="label-2" >Transaction Reference</label>
              <input type="text" v-model="transactionReference"  class="form-input"/>
            </div>


            <div class="space">
              <label class="label-2" >Additional Comment</label>
              <input type="text" v-model="additionalComment"  class="form-input"/>
            </div>

          </div>


          <div style="margin-left: 3.5%" class="space">
              <label class="label-2">Date Created: {{depositDate | formatDate}}</label>
            <label>Edit Date Created {{depositDateEdit}}</label>
              <input type="date" v-model="depositDateEdit"  class="form-input"/>
            </div>


          <div class="btn-alpha">
            <!--            <p class="btn">Update Details</p>-->
            <base-button
                style="
                  background-color: #5d78ff;
                  border: 1px solid #5d78ff;"
                :loading="loading" class="btn">Update Deposit</base-button>
          </div>

        </form>

      </div>
    </div>

  </div>
</template>

<script>
import BaseButton from "@/components/baseComponents/buttons/BaseButton.vue";
import StoreUtils from "@/utility/StoreUtils";
import {mapState} from "vuex";
import router from "@/router";

export default {
  name: "DashBoardUserDepositUpdate",
  components: {BaseButton},
  data()  {
    return {
      contacts: [],
      amount: "",
      depositStatus: "",
      transactionMethod: "",
      transactionType:"",
      transactionReference: "",
      additionalComment: "",
      depositDate: "",
      depositDateEdit: ""
    }
  },
  computed:{
    allUsers() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadAllUsers)
    },
    getDepositUserId() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getDepositUserId)
    },
    readUserById() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    },
    readDepositById() {
      return StoreUtils.rootGetters(StoreUtils.getters.deposit.getReadDepositById)
    },
    ...mapState({
      loading: state => state.deposit.loading,
      auth: state => state.auth,
    }),
  },
  methods: {
    back() {
      this.$router.push("/make-deposit");
    },

    // getUserInfo() {
    //   StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
    //     userId: this.getAdminUserId.userId
    //   })
    // },

    populateForm() {
      this.amount = this.readDepositById.deposit.amount;
      this.depositStatus = this.readDepositById.deposit.depositStatus;
      this.transactionMethod = this.readDepositById.deposit.transactionMethod;
      this.transactionType = this.readDepositById.deposit.transactionType;
      this.transactionReference = this.readDepositById.deposit.transactionReference;
      this.additionalComment = this.readDepositById.deposit.additionalComment;
      this.depositDate = this.readDepositById.deposit.depositDate;
    },

    async updateDetails() {
      await StoreUtils.dispatch(StoreUtils.actions.deposit.updateDeposit, {
        depositId: this.readDepositById.deposit.depositId,
        amount: this.amount,
        depositStatus: this.depositStatus,
        transactionMethod: this.transactionMethod,
        transactionType: this.transactionType,
        transactionReference: this.transactionReference,
        additionalComment: this.additionalComment,
        depositDate: this.depositDate,
      })
      await StoreUtils.dispatch(StoreUtils.actions.deposit.readUserDeposit, {
        userId: this.getDepositUserId.userId,
      })
      await router.push("/make-deposit")
    }
  },

  created() {
    this.populateForm();
    // this.getUserInfo();
    StoreUtils.rootGetters(StoreUtils.getters.deposit.getReadDepositById)
    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)

    StoreUtils.rootGetters(StoreUtils.getters.auth.getDepositUserId)

    // StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
    //   userId: this.getAdminUserId.userId
    // })
  },

  mounted() {
    this.populateForm();
    // this.getUserInfo();
    StoreUtils.rootGetters(StoreUtils.getters.deposit.getReadDepositById)
    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)

    StoreUtils.rootGetters(StoreUtils.getters.auth.getDepositUserId)

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
.label-2{
  padding-bottom: 10px;
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