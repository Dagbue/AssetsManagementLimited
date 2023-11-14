<template>
  <div class="alpha">
    <div class="section-2">
      <div class="section-2-part-1">
        <p>Dashboard</p>
      </div>

      <div class="section-2-part-2">

        <p class="fund-wallet" @click="onPostClick">
          <i class='bx bx-plus' ></i>
          Fund Wallet
        </p>

        <p class="withdraw" @click="onPostClick2">
          <i class='bx bx-up-arrow-circle'></i>
          Withdraw
        </p>

      </div>
    </div>

    <div class="law">
      <div class="section-3">


        <div class="section-3-content">
          <div class="content-1">
            <p class="content-1-text-1">Deposited</p>
            <div>
              <p class="content-1-text-2" v-if="approved === 'approved'">£ {{this.contacts.deposit}}</p>
              <p class="content-1-text-2" v-else-if="approved === 'Pending'">£ ...</p>
              <p class="content-1-text-2" v-else>£ ...</p>
            </div>
          </div>
          <div class="content-2">
            <img src="@/assets/wallet-balance-icon.svg" alt="wallet-balance-icon"/>
          </div>
        </div>

        <div class="vl-2"></div>

        <div class="section-3-content">
          <div class="content-1">
            <p class="content-1-text-1">Withdrawn</p>
            <div>
              <p class="content-1-text-2" v-if="approved2 === 'approved'">£ {{this.contacts.withdrawal}}</p>
              <p class="content-1-text-2" v-else-if="approved2 === 'Pending'">£ ...</p>
              <p class="content-1-text-2" v-else>£ ...</p>
            </div>
          </div>
          <div class="content-2">
            <img src="@/assets/wallet-number-icon.svg" alt="wallet-balance-icon"/>
          </div>
        </div>

        <div class="vl-2"></div>

        <div class="section-3-content">
          <div class="content-1">
            <p class="content-1-text-1">Profits</p>
            <div>
              <p class="content-1-text-2" v-if="approved === 'approved'">£ {{this.contacts.profits}}</p>
              <p class="content-1-text-2" v-else-if="approved === 'Pending'">£ ...</p>
              <p class="content-1-text-2" v-else>£ ...</p>
            </div>
          </div>
          <div class="content-2">
            <img src="@/assets/wallet-number-icon.svg" alt="wallet-balance-icon"/>
          </div>
        </div>

        <div class="vl-2"></div>

        <div class="section-3-content">
          <div class="content-1">
            <p class="content-1-text-1">Bonus</p>
            <div>
              <p class="content-1-text-2" v-if="approved === 'approved'">£ {{this.contacts.bonusMain}}</p>
              <p class="content-1-text-2" v-else-if="approved === 'Pending'">£ ...</p>
              <p class="content-1-text-2" v-else>£ ...</p>
            </div>
          </div>
          <div class="content-2">
            <img src="@/assets/wallet-number-icon.svg" alt="wallet-balance-icon"/>
          </div>
        </div>

      </div>

      <div class="section-3-i">

        <div class="section-3-content">
          <div class="content-1">
            <p class="content-1-text-1">Ref Bonus</p>
            <div>
              <p class="content-1-text-2" v-if="approved === 'approved'">£ {{this.contacts.bonus}}</p>
              <p class="content-1-text-2" v-else-if="approved === 'Pending'">£ ...</p>
              <p class="content-1-text-2" v-else>£ ...</p>
            </div>
          </div>
          <div class="content-2">
            <img src="@/assets/wallet-balance-icon.svg" alt="wallet-balance-icon"/>
          </div>
        </div>

        <div class="vl-2"></div>

        <div class="section-3-content">
          <div class="content-1">
            <p class="content-1-text-1">Balance</p>
            <div>
              <p class="content-1-text-2" v-if="approved === 'approved'">£ {{ this.contacts.deposit + this.contacts.profits + this.contacts.bonusMain + this.contacts.bonus - this.contacts.withdrawal  }} </p>
              <p class="content-1-text-2" v-else-if="approved === 'Pending'">£ ...</p>
              <p class="content-1-text-2" v-else>£ ...</p>
            </div>
          </div>
          <div class="content-2">
            <img src="@/assets/wallet-number-icon.svg" alt="wallet-balance-icon"/>
          </div>
        </div>

        <div class="vl-2"></div>

        <div class="section-3-content">
          <div class="content-1">
            <p class="content-1-text-1">Daily ROI</p>
            <div>
              <p class="content-1-text-2" v-if="approved === 'approved'">{{this.contacts.ROI}}</p>
              <p class="content-1-text-2" v-else-if="approved === 'Pending'">£ ...</p>
              <p class="content-1-text-2" v-else>£ ...</p>
            </div>
          </div>
          <div class="content-2">
            <img src="@/assets/wallet-number-icon.svg" alt="wallet-balance-icon"/>
          </div>
        </div>

        <div class="vl-2"></div>

        <div class="section-3-content">
          <div class="content-1">
            <p class="content-1-text-1">Investment Plan</p>
            <div>
              <p class="content-1-text-2" v-if="approved === 'approved'">{{this.contacts.selected}}</p>
              <p class="content-1-text-2" v-else-if="approved === 'Pending'">...</p>
              <p class="content-1-text-2" v-else>£ ...</p>
            </div>
          </div>
          <div class="content-2">
            <img src="@/assets/wallet-number-icon.svg" alt="wallet-balance-icon"/>
          </div>
        </div>

      </div>
    </div>

    <div class="bit-1">
      <div style="height:500px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 0.5px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F;padding:1px;padding: 0px; margin: 0px; width: 100%;">
        <div style="height:540px; padding:0px; margin:0px; width: 100%;">
          <iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505" width="100%" height="536px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;line-height:14px;"></iframe>
        </div>
        <div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%;font-family: 'Outfit', sans-serif;">
          <a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;
          by IAML
        </div>
      </div>
    </div>

    <div class="bit-1">
      <div style="height:669px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F; padding: 0px; margin: 0px; width: 100%;">
        <div style="height:649px; padding:0px; margin:0px; width: 100%;">
          <iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=10&pref_coin_id=1505&graph=yes" width="100%" height="645px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe>
        </div>
        <div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;">
          <a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;
          by AML
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "@/firebase/config";
import router from "@/router";
export default {
  name: "DashBoardOverView",
  data () {
    return {
      contacts: "",
      approved: '',
      approved2: '',
    }
  },

  methods: {
    onPostClick() {
      this.$router.push("/fund-wallet");
    },
    onPostClick2() {
      this.$router.push("/withdrawal");
    },
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

    const querySnapshot = await getDocs(collection(db, auth.currentUser.email));
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
.section-2{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding-right: 3%;
  padding-left: 1.5%;
  margin-top: 1.5%;
  margin-bottom: 1.5%;
}
.section-2-part-1 p{
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  color: #101828;
}

.fund-wallet{
  display: flex;
  align-content: center;
  align-items: center;
  padding: 8px 14px;
  gap: 8px;
  font-size: 12px;
  width: 125px;
  height: 33px;
  background: #124DA8;
  color: #ffffff;
  border: 1px solid #124DA8;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  margin-right: 3%;
}

.fund-wallet:hover{
  background: #D23535;
  color: #ffffff;
  border: 1px solid #D23535;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.withdraw{
  display: flex;
  align-content: center;
  align-items: center;
  padding: 8px 14px;
  gap: 8px;
  font-size: 12px;
  width: 110px;
  height: 33px;
  background: #FFFFFF;
  color: #124DA8;
  border: 1px solid #124DA8;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
}

.withdraw:hover{
  background: #D23535;
  color: #ffffff;
  border: 1px solid #D23535;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.section-2-part-2{
  display: flex;
  align-content: center;
  align-items: center;
}

.section-2-part-1 p{
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #101828;
}

.section-3{
  display: flex;
  align-content: center;
  align-items: center;
  padding: 15px 25px;
  gap: 24px;
  width: 1150px;
  height: 110px;
  background: #FFFFFF;
  border: 1px solid #F2F4F7;
  border-bottom: 0.5px solid #F2F4F7;
  border-radius: 8px;
  margin-left: 2%;
}

.section-3-i{
  display: flex;
  align-content: center;
  align-items: center;
  padding: 15px 25px;
  gap: 24px;
  width: 1150px;
  height: 110px;
  background: #FFFFFF;
  border: 1px solid #F2F4F7;
  border-top: 0.5px solid #F2F4F7;
  border-radius: 8px;
  margin-left: 2%;
}

.section-3-content{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 20%;
}

.vl-2{
  border-left: 1.5px solid #E7E8F0;
  height: 50px;
  margin-left: 1%;
  margin-right: 1%;
}

.content-1-text-1{
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #667085;
}

.content-1-text-2{
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #124DA8;
}

.bit-1{
  margin-right: 4%;
  margin-left: 2%;
  margin-top: 3%;
}

@media (max-width: 700px) {

  .section-3{
    display: flex;
    align-content: center;
    align-items: center;
    padding: 15px 25px;
    gap: 24px;
    width: 100%;
    height: 100%;
    margin-left: unset;
    margin-bottom: 2%;
  }

  .section-3-i{
    display: flex;
    align-content: center;
    align-items: center;
    padding: 15px 25px;
    gap: 24px;
    width: 100%;
    height: 100%;
    margin-left: unset;
  }

  .law{
    margin-right: 2%;
  }

  .content-1-text-1{
    font-size: 13px;
  }

  .content-1-text-2{
    font-size: 14px;
  }

}

@media (max-width: 500px) {
  .section-3{
    display: block;
    align-content: center;
    align-items: center;
    padding: 15px 25px;
    gap: 24px;
    width: 70%;
    height: 100%;
    margin-bottom: 3%;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
  }

  .section-3-i{
    display: block;
    align-content: center;
    align-items: center;
    padding: 15px 25px;
    gap: 24px;
    width: 70%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .vl-2{
    display: none;
  }

  .section-3-content{
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 10%;
  }

  .content-1-text-1{
    font-size: 16px;
    margin-bottom: 12%;
  }

  .content-1-text-2{
    font-size: 18px;
  }

  .content-2 img {
    width: 130%;
  }

}

</style>