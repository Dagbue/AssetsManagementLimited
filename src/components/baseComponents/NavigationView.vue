<template>
  <div v-if="!$route.meta.hideNavigation">
    <div class="topmost-header">
      <div class="topmost-header-1">
        <p class="topmost-header-text"><i class='bx bxs-map'></i> 71-75 Uxbridge Road, London, England, W5 5SL</p>
        <p class="topmost-header-text"><i class='bx bxs-time-five'></i> Mon – Sat: 9:00am–18:00pm</p>
        <p class="topmost-header-text"><i class='bx bxl-whatsapp-square'></i> +1 (510) 256-9690</p>
      </div>
    </div>
    <div class="separate">
      <div class="style-4">
        <img alt="company logo" src="@/assets/companylogo.png" class="logo" @click="home" />
        <ul class="menu-4" v-show="!mobile">
          <li class="link"><router-link to="/about" class="link-2">COMPANY PORTFOLIO</router-link></li>
          <li class="link"><router-link to="/pricing" class="link-2">INVESTMENT PLAN</router-link></li>
          <li class="link"><router-link to="/loan-plan" class="link-2">LOAN PLANS</router-link></li>
          <li class="link"><router-link to="/contact" class="link-2">CONTACT</router-link></li>
          <li class="link"><router-link to="/faq" class="link-2">F.A.Q</router-link></li>
          <li class="link"><router-link to="/register" class="auth">SIGNUP</router-link></li>
          <li class="link"><router-link to="/login" class="auth">LOGIN</router-link></li>
        </ul>
      </div>
      <div class="mobile">
        <ul class="dropdown-nav" v-show="mobileNav">
          <img alt="company logo" src="@/assets/companylogo.png" class="logo2" @click="home" />
          <li @click="navigate('/about')">Company Portfolio</li>
          <li @click="navigate('/pricing')">Investment Plan</li>
          <li @click="navigate('/loan-plan')">Loan Plans</li>
          <li @click="navigate('/contact')">Contact</li>
          <li @click="navigate('/faq')">F.A.Q</li>
          <li @click="navigate('/register')">SignUp</li>
          <li @click="navigate('/login')">LogIn</li>
        </ul>
        <i class='bx bx-menu' @click="toggleMobileNav" v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationView",
  data() {
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: 0,
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen(); // Initial check to set the screen size correctly
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreen); // Clean up the event listener
  },
  methods: {
    home() {
      this.$router.push('/');
      window.scrollTo(0, 0);
    },
    navigate(path) {
      this.$router.push(path);
      this.mobileNav = false; // Close the mobile nav after navigation
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      this.mobile = this.windowWidth <= 990;
      if (!this.mobile) {
        this.mobileNav = false; // Automatically close mobile navigation on window resize above 990px
      }
    }
  }
}
</script>


<style scoped>

.bx-menu{
  font-size: 30px;
  cursor: pointer;
  transition: .8s ease all;
  color: #FFFFFF;
}

.icon-active{
  transform: rotate(180deg);
}

.logo {
  width: 12%;
  /*margin-left: 8%;*/
  margin-top: 0.5%;
  margin-bottom: 0.5%;
}

.style-4 {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-left: 7%;
  margin-right: 3%;
}

.menu-4{

}


.link {
  display: inline-block;
  list-style: outside none none;
  margin: 0 1.2em;
  overflow: hidden;
  font-weight: bold;
  font-size: 13.5px;
}

.link-2:hover{
  border-bottom: 1px solid #5d78ff;
}

.auth{
  background-color: #5d78ff;
  border: 1px solid #5d78ff;
  color: #FFFFFF;
  padding: 0.6em 40px;
  border-radius: 5px;
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
}
/*.auth:hover{*/
/*  background-color: #D23535;*/
/*  border: 1px solid #D23535;*/
/*  color: #FFFFFF;*/
/*}*/


.link-2 {
  padding: 0.3em 0;
  color: #ffffff;
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
}


.topmost-header {
  background-color: #232323;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  display: flex;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.topmost-header-1 {
  display: flex;
  margin-left: 4%;
}

.topmost-header-text {
  font-size: 12px;
  padding-right: 28px;
  display: flex;
  align-items: center;
  align-content: center;
}
i{
  padding-right: 4px;
  font-size: 14px;
}

.dropdown-nav{
  display: flex;
  align-items: center;
  align-content: center;
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  max-width: 270px;
  height: 100%;
  background-color: #232323;
  font-size: 18px;
  text-align: left;
  padding-left: 40px;
}

.logo2{
  width: 100%;
}

.dropdown-nav li {
  /*margin-top: 12%;*/
  overflow: hidden;
  list-style: none;
  height: 100%;
  color: #FFFFFF;
}

.dropdown-nav * {
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.dropdown-nav a {
  padding: 0.3em 0;
  color: #FFFFFF;
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  margin: 0;
  text-decoration: none;
}

.dropdown-nav a:before,
.dropdown-nav a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.dropdown-nav a:before {
  bottom: 100%;
  display: block;
  height: 3px;
  width: 100%;
  content: "";
  background-color: #D23535;
}

.dropdown-nav a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #676767;
  white-space: nowrap;
}

.dropdown-nav li:hover a,
.dropdown-nav.current a {
  color: #D23535;
}

hr {
  color: white;
  width: 100%;
  background-color: white;
  border: 1px solid white;
  margin-top: 95px;
}

.copyright {
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  opacity: 0.75;
  color: white;
  margin-top: 20px;
}

/*.separate{*/
/*  display: flex;*/
/*}*/

.bxl-whatsapp-square{
  font-size: 17px;
}

@media (min-width: 1286px) {
  .hamburger {
    display: none;
  }
  /*.menu-4{*/
  /*  display: flex;*/
  /*}*/
}

@media (max-width: 990px) {
  .style-4 {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    margin-left: 2%;
    margin-top: 0.5%;
    margin-bottom: 0.5%;
  }
  .logo {
    width: 32%;
    margin-left: unset;
    padding-left: unset;
  }
  .logo2 {
    width: 60%;
    margin-top: 3%;
    margin-bottom: 10%;
  }
  .separate{
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
  }
}

@media (max-width: 861px) {
  .topmost-header {
    display: none;
  }
}

@media (max-width: 600px) {
  .bx-menu{
    font-size: 35px;
    margin-top: 6.5px;
  }
  .logo {
    min-width: 30%;
    margin-left: unset;
    padding-left: unset;
  }

  .dropdown-nav{
    padding-right: 10%;
    max-width: 220px;
    font-size: 15px;
  }

  .dropdown-nav li {
    margin-top: 8%;
  }

  hr {
    margin-top: 95%;
  }

  .logo2 {
    width: 80%;
    margin-top: 5%;
    margin-bottom: 10%;
  }

}

</style>