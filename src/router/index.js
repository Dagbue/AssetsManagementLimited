import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
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
    path: '/market-view',
    name: 'marketView',
    component: () => import(/* webpackChunkName: "marketView" */ '../views/MarketView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Auth/Login/Login.vue'),
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
    component: () => import(/* webpackChunkName: "dashboardSideBar" */ '../views/DashBoard/DashBoardSideBar.vue'),
    meta: { hideNavigation: true },
    redirect: { name: 'overView' },
    children: [
      {
        path: '/over-view',
        name: 'overView',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/OverView.vue'),
        meta: { hideNavigation: true }
      },
      {
        path: '/transactions',
        name: 'transactions',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/Transactions.vue'),
        meta: { hideNavigation: true }
      },
      {
        path: '/wallets-management',
        name: 'walletsManagement',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/WalletsManagement.vue'),
        meta: { hideNavigation: true }
      },
      {
        path: '/fund-wallet',
        name: 'fundWallet',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/FundWallet.vue'),
        meta: { hideNavigation: true },
      },
      {
        path: '/withdrawal',
        name: 'withdrawal',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/Withdrawal.vue'),
        meta: { hideNavigation: true },
      },
      {
        path: '/subscription-trade',
        name: 'subscriptionTrade',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/SubscriptionTrade.vue'),
        meta: { hideNavigation: true },
      },
      {
        path: '/refer-users',
        name: 'referUsers',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/ReferUsers.vue'),
        meta: { hideNavigation: true },
      },

      {
        path: '/loan',
        name: 'loan',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/Loan.vue'),
        meta: { hideNavigation: true },
      },

      {
        path: '/loan-dashboard',
        name: 'LoanDashBoard',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/LoanDashBoard.vue'),
        meta: { hideNavigation: true },
      },

      {
        path: '/packages',
        name: 'Packages',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/Packages.vue'),
        meta: { hideNavigation: true },
      },

      {
        path: '/settings',
        name: 'settings',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/Settings.vue'),
        meta: { hideNavigation: true },
        redirect: { name: 'changePassword' },
        children: [
          {
            path: "/change-password",
            name: "changePassword",
            component: () =>
                import(/* webpackChunkName: "ChangePassword" */ "../views/DashBoard/ChangePassword.vue"),
            meta: { hideNavigation: true },
          },
          {
            path: "/update-account",
            name: "updateAccount",
            component: () =>
                import(/* webpackChunkName: "UpdateAccount" */ "../views/DashBoard/UpdateAccount.vue"),
            meta: { hideNavigation: true },
          },
        ]
      },
    ]
  },

  {
    path: '/dash-board-selector',
    name: 'dashBoardSelector',
    component: () => import(/* webpackChunkName: "emailAuth" */ '../views/DashBoardDemo/DashBoardSelector.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/dashboard-side-bar-demo',
    name: 'dashboardSideBarDemo',
    component: () => import(/* webpackChunkName: "dashboardSideBarDemo" */ '../views/DashBoardDemo/DashBoardSideBarDemo.vue'),
    meta: { hideNavigation: true },
    redirect: { name: 'overViewDemo' },
    children: [
      {
        path: '/over-view-demo',
        name: 'overViewDemo',
        component: () => import(/* webpackChunkName: "overViewDemo" */ '../views/DashBoardDemo/OverViewDemo.vue'),
        meta: { hideNavigation: true }
      },

      {
        path: '/wallets-management-demo',
        name: 'walletsManagementDemo',
        component: () => import(/* webpackChunkName: "walletsManagementDemo" */ '../views/DashBoardDemo/WalletsManagementDemo.vue'),
        meta: { hideNavigation: true }
      },

      {
        path: '/transactions-demo',
        name: 'transactionsDemo',
        component: () => import(/* webpackChunkName: "transactionsDemo" */ '../views/DashBoardDemo/TransactionsDemo.vue'),
        meta: { hideNavigation: true }
      },

      {
        path: '/fund-wallet-demo',
        name: 'fundWalletDemo',
        component: () => import(/* webpackChunkName: "fundWalletDemo" */ '../views/DashBoardDemo/FundWalletDemo.vue'),
        meta: { hideNavigation: true }
      },

      {
        path: '/withdrawal-demo',
        name: 'withdrawalDemo',
        component: () => import(/* webpackChunkName: "withdrawalDemo" */ '../views/DashBoardDemo/WithdrawalDemo.vue'),
        meta: { hideNavigation: true }
      },

      {
        path: '/subscription-trade-demo',
        name: 'SubscriptionTradeDemo',
        component: () => import(/* webpackChunkName: "SubscriptionTradeDemo" */ '../views/DashBoardDemo/SubscriptionTradeDemo.vue'),
        meta: { hideNavigation: true }
      },

      {
        path: '/refer-users-demo',
        name: 'ReferUsersDemo',
        component: () => import(/* webpackChunkName: "ReferUsersDemo" */ '../views/DashBoardDemo/ReferUsersDemo.vue'),
        meta: { hideNavigation: true }
      },

      {
        path: '/loan-demo',
        name: 'loanDemo',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoardDemo/LoanDemo.vue'),
        meta: { hideNavigation: true },
      },

      {
        path: '/loan-dashboard-demo',
        name: 'LoanDashBoardDemo',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoardDemo/LoanDashBoardDemo.vue'),
        meta: { hideNavigation: true },
      },

      {
        path: '/packages-demo',
        name: 'PackagesDemo',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoardDemo/PackagesDemo.vue'),
        meta: { hideNavigation: true },
      },


      {
        path: '/settings-demo',
        name: 'SettingsDemo',
        component: () => import(/* webpackChunkName: "settingsDemo" */ '../views/DashBoardDemo/SettingsDemo.vue'),
        meta: { hideNavigation: true },
        redirect: { name: 'changePasswordDemo' },
        children: [
          {
            path: "/change-password-demo",
            name: "changePasswordDemo",
            component: () =>
                import(/* webpackChunkName: "changePasswordDemo" */ "../views/DashBoardDemo/ChangePasswordDemo.vue"),
            meta: { hideNavigation: true },
          },
          {
            path: "/update-account-demo",
            name: "UpdateAccountDemo",
            component: () =>
                import(/* webpackChunkName: "updateAccountDemo" */ "../views/DashBoardDemo/UpdateAccountDemo.vue"),
            meta: { hideNavigation: true },
          },
        ]
      },

    ]
  },


  {
    path: '/admin',
    name: 'dashBoardAdminLogin',
    component: () => import(/* webpackChunkName: "dashBoardAdminLogin" */ '../views/Admin/DashBoardAdminLogin.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/dashBoard-side-bar-admin',
    name: 'dashBoardSideBarAdmin',
    component: () => import(/* webpackChunkName: "dashBoardSideBarAdmin" */ '../views/Admin/DashBoardSideBarAdmin.vue'),
    meta: { hideNavigation: true },
    redirect: { name: 'listOfUsers' },
    children: [
      {
        path: "/list-of-users",
        name: "listOfUsers",
        component: () =>
            import(/* webpackChunkName: "listOfUsers" */ "../views/Admin/ListOfUsers.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/investments-list",
        name: "investmentsList",
        component: () =>
            import(/* webpackChunkName: "investmentsList" */ "../views/Admin/InvestmentsList.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/deposit-requests",
        name: "depositRequests",
        component: () =>
            import(/* webpackChunkName: "depositRequests" */ "../views/Admin/DepositRequests.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/withdrawal-requests",
        name: "withdrawalRequests",
        component: () =>
            import(/* webpackChunkName: "withdrawalRequests" */ "../views/Admin/WithdrawalRequests.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/loan-requests",
        name: "loanRequest",
        component: () =>
            import(/* webpackChunkName: "loanRequest" */ "../views/Admin/LoanRequest.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/edit-loan",
        name: "editLoan",
        component: () =>
            import(/* webpackChunkName: "withdrawalRequests" */ "../views/Admin/EditLoan.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/edit-investments",
        name: "EditInvestments",
        component: () =>
            import(/* webpackChunkName: "withdrawalRequests" */ "../views/Admin/EditInvestments.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/user-information",
        name: "userInformation",
        component: () =>
            import(/* webpackChunkName: "userInformation" */ "../views/Admin/UserInformation.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/user-dashBoard-view",
        name: "userDashBoardView",
        component: () =>
            import(/* webpackChunkName: "UserDashBoardView" */ "../views/Admin/UserDashBoardView.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/change-password-admin",
        name: "changePasswordAdmin",
        component: () =>
            import(/* webpackChunkName: "ChangePasswordAdmin" */ "../views/Admin/ChangePasswordAdmin.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/add-new-user",
        name: "addNewUser",
        component: () =>
            import(/* webpackChunkName: "ChangePasswordAdmin" */ "../views/Admin/AddNewUser.vue"),
        meta: { hideNavigation: true }
      },
    ]
  },


  {
    path: '/admin-demo',
    name: 'DashBoardAdminLoginDemo',
    component: () => import(/* webpackChunkName: "DashBoardAdminLoginDemo" */ '../views/AdminDemo/DashBoardAdminLoginDemo.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/dashBoard-side-bar-admin-demo',
    name: 'DashBoardSideBarAdminDemo',
    component: () => import(/* webpackChunkName: "DashBoardSideBarAdminDemo" */ '../views/AdminDemo/DashBoardSideBarAdminDemo.vue'),
    meta: { hideNavigation: true },
    redirect: { name: 'ListOfUsersDemo' },
    children: [
      {
        path: "/list-of-users-demo",
        name: "ListOfUsersDemo",
        component: () =>
            import(/* webpackChunkName: "ListOfUsersDemo" */ "../views/AdminDemo/ListOfUsersDemo.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/investments-list-demo",
        name: "InvestmentsListDemo",
        component: () =>
            import(/* webpackChunkName: "InvestmentsListDemo" */ "../views/AdminDemo/InvestmentsListDemo.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/deposit-requests-demo",
        name: "DepositRequestsDemo",
        component: () =>
            import(/* webpackChunkName: "DepositRequestsDemo" */ "../views/AdminDemo/DepositRequestsDemo.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/withdrawal-requests-demo",
        name: "WithdrawalRequestsDemo",
        component: () =>
            import(/* webpackChunkName: "WithdrawalRequestsDemo" */ "../views/AdminDemo/WithdrawalRequestsDemo.vue"),
        meta: { hideNavigation: true }
      },


      {
        path: "/loan-requests-demo",
        name: "loanRequestDemo",
        component: () =>
            import(/* webpackChunkName: "loanRequest" */ "../views/AdminDemo/LoanRequestDemo.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/edit-loan-demo",
        name: "editLoanDemo",
        component: () =>
            import(/* webpackChunkName: "withdrawalRequests" */ "../views/AdminDemo/EditLoanDemo.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/edit-investments-demo",
        name: "EditInvestmentsDemo",
        component: () =>
            import(/* webpackChunkName: "withdrawalRequests" */ "../views/AdminDemo/EditInvestmentsDemo.vue"),
        meta: { hideNavigation: true }
      },



      {
        path: "/user-information-demo",
        name: "UserInformationDemo",
        component: () =>
            import(/* webpackChunkName: "UserInformationDemo" */ "../views/AdminDemo/UserInformationDemo.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/user-dashBoard-view-demo",
        name: "UserDashBoardViewDemo",
        component: () =>
            import(/* webpackChunkName: "UserDashBoardViewDemo" */ "../views/AdminDemo/UserDashBoardViewDemo.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/change-password-admin-demo",
        name: "ChangePasswordAdminDemo",
        component: () =>
            import(/* webpackChunkName: "ChangePasswordAdminDemo" */ "../views/AdminDemo/ChangePasswordAdminDemo.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/add-new-user-demo",
        name: "AddNewUserDemo",
        component: () =>
            import(/* webpackChunkName: "AddNewUserDemo" */ "../views/AdminDemo/AddNewUserDemo.vue"),
        meta: { hideNavigation: true }
      },
    ]
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router