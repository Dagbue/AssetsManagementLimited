<template>
  <div>
    <div class="body">
      <h2 class="header">Settings Demo</h2>

      <div class="settings-alpha">
        <div class="settings-links">
          <router-link to="/change-password-demo" class="account-links">Change Password</router-link>
          <router-link to="/update-account-demo" class="account-links2">Update Account</router-link>
          <router-view v-slot="{ Component }">
            <transition name="route" mode="out-in">
              <component :is="Component"></component>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashBoardSettingsDemo"
}
</script>

<style scoped>

.body{
  padding: 32px;
}
.header{
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #353542;
}
.settings-alpha{
  text-align: center;
  padding-top: 40px;
}

.settings-links{
  margin-top: 2%;
}
.account-links{
  text-decoration: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: rgba(129, 138, 154, 0.5);
  padding: 18px 35px;
  margin-right: 1%;
  color: #FFFFFF;
  border-radius: 5px;
}
.account-links:hover{
  background-color: #FB4E4E;
  border:1px solid #FB4E4E;
  color: #fff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}


.account-links2{
  text-decoration: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: rgba(129, 138, 154, 0.5);
  padding: 18px 35px;
  margin-right: 1%;
  color: #FFFFFF;
  border-radius: 5px;
}
.account-links2:hover{
  background-color: #FB4E4E;
  border:1px solid #FB4E4E;
  color: #fff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}



@media (max-width: 990px) {
  .header-settings{
    font-size: 22px;
    margin-left: 15px;
  }
  .content-sep, hr{
    margin-left: unset;
    margin-right: unset;
    font-size: 14px;
  }
}
@media (max-width: 550px) {
  .header-settings{
    font-size: 17px;
  }
  .account-links{
    padding: 15px 30px;
    margin-right: unset;
    font-size: 12px;
  }
  .account-links2{
    padding: 15px 30px;
    margin-right: unset;
    font-size: 12px;
  }
  .foot{
    font-size: 11px;
  }
}
</style>