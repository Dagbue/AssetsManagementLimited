<template>
  <div class="alpha">

    <div style="color: white;" class="section-1-alpha">
      <p class="text-1">User Profile</p>
      <hr/>
      <div class="section-1-part-1">
        <img v-if="UserDetails.user.displayPicture === ''" src="@/assets/Avatar.svg" alt="logo"  class="avatar"/>
        <img v-else :src="UserDetails.user.displayPicture" alt="displayPicture"  class="displayPicture"/>
        <div>
          <p style="text-align: left">{{UserDetails.user.firstName}} {{UserDetails.user.lastName}}</p>
          <p style="text-align: left">{{UserDetails.user.email}}</p>
        </div>
      </div>

      <div class="referral-part">
        <input type="text" v-model="reflink" class="link-box"/>
        <button class="link-button" @click="copyToClipboard('https://assetsmanagementlimited.com/register')">Copy Link</button>
      </div>
    </div>


    <div style="color: white;" class="section-2-alpha">
      <p class="text-1">Personal Information</p>
      <hr/>
      <div class="form">
        <form @submit.prevent="updateDetails">

          <div class="separate">

            <div class="space">
              <label>First Name</label>
              <input type="text" v-model="firstName"   class="form-input"/>
            </div>

            <div class="space">
              <label>Last Name</label>
              <input type="text" v-model="lastName"  class="form-input"/>
            </div>

          </div>

          <div class="separate">

            <div class="space">
              <label>Email</label>
              <input type="text" v-model="email"  class="form-input"/>
            </div>

            <div class="space">
              <label>Country</label>
              <input type="text" v-model="country"  class="form-input"/>
            </div>

          </div>

          <div class="separate">

            <div class="space">
              <label>Address</label>
              <input type="text" v-model="address"  class="form-input"/>
            </div>

            <div class="space">
              <label>Phone Number</label>
              <input type="text" v-model="phoneNumber"  class="form-input"/>
            </div>

          </div>

          <div v-show="this.userInfo.accountType === 'Joint'">
            <div class="separate">

              <div class="space">
                <label>Account2 FirstName</label>
                <input type="text" v-model="account2FirstName"  class="form-input"/>
              </div>

              <div class="space">
                <label>Account2 LastName</label>
                <input type="text" v-model="account2LastName"  class="form-input"/>
              </div>

            </div>

            <div class="separate">

              <div class="space">
                <label>Account2 Email</label>
                <input type="text" v-model="account2Email"  class="form-input"/>
              </div>

              <div class="space">
                <label>Account2 PhoneNumber</label>
                <input type="text" v-model="account2PhoneNumber"  class="form-input"/>
              </div>

            </div>

            <div class="separate">

            <div class="space" >
                <label>Account2 Address</label>
                <input type="text" v-model="account2Address"  class="form-input"/>
            </div>

              <div class="space" >
                <label>Account Type</label>
                <input type="text" v-model="accountType" readonly  class="form-input"/>
              </div>

            </div>

          </div>


          <div class="btn-alpha">
<!--            <p class="btn">Update Details</p>-->
            <base-button
                style="background-color: #5d78ff; border: 1px solid #5d78ff;"
                :loading="loading"
            >Update Details</base-button>
          </div>

        </form>

      </div>
    </div>



  </div>
</template>

<script>


import StoreUtils from "@/utility/StoreUtils";
import BaseButton from "@/components/baseComponents/buttons/BaseButton.vue";
import {mapState} from "vuex";
import router from "@/router";

export default {
  name: "DashBoardUpdateAccount",
  components: {BaseButton},
  // components: {UpdateAccountModal},
  data () {
    return {
      contacts: [],
      dialogIsVisible: false,
      firstName: "",
      lastName: "",
      email: "",
      country:"",
      address: "",
      phoneNumber: "",
      reflink: "https://assetsmanagementlimited.com/register",
      userId: "",
      userInfo: "",
      account2FirstName: "",
      account2LastName: "",
      account2Email: "",
      account2PhoneNumber: "",
      account2Address: "",
      accountType: "",
    }
  },
  computed:{
    ...mapState({
      loading: state => state.auth.loading,
      auth: state => state.auth,
    }),
    UserDetails() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    },
  },

  methods: {
    copyToClipboard(content) {
      const textarea = document.createElement('textarea')
      textarea.value = content
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    populateForm() {
      this.firstName = this.userInfo.firstName;
      this.lastName = this.userInfo.lastName;
      this.email = this.userInfo.email;
      this.country = this.userInfo.country;
      this.phoneNumber = this.userInfo.phoneNumber;
      this.address = this.userInfo.address;
      this.account2FirstName = this.userInfo.account2FirstName;
      this.account2LastName = this.userInfo.account2LastName;
      this.account2Email = this.userInfo.account2Email;
      this.account2Address = this.userInfo.account2Address;
      this.account2PhoneNumber = this.userInfo.account2PhoneNumber;
      this.accountType = this.userInfo.accountType;
    },

    async updateDetails() {
      await StoreUtils.dispatch(StoreUtils.actions.auth.updateUser, {
        userId: this.userId,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        country: this.country,
        address: this.address,
        account2FirstName : this.account2FirstName,
        account2LastName : this.account2LastName,
        account2Email : this.account2Email,
        account2Address : this.account2Address,
        account2PhoneNumber : this.account2PhoneNumber,
        accountType : this.accountType,
      });
      await router.push("/over-view")
    }
  },

  beforeMount() {
    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    this.populateForm();
    this.generateRandomString()
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  },

  created() {
    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    this.populateForm();
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  },

  mounted() {
    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    this.populateForm();
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
.alpha{
  display: flex;
  flex-direction: column;
}
.section-2-alpha{
  margin-top: 4%;
  float: left;
  margin-left: 20px;
  background-color: #0f171c;
  padding: 30px 40px;
  width: 93%;
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
  background-color: #000000;
  border: 1px solid #000000;
  border-radius: 5px ;
  width: 460px;
  height: 35px;
  color: white;
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

.btn-alpha{
  display: flex;
  float: left;
  margin-top: 3%;
}

.displayPicture{
  width: 13%;
  border-radius: 100px;
  margin-right: 5px;
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .separate{
    display: block;
    justify-content: space-around;
  }
}

@media (max-width: 500px) {
  .section-2-alpha{
    margin-left: unset;
    padding: 20px 20px;
    width: 100%;
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
