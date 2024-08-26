import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import(/* webpackChunkName: "pricing" */ '../views/Pricing.vue')
  },
  {
    path: '/loan-plan',
    name: 'LoanPlan',
    component: () => import(/* webpackChunkName: "pricing" */ '../views/LoanPlan.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "faq" */ '../views/Faq.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Auth/Login/Login.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/login-success',
    name: 'loginSuccess',
    component: () => import(/* webpackChunkName: "login" */ '../views/Auth/Login/LoginSuccess.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: () => import(/* webpackChunkName: "forgotPassword" */ '../views/Auth/Login/ForgotPassword.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/forgot-password-otp',
    name: 'forgotPasswordOtp',
    component: () => import(/* webpackChunkName: "forgotPasswordOtp" */ '../views/Auth/Login/ForgotPasswordOtp.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/new-password',
    name: 'newPassword',
    component: () => import(/* webpackChunkName: "newPassword" */ '../views/Auth/Login/NewPassword.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Auth/Register/Register.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/email-auth',
    name: 'emailAuth',
    component: () => import(/* webpackChunkName: "emailAuth" */ '../views/Auth/Register/EmailAuth.vue'),
    meta: { hideNavigation: true }
  },



  {
    path: '/dashboard-side-bar',
    name: 'dashboardSideBar',
    component: () => import(/* webpackChunkName: "dashboardSideBar" */ "@/views/DashBoard/DashBoardSideBar.vue"),
    meta: {hideNavigation: true},
    redirect: {name: 'overView'},
    children: [
      {path: '/over-view',
        name: 'overView',
        component: () => import(/* webpackChunkName: "overView" */ "@/views/DashBoard/OverView.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: '/transactions',
        name: 'transactions',
        component: () => import(/* webpackChunkName: "transactions" */ "@/views/DashBoard/Transactions.vue"),
        meta: {hideNavigation: true},
        redirect: {name: 'depositTransactions'},
        children: [
          {
            path: "/deposit-transactions",
            name: "depositTransactions",
            component: () => import(/* webpackChunkName: "depositTransactions" */ "@/views/DashBoard/DepositTransactions.vue"),
            meta: {hideNavigation: true}
          },
          {
            path: "/withdrawal-transactions",
            name: "withdrawalTransactions",
            component: () => import(/* webpackChunkName: "withdrawalTransactions" */ "@/views/DashBoard/WithdrawalTransactions.vue"),
            meta: {hideNavigation: true}
          },
        ]
      },
      {
        path: '/trade-over-view',
        name: 'tradeOverview',
        component: () => import(/* webpackChunkName: "fundWallet" */ '@/views/DashBoard/TradeOverview.vue'),
        meta: {hideNavigation: true}
      },
      {
        path: '/trading-bot-view',
        name: 'TradingBotView',
        component: () => import(/* webpackChunkName: "fundWallet" */ '@/views/DashBoard/TradingBotView.vue'),
        meta: {hideNavigation: true}
      },
      {
        path: '/copy-experts',
        name: 'CopyExperts',
        component: () => import(/* webpackChunkName: "fundWallet" */ '@/views/DashBoard/CopyExperts.vue'),
        meta: {hideNavigation: true}
      },
      {
        path: '/fund-wallet',
        name: 'fundWallet',
        component: () => import(/* webpackChunkName: "fundWallet" */ '@/views/DashBoard/FundWallet.vue'),
        meta: {hideNavigation: true}
      },
      {
        path: '/withdrawal',
        name: 'withdrawal',
        component: () => import(/* webpackChunkName: "withdrawal" */ '@/views/DashBoard/Withdrawal.vue'),
        meta: {hideNavigation: true}
      },
      {
        path: '/loan',
        name: 'loan',
        component: () => import(/* webpackChunkName: "loan" */ '@/views/DashBoard/Loan.vue'),
        meta: {hideNavigation: true}
      },
      {
        path: '/loan-dashboard',
        name: 'LoanDashBoard',
        component: () => import(/* webpackChunkName: "LoanDashBoard" */ '@/views/DashBoard/LoanDashBoard.vue'),
        meta: {hideNavigation: true}
      },
      {
        path: '/packages',
        name: 'Packages',
        component: () => import(/* webpackChunkName: "Packages" */ '@/views/DashBoard/Packages.vue'),
        meta: {hideNavigation: true}
      },
      {
        path: '/settings',
        name: 'settings',
        component: () => import(/* webpackChunkName: "settings" */ '@/views/DashBoard/Settings.vue'),
        meta: {hideNavigation: true},
        redirect: {name: 'updateAccount'},
        children: [
          {
            path: "/change-password",
            name: "changePassword",
            component: () => import(/* webpackChunkName: "changePassword" */ "@/views/DashBoard/ChangePassword.vue"),
            meta: {hideNavigation: true}
          },
          {
            path: "/update-account",
            name: "updateAccount",
            component: () => import(/* webpackChunkName: "updateAccount" */ "@/views/DashBoard/UpdateAccount.vue"),
            meta: {hideNavigation: true}
          },
          {
            path: "/preferences",
            name: "Preferences",
            component: () => import(/* webpackChunkName: "Preferences" */ "@/views/DashBoard/Preferences.vue"),
            meta: {hideNavigation: true}
          },
          {
            path: "/upload-display-picture",
            name: "uploadDisplayPicture",
            component: () => import(/* webpackChunkName: "uploadDisplayPicture" */ "@/views/DashBoard/UploadDisplayPicture.vue"),
            meta: {hideNavigation: true}
          },
          {
            path: "/link-Wallet-Address",
            name: "linkWalletAddress",
            component: () => import(/* webpackChunkName: "linkWalletAddress" */ "@/views/DashBoard/LinkWalletAddress.vue"),
            meta: {hideNavigation: true}
          },
          {
            path: "/setup2FA",
            name: "setup2FA",
            component: () => import(/* webpackChunkName: "setup2FA" */ "@/views/DashBoard/Setup2FA.vue"),
            meta: {hideNavigation: true}
          },
        ]
      },
    ]
  },

  {
    path: '/admin',
    name: 'dashBoardAdminLogin',
    component: () => import(/* webpackChunkName: "dashBoardAdminLogin" */ "../views/Admin/DashBoardAdminLogin.vue"),
    meta: {hideNavigation: true}
  },
  {
    path: '/dashBoard-side-bar-admin',
    name: 'dashBoardSideBarAdmin',
    component: () => import(/* webpackChunkName: "dashBoardSideBarAdmin" */ "../views/Admin/DashBoardSideBarAdmin.vue"),
    meta: {hideNavigation: true},
    redirect: {name: 'listOfUsers'},
    children: [
      {
        path: "/list-of-users",
        name: "listOfUsers",
        component: () => import(/* webpackChunkName: "listOfUsers" */ "../views/Admin/ListOfUsers.vue"),
        meta: {hideNavigation: true}
      },
      {
        path: "/list-of-users-update",
        name: "listOfUsersUpdate",
        component: () => import(/* webpackChunkName: "listOfUsersUpdate" */ "../views/Admin/ListOfUsersUpdate.vue"),
        meta: {hideNavigation: true}
      },
      {
        path: "/investments-list",
        name: "investmentsList",
        component: () => import(/* webpackChunkName: "investmentsList" */ "../views/Admin/InvestmentsList.vue"),
        meta: {hideNavigation: true}
      },
      {
        path: "/deposit-requests",
        name: "depositRequests",
        component: () => import(/* webpackChunkName: "depositRequests" */ "../views/Admin/DepositRequests.vue"),
        meta: {hideNavigation: true}
      },
      {
        path: "/withdrawal-requests",
        name: "withdrawalRequests",
        component: () => import(/* webpackChunkName: "withdrawalRequests" */ "../views/Admin/WithdrawalRequests.vue"),
        meta: {hideNavigation: true}
      },
      {
        path: "/change-password-admin",
        name: "changePasswordAdmin",
        component: () => import(/* webpackChunkName: "ChangePasswordAdmin" */ "../views/Admin/ChangePasswordAdmin.vue"),
        meta: {hideNavigation: true}
      },
      {
        path: "/trade-request-admin",
        name: "tradeRequestAdmin",
        component: () => import(/* webpackChunkName: "tradeRequestAdmin" */ "../views/Admin/TradeRequestAdmin.vue"),
        meta: {hideNavigation: true}
      },
      {
        path: "/trade-request-admin-update",
        name: "tradeRequestAdminUpdate",
        component: () => import(/* webpackChunkName: "tradeRequestAdmin" */ "../views/Admin/TradeRequestsAdminUpdate.vue"),
        meta: {hideNavigation: true}
      },
      {
        path: "/loan-request-admin",
        name: "loanRequestAdmin",
        component: () => import(/* webpackChunkName: "tradeRequestAdmin" */ "../views/Admin/LoanRequestAdmin.vue"),
        meta: {hideNavigation: true}
      },
      {
        path: "/trade-request-admin-update",
        name: "tradeRequestAdminUpdate",
        component: () => import(/* webpackChunkName: "tradeRequestAdminUpdate" */ "../views/Admin/TradeRequestAdmin.vue"),
        meta: {hideNavigation: true}
      },
      {
        path: "/add-new-user",
        name: "addNewUser",
        component: () => import(/* webpackChunkName: "addNewUser" */ "../views/Admin/AddNewUser.vue"),
        meta: {hideNavigation: true}
      },

      {
        path: "/add-copy-experts",
        name: "addCopyExperts",
        component: () => import(/* webpackChunkName: "addCopyExperts" */ "../views/Admin/AddCopyExperts.vue"),
        meta: {hideNavigation: true}
      },

      {
        path: "/add-trading-bot",
        name: "addTradingBot",
        component: () => import(/* webpackChunkName: "addTradingBot" */  "../views/Admin/AddTradingBot.vue"),
        meta: {hideNavigation: true}
      },

      {
        path: "/payment-details",
        name: "paymentDetails",
        component: () => import(/* webpackChunkName: "paymentDetails" */ "../views/Admin/PaymentDetails.vue"),
        meta: {hideNavigation: true}
      },
      {
        path: "/uploaded-ID",
        name: "uploadedID",
        component: () => import(/* webpackChunkName: "uploadedID" */ "../views/Admin/UploadedID.vue"),
        meta: {hideNavigation: true}
      },
      {
        path: "/add-trade",
        name: "AddTrade",
        component: () => import(/* webpackChunkName: "AddTrade" */ "../views/Admin/AddTrade.vue"),
        meta: {hideNavigation: true}
      },
      {
        path: "/make-deposit",
        name: "MakeDepositAdmin",
        component: () => import(/* webpackChunkName: "AddTrade" */ "../views/Admin/MakeDepositAdmin.vue"),
        meta: {hideNavigation: true}
      },
      {
        path: "/deposit-update",
        name: "DepositUpdate",
        component: () => import(/* webpackChunkName: "listOfUsersUpdate" */ "../views/Admin/DepositUpdate.vue"),
        meta: {hideNavigation: true}
      },
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
