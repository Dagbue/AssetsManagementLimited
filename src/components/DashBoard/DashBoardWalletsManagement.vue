<template>
  <div>
    <div class="body">
      <h2 class="header">Add Wallet Information</h2>

      <div class="section-1">

        <form @submit.prevent="handleSubmit">
          <div class="bank-trans">
            <div class="bank-trans-header">Bitcoin</div>
            <div class="bank-trans-form">
              <label>Bitcoin Address</label>
              <input type="text" placeholder="Enter Bitcoin Address" required name="Bitcoin" v-model="bitcoinAddress"/>
            </div>
          </div>

          <div class="bank-trans">
            <div class="bank-trans-header">Ethereum</div>
            <div class="bank-trans-form">
              <label>Ethereum Address</label>
              <input type="text" placeholder="Enter Ethereum Address" required name="Ethereum" v-model="ethereumAddress"/>
            </div>
          </div>

          <div class="bank-trans">
            <div class="bank-trans-header">USDT</div>
            <div class="bank-trans-form">
              <label>USDT Address</label>
              <input type="text" placeholder="Enter USDT Address" required name="USDT" v-model="litcoinAddress"/>
            </div>
          </div>

          <button class="bank-trans-btn" >Submit</button>
        </form>

      </div>

    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {getAuth} from "firebase/auth";
import {doc, updateDoc, getFirestore, serverTimestamp} from "firebase/firestore";
import Swal from "sweetalert2";
export default {
  name: "DashBoardWalletsManagement",
  setup() {
    const bitcoinAddress = ref('')
    const ethereumAddress = ref('')
    const litcoinAddress = ref('')
    const error = ref(null)

    const router = useRouter()

    const handleSubmit = async () => {
      try {
        // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
        updateDoc(doc(db, auth.currentUser.email, "USER"), {
          bitcoinAddress: bitcoinAddress.value,
          ethereumAddress: ethereumAddress.value,
          litcoinAddress: litcoinAddress.value,
          createdAt: serverTimestamp()
        })
            .then( async () => {

            })

        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Wallet Addresses Saved Successfully',
        });
        await router.push('/over-view')
      }
      catch (err) {
        error.value = err.message;
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: this.error,
        }).then(() => {

        });
      }
    }

    const auth = getAuth();
    const db = getFirestore();


    return {
      bitcoinAddress,ethereumAddress,litcoinAddress,
      handleSubmit, error,
      updateDoc, doc
    }
  },
}
</script>

<style scoped>
.section-1{
  margin-top: 5%;
}
.body{
  padding: 32px;
}
.header{
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #353542;
}

.bank-trans{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: rgba(129, 138, 154, 0.5);
  color: #FFFFFF;
  margin-bottom: 1.7%;
  margin-right: 15%;
  margin-left: 12%;
  padding: 25px 6% 28px;
  border-radius: 5px;
}

.bank-trans-form{
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
}
.bank-trans-header{
  padding-bottom: 5px;
  font-size: 17px;
  font-weight: 700;
  color: #124DA8;
}

input{
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 5px;
}

label{
  padding-top: 7px;
  padding-bottom: 17px;
  font-size: 15px;
  color: #124DA8;
  font-weight: 700;
  display: none;
}

.bank-trans-btn{
  margin-bottom: 4%;
  padding: 11px 80px;
  color: white;
  background-color: #124DA8;
  border: 1px solid #124DA8;
  border-radius: 5px;
  font-size: 16px;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.bank-trans-btn:hover{
  color: white;
  background-color: #D23535;
  border: 1px solid #D23535;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}


@media (max-width: 990px) {
  .header-alpha{
    font-size: 20px;
    margin-top: unset;
  }

  .bank-trans{
    padding: 20px 4% 30px;
    border-radius: 5px;
    margin-left: unset;
    margin-right: unset;
    margin-bottom: 5%;
  }

  .bank-trans-header{
    font-size: 18px;
  }

  .bank-trans-btn{
    margin-bottom: 6%;
    padding: 14px 80px;
    font-size: 15px;
  }
}

</style>