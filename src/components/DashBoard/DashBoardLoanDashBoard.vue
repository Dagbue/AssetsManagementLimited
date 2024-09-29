<template>
  <div>
    <h1 class="header">Loan Overview</h1>

    <div class="card-margin">
      <div class="card-holder">
        <div class="card-1">
          <div class="card-icon">
            <i class='bx bx-download'>&nbsp;</i>
          </div>
          <div class="card-content-margin">
            <p class="card-text">Requested</p>
            <p class="card-big-text">£ {{UserDetails.user.totalLoanRequested | formatAmount2}}</p>
<!--            <p class="card-big-text" v-show="approved === 'Pending'">£ {{items.loanDeposit}}</p>-->
          </div>
        </div>

        <div class="card-1">
          <div class="card-icon">
            <i class='bx bxs-wallet' >&nbsp;</i>
          </div>
          <div class="card-content-margin">
            <p class="card-text">Prepayment Fee</p>
            <p class="card-big-text">{{UserDetails.user.loanPrepaymentFee}}%</p>
<!--            <p class="card-big-text" v-show="approved === 'Pending'">£ {{items.prepaymentFee}}</p>-->
          </div>
        </div>

        <div class="card-1">
          <div class="card-icon">
            <i class='bx bxs-coin'>&nbsp;</i>
          </div>
          <div class="card-content-margin">
            <p class="card-text">Loan Status</p>
            <p class="card-big-text" >{{UserDetails.user.loanStatus | titleCase}}</p>
<!--            <p class="card-big-text" v-show="approved === 'Pending'">{{items.statusLoan}}</p>-->
          </div>
        </div>

        <div class="card-1">
          <div class="card-icon">
            <i class='bx bxs-envelope-open' >&nbsp;</i>
          </div>
          <div class="card-content-margin">
            <p class="card-text">Loan Plan</p>
            <p class="card-big-text">{{UserDetails.user.loanPlan | titleCase}}</p>
<!--            <p class="card-big-text" v-show="approved === 'Pending'">{{items.loanPlan}}</p>-->
          </div>
        </div>
      </div>
    </div>

<!--    <div class="bit-chart">-->
<!--      <div style="height:560px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F;padding:1px;padding: 0px; margin: 0px; width: 100%;"><div style="height:540px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=859&pref_coin_id=1505" width="100%" height="536px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;line-height:14px;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;by AML</div></div>-->
<!--    </div>-->

    <stock-table/>

<!--    <div class="bit-chart">-->

<!--      <qc-heatmap height="400px" num-of-coins="50" currency-code="USD"></qc-heatmap>-->

<!--    </div>-->
<!--    <br>-->
<!--    <br>-->
<!--    <div class="bit-chart">-->

<!--      <div style="height:787px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F; padding: 0px; margin: 0px; width: 100%;"><div style="height:767px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=12&pref_coin_id=1505&graph=yes" width="100%" height="763px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;by by Crypto Investment Limited</div></div>-->

<!--    </div>-->
  </div>
</template>

<script>
import StockTable from "@/components/baseComponents/tables/StockTable.vue";
import StoreUtils from "@/utility/StoreUtils";
import {mapState} from "vuex";

export default {
  name: "DashBoardLoanDashBoard",
  components: {StockTable},
  data () {
    return {
      userId: "",
      userInfo: "",
    }
  },
  computed:{
    UserInfo() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getUserInfo)
    },
    UserDetails() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    },
    ...mapState({
      loading: state => state.auth.loading,
      auth: state => state.auth,
    }),
  },

  methods: {

  },

  beforeMount() {
    this.generateRandomString()

    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)

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

.card-margin {
  margin: 22px 50px 70px 50px;
}
.card-1 {
  display: flex;
  padding-left: 20px;
  padding-top: 30px;
  padding-bottom: 15px;
  width: 30%;
  margin-right: 15px;
}

.card-holder {
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
}


.card-content-margin {
  margin-left: 15px;
}

.card-text {
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
  margin-bottom: 20px;
}

.card-big-text {
  font-size: 22px;
  line-height: 5px;
  color: #ffffff;
  padding-bottom: 10px;
}


.card-1 {
  border: solid 0.5px #626B7F;
  border-radius: 5px;
}

.bx-download{
  color: #ffad46;
  font-size: 35px;
}
.bx-recycle{
  color: mediumvioletred;
  font-size: 35px;
}
.bxs-wallet{
  color: #1e6cd9;
  font-size: 35px;
}
.bxs-coin-stack{
  color: #31ce36;
  font-size: 35px;
}
.bxs-coin{
  color: #f25961;
  font-size: 35px;
}
.bx-mail-send{
  color: yellow;
  font-size: 35px;
}
.bxs-gift{
  color: #1e6cd9;
  font-size: 35px;
}
.bxs-envelope-open{
  color: orangered;
  font-size: 35px;
}

.bit-chart{
  margin-top: 0.5%;
  padding-left: 1%;
  padding-right: 1%;
}

.header{
  font-size: 24px;
  margin-top: 4%;

  padding-left: 8%;
  color: #ffffff;
}
.sub-header{
  font-size: 19px;

  padding-left: 6%;
  color: #071333;
}

span{
  /*text-transform: uppercase;*/
  font-size: 20px;
}
p{
  font-size: 20px;

}

.global{
  color: #124DA8;
  font-weight: 700;
  letter-spacing: 1px;

}

@media only screen and (max-width: 912px) {
  .card-holder {
    display: block;
  }
  .card-1 {
    width: 100%;
    margin-bottom: 20px;
  }
  .card-margin {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 0;
  }
}
@media (max-width: 990px) {
  .value-alpha{
    display: block;
    margin-bottom: unset;
    margin-left: unset;
  }
  .value{
    position: relative;
    padding: 25px;
    margin-left: 25%;
    margin-right: 25%;
    margin-bottom: 20px;
    margin-top: unset;
    text-align: center;
  }
  .value-1{
    padding-bottom: unset;
  }
  .logo-text{
    display: block;
  }

  .separator .line {
    width: unset;
  }
  h1{
    text-align: center;
  }
  p{
    text-align: center;
  }
  .amount{
    padding-top: unset;
    font-size: 25px;
  }
  .amount-1{
    padding-top: unset;
    font-size: 25px;
  }
  .bx{
    font-size: 35px;
  }
}
@media (max-width: 550px) {
  .header{
    font-size: 20px;
    margin-top: 2%;
  }
  .sub-header{
    font-size: 16px;
  }
  .value{
    position: relative;
    padding: 25px;
    margin-left: unset;
    margin-right: unset;
    margin-bottom: 20px;
    margin-top: unset;
    text-align: center;
  }
  qc-grid-widget{
    width: 385px;
  }

  .bit-chart{
    margin-top: 0.5%;
    padding-left: unset;
    padding-right: 3%;
  }

}

</style>