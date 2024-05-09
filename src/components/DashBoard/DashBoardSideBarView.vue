<template >
  <div class="outer">

    <div  class="sidebar" v-show="!mobile">

      <div class="logo">
        <img src="@/assets/companylogo.png" alt="logo" class="afo-logo" />
      </div>

      <ul class="nav-list" >

        <router-link to="/over-view">
          <li>
            <a class="hover">
              <img src="@/assets/dashboardlogo.svg" alt="logo" class="link-img" />
              <span class="links-name">Dashboard</span>
            </a>
          </li>
        </router-link>

        <router-link to="/trade-over-view">
          <li>
            <a class="hover">
              <img src="../../assets/walletmana.svg" alt="logo" class="link-img" />
              <span class="links-name wallets">Trade Overview</span>
            </a>
          </li>
        </router-link>

        <router-link to="/transactions">
          <li>
            <a class="hover">
              <img src="@/assets/send.svg" alt="logo" class="link-img" />
              <span class="links-name">Transactions</span>
            </a>
          </li>
        </router-link>

        <router-link to="/fund-wallet">
          <li>
            <a class="hover">
              <img src="../../assets/coin-stack.svg" alt="logo" class="link-img" />
              <span class="links-name">Fund Wallet</span>
            </a>
          </li>
        </router-link>

        <router-link to="/withdrawal">
          <li>
            <a class="hover">
              <img src="../../assets/coin-stack.svg" alt="logo" class="link-img" />
              <span class="links-name">Withdrawal</span>
            </a>
          </li>
        </router-link>

        <router-link to="/loan">
          <li>
            <a class="hover">
              <img src="../../assets/walletmana.svg" alt="logo" class="link-img" />
              <span class="links-name">Loan Request</span>
            </a>
          </li>
        </router-link>

        <router-link to="/loan-dashboard">
          <li>
            <a class="hover">
              <img src="../../assets/dashboardlogo.svg" alt="logo" class="link-img" />
              <span class="links-name">Loan DashBoard</span>
            </a>
          </li>
        </router-link>

        <router-link to="/copy-experts">
          <li>
            <a class="hover">
              <img src="../../assets/dashboardlogo.svg" alt="logo" class="link-img" />
              <span class="links-name">Copy Experts</span>
            </a>
          </li>
        </router-link>

        <router-link to="/trading-bot-view">
          <li>
            <a class="hover">
              <img src="../../assets/dashboardlogo.svg" alt="logo" class="link-img" />
              <span class="links-name">Trading Bot</span>
            </a>
          </li>
        </router-link>

        <router-link to="/packages">
          <li>
            <a class="hover">
              <img src="../../assets/pie-chart.svg" alt="logo" class="link-img" />
              <span class="links-name">Packages</span>
            </a>
          </li>
        </router-link>

        <router-link to="/settings">
          <li>
            <a class="hover">
              <img src="../../assets/settings.svg" alt="logo" class="link-img" />
              <span class="links-name">Settings</span>
            </a>
          </li>
        </router-link>


          <li @click="handleClick">
            <a class="hover">
              <img  src="@/assets/log-out.svg" alt="Notification"/>&nbsp;&nbsp;
              <span class="links-name">Logout</span>
            </a>
          </li>


      </ul>

    </div>

    <div class="dropdown-nav-2" v-show="mobileNav" >

<!--      <div class="icon-2">-->
<!--        <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>-->
<!--      </div>-->

<!--      <div class="logo">-->
<!--        <img src="@/assets/companylogo.png" alt="logo" style="margin-left: 22px;" class="afo-logo" />-->
<!--      </div>-->

      <ul>
        <li @click="toggleMobileNav2">
          <a>
            <img src="@/assets/dashboardlogo.svg" alt="logo" class="link-img" />
            <router-link to="/over-view" class="">DashBoard</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <img src="../../assets/walletmana.svg" alt="logo" class="link-img" />
            <router-link style="font-size: 13px;" to="/trade-over-view" class="">Trade Overview</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <i class='bx bx-support' ></i>
            <router-link to="/transactions" class="">Transactions</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <img src="../../assets/coin-stack.svg" alt="logo" class="link-img" />
            <router-link to="/fund-wallet" class="">Fund Wallet</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <img src="../../assets/coin-stack.svg" alt="logo" class="link-img" />
            <router-link to="/withdrawal" class="">Withdrawal</router-link>
          </a>
        </li>


          <li @click="toggleMobileNav2">
            <a>
              <img src="../../assets/walletmana.svg" alt="logo" class="link-img" />
              <router-link to="/loan" style="font-size: 12px;" class="">Loan Request</router-link>
            </a>
          </li>


          <li @click="toggleMobileNav2">
            <a>
              <img src="../../assets/dashboardlogo.svg" alt="logo" class="link-img" />
              <router-link to="/loan-dashboard" style="font-size: 12px;" class="">Loan DashBoard</router-link>
            </a>
          </li>


          <li @click="toggleMobileNav2">
            <a>
              <img src="../../assets/dashboardlogo.svg" alt="logo" class="link-img" />
              <router-link to="/copy-experts" style="font-size: 12px;" class="">Copy Experts</router-link>
            </a>
          </li>


          <li @click="toggleMobileNav2">
            <a>
              <img src="../../assets/dashboardlogo.svg" alt="logo" class="link-img" />
              <router-link to="/trading-bot-view" class="">Trading Bot</router-link>
            </a>
          </li>


        <li @click="toggleMobileNav2">
          <a>
            <img src="@/assets/pie-chart.svg" alt="logo" class="link-img" />
            <router-link to="/packages" class="">Packages</router-link>
          </a>
        </li>
        <li @click="toggleMobileNav2">
          <a>
            <img src="../../assets/virtacc.svg" alt="logo" class="link-img" />
            <router-link to="/settings" class="">Settings</router-link>
          </a>
        </li>

        <li @click="handleClick">
          <a >
            <img  src="@/assets/log-out.svg" alt="Notification"/>&nbsp;&nbsp;
            <span class="links-name">Logout</span>
          </a>
        </li>
      </ul>


    </div>

    <dash-content @customEvent="parentFunction">
      <router-view v-slot="{ Component, route }">
        <transition name="route" mode="out-in">
          <div :key="route.name">
            <div class="icon">
              <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
            </div>
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </dash-content>


  </div>
