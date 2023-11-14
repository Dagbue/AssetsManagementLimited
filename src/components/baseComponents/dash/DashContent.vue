<template>
  <section class="home-section">
    <div class="home-content">
      <div class="section-1">
        <img src="@/assets/log-out.svg" alt="Notification" @click="handleClick"/>&nbsp;&nbsp;
        <img src="@/assets/Notification.svg" alt="Notification"/>
        <div class="vl"></div>
        <img src="@/assets/Avatar.svg" alt="logo" />
        <p class="profile-name">{{this.contacts.firstName}} {{this.contacts.lastName}}</p>
      </div>
      <slot>
      </slot>
    </div>
  </section>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "@/firebase/config";
import router from "@/router";
export default {
  name: "DashContent",
  data () {
    return {
      contacts: "",
      approved: '',
      approved2: '',
    }
  },

  setup() {
    const store = useStore()

    const handleClick = async () => {
      await store.dispatch('logout')
    }
    router.push('/dashboard-side-bar')

    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady)}
  },

  async created() {

    const querySnapshot = await getDocs(collection(db, auth.currentUser.email,));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'deposit': doc.data().deposit,
        'bonus': doc.data().bonus,
        'bonusMain': doc.data().bonusMain,
        'withdrawal': doc.data().withdrawal,
        'profits': doc.data().profits,
        'selected': doc.data().selected,
        'ROI': doc.data().ROI,
        'plan': doc.data().plan,
        'firstName': doc.data().firstName,
        'lastName': doc.data().lastName,
        'statusDeposit': doc.data().statusDeposit,
        'statusWithdrawal': doc.data().withdrawal,
      }
      this.contacts  = data
      this.approved = doc.data().statusDeposit
      this.approved2 = doc.data().statusWithdrawal
    })


  },
}
</script>

<style scoped>
.home-content{
  position: fixed;
  left: 225px;
  background-color: #F9FAFB;
  width: calc(100% - 215px);
  height: 100vh;
  transition: all 0.5s ease;
  margin: 0 10px;
  cursor: pointer;
  overflow-y: scroll;
}
.section-1{
  display: flex;
  justify-content: right;
  align-content: center;
  align-items: center;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  padding-right: 3%;
  background-color: #FFFFFF;
}
.vl{
  border-left: 1.5px solid #E7E8F0;
  height: 35px;
  margin-left: 1%;
  margin-right: 1%;
}
.profile-name{
  padding-left: 1%;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #58596C;
}

@media (max-width: 990px) {
  .home-content{
    position: fixed;
    left: unset;
    width: 100%;
    height: 100%;
    margin: unset;
    /*padding: 10px;*/
    padding-left: 12px;
    padding-right: unset;
    overflow-y: scroll;
  }

  .section-1{
    padding-right: 15%;
    padding-top: 1%;
  }
  img{
    /*padding-left: 10px;*/
    padding-right: 10px;
  }
}

</style>

