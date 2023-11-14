<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="bank-trans">
        <div class="bank-trans-form">
          <input type="password" placeholder="Enter Old Password" required="" name="bank-name"  />
        </div>
        <div class="bank-trans-form2">
          <input type="password" placeholder="Enter New Password" required="" name="bank-name"  v-model="password" />
        </div>
        <div class="bank-trans-form2">
          <input type="password" placeholder="Confirm New Password" required="" name="bank-name"  />
        </div>
      </div>
      <button class="bank-trans-btn">Submit</button>
    </form>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {getAuth} from "firebase/auth";
import {doc, updateDoc, getFirestore, serverTimestamp} from "firebase/firestore";
import Swal from "sweetalert2";
export default {
  name: "DashBoardChangePassword",
  setup() {
    const password = ref('')
    const error = ref(null)

    const router = useRouter()

    const handleSubmit = async () => {
      try {
        // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
        updateDoc(doc(db, auth.currentUser.email, "USER"), {
          password: password.value,
          createdAt: serverTimestamp()
        })
            .then(() => {

            })
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          // text: 'Something went wrong!',
        });
        await router.push('/over-view')
      }
      catch (err) {
        error.value = err.message
        await Swal.fire({
          icon: 'error',
          title: 'error',
          text: err.message,
        });
      }
    }

    const auth = getAuth();
    const db = getFirestore();


    return {
      password,
      handleSubmit, error,
      updateDoc, doc
    }
  },
}
</script>

<style scoped>
.bank-trans{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: rgba(129, 138, 154, 0.5);
  color: #FFFFFF;
  margin: 4% 17% 1.5% 13%;
  padding: 5% 5% 7% 6%;
  border-radius: 5px;
}

.bank-trans-form{
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
}
.bank-trans-form2 {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}
input{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 5px;
}
select{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 5px;
}

.bank-trans-btn{
  padding: 11px 66px;
  color: white;
  background-color: #124DA8;
  border:1px solid #124DA8;
  border-radius: 5px;
  margin-right: 5%;
}
.bank-trans-btn:hover{
  background-color: #D23535;
  border:1px solid #D23535;
  color: #fff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 550px) {
  .bank-trans{
    margin-right: unset;
    margin-left: unset;
    margin-top: 10%;
  }
}
</style>