</template>

<script>
import DashContent from "@/components/baseComponents/dash/DashContent.vue";
import router from "@/router";

export default {
  name: "DashBoardSideBarView",
  components: {DashContent},
  data()  {
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: window.innerWidth, // Initialize directly with the window's innerWidth
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen(); // Check the screen size immediately on component creation
  },
  beforeDestroy() { // Use `beforeDestroy` instead of `unmounted` for Vue 2
    window.removeEventListener('resize', this.checkScreen); // Cleanup the event listener
  },
  methods: {
    async handleClick() {
      await localStorage.clear();
      await router.push('/login')
    },
    // This method is triggered when the customEvent is received
    parentFunction() {
      console.log("Event received in parent with payload:");
      // Additional logic here
      this.toggleMobileNav();
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleMobileNav2() {
      this.mobileNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 990) {
        this.mobile = true;
      } else {
        this.mobile = false;
        this.mobileNav = false;
      }
    }
  },
}

</script>

<style scoped>
.outer{
  display: flex;
}
.afo-logo{
  width: 70%;
}
.afo-logo-2{
  width: 80%;
  background-color: #FFFFFF;
  padding: 10px 20px 10px 8px;
  border-radius: 4px;
  margin-left: 10%;
}
body{
  position: relative;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
}
.logo{
  display: flex;
  margin: 13% auto;
}

.sidebar{
  top: 0;
  left: 0;
  height: 100vh;
  width: 235px;
  background-color: #0f171c;
  border-right: 1px solid #000;
  padding: 6px 20px 37px;
}
.sidebar ul li{
  position: relative;
  height: 47.5px;
  width: 100%;
  margin: 2px 2px;
  list-style: none;
}
.sidebar ul li a{
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  border-radius: 12px;
  font-size: 16px;
}
.hover:hover{
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(3.5px);
  padding: 8px;
  border-radius: 4px;
}
.link-img{
  margin-right: 5%;
  width: 12%;
}
.links-name{
  font-size: 16px;
  color: #ffffff;
}
.wallets{
  font-size: 15.5px;
}
.feature-card-1 p {
  font-size: 17px;
}
.feature-card-2 p{
  font-size: 17px;
  background: rgba(255, 255, 255, 0.1);
  border: 0.5px solid rgba(255, 255, 255, 0.13);
  border-radius: 3px;
  padding: 2.5px 8px;
  margin-right: 8px;
}
.feature-card-3 img{
  margin-right: 7px;
}
.feature-card-3 p{
  padding-top: 2px;
}
.logout span{
  font-size: 16px;
  padding-top: 10.5px;
  padding-right: 2%;
}
.icon {
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
  padding-top: 15px;
  color: #FFFFFF;
}
.icon i {
  cursor: pointer;
  font-size: 30px;
  transition: 0.8s ease all;
}
.icon-active {
  transform: rotate(360deg);
}
.logout span{
  font-size: 16px;
  padding-top: 10.5px;
  padding-right: 10px;
}
.icon {
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
  color: #ffffff;
  padding-top: 15px;
}
.icon i {
  cursor: pointer;
  font-size: 30px;
  transition: 0.8s ease all;
}
.icon-active {
  transform: rotate(360deg);
}
.links-name-separate span{
  margin-bottom: 0;
  padding-bottom: 0;
  padding-top: 0;
  margin-top: 0;
}
.dropdown-nav-2{
  display: flex;
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  /*padding-right: 7%;*/
  height: 100vh;
  width: 240px;
  /*height: 100%;*/
  background-color: #0f171c;
  font-size: 16px;
  text-align: center;
  padding-top: 5%;
}
.dropdown-nav-2 li {
  overflow: hidden;
  list-style: none;
  font-weight: bold;
  font-size: 16px;
}
.dropdown-nav-2 ul {
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.dropdown-nav-2 a {
  padding: 0.55em 0;
  color: #ffffff;
  position: relative;
  display: flex;
  align-items: center;
  align-content: center;
  /*letter-spacing: 1px;*/
  margin: 0;
  text-decoration: none;
}
.dropdown-nav-2 a:before,
.dropdown-nav-2 a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.dropdown-nav-2 a:after {
  /*padding: 0.3em 0;*/
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #676767;
  white-space: nowrap;
}
.dropdown-nav-2 li:hover a,
.dropdown-nav-2.current a {
  color: #ffffff;
}
.bx-menu{
  font-size: 38px;
  cursor: pointer;
  transition: .8s ease all;
  color: #ffffff;
}
.icon-active{
  transform: rotate(180deg);
}


@media (max-width: 990px) {
  i{
    font-size: 20px;
    padding-right: 5px;
  }
  .icon{
    overflow-y: unset;
  }

}
@media (max-width: 700px) {
  .dropdown-nav-2{
    padding-right: unset;
    max-width: 210px;
    font-size: 15px;
  }
  .logo{
    display: flex;
    margin: 5% auto;
  }
  .dropdown-nav-2 ul {
    padding-top: unset;
  }

}
</style>

