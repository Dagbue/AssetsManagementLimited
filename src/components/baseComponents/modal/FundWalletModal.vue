<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
      <div class="alpha">

        <div class="first-part">
          <img src="@/assets/fund-wallet-icon.svg" alt="fund-wallet-icon"/>
          <i class='bx bx-x' @click="close"></i>
        </div>
        <div class="second-part">
          <p class="text-1">Fund your wallet</p>
          <p class="text-2">How to fund your wallet:</p>
          <p class="text-3">Transfer desired amount to the Wallet details below and have your balance funded</p>
          <p class="text-3">Note: After making your deposit,kindly send a screenshot/proof of deposit to
            <span class="note-span">
              <a href="mailto:support@assetsmanagementlimited.com" class="para-last">support@assetsmanagementlimited.com</a>
            </span> for documentation and to boost the funding process
          </p>
          <br/>
          <div v-if="this.selectedItem === 'bitcoin' ">
            <p class="text-4">Wallet Name: {{selectedItem}}</p>
            <p class="text-5">Wallet Address: bc1q2nxm4jrpj7wpu6ssw6m3ajd6pqara36udhcamq</p>
          </div>

          <div v-if="this.selectedItem === 'ethereum' ">
            <p class="text-4">Wallet Name: {{selectedItem}}</p>
            <p class="text-5">Wallet Address: 0x0dD4E954D5363b5da3F5AB01559d076ebBe4D0bA</p>
          </div>

          <div v-if="this.selectedItem === 'USDT' ">
            <p class="text-4">Wallet Name: {{selectedItem}}</p>
            <p class="text-5">Wallet Address: 0x0dD4E954D5363b5da3F5AB01559d076ebBe4D0bA</p>
          </div>

        </div>


        <br/>

        <button v-if="this.selectedItem === 'bitcoin' " @click="copyToClipboard('bc1q2nxm4jrpj7wpu6ssw6m3ajd6pqara36udhcamq')">Copy</button>

        <button v-if="this.selectedItem === 'ethereum' " @click="copyToClipboard('0x0dD4E954D5363b5da3F5AB01559d076ebBe4D0bA')">Copy</button>

        <button v-if="this.selectedItem === 'USDT' " @click="copyToClipboard('0x0dD4E954D5363b5da3F5AB01559d076ebBe4D0bA')">Copy</button>

      </div>

    </dialog>
  </div>
</template>

<script>


import Swal from "sweetalert2";
export default {
  name: "FundWalletModal",
  emits: ['close'],
  props: {
    selectedItem: {
      type: Object,
      default: null
    }
  },
  methods:{
    close(){
      this.$emit('close');
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Deposit Request Sent!',
      });
    },

    copyToClipboard(content) {
      const textarea = document.createElement('textarea')
      textarea.value = content
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Copied To Clipboard',
      });
    }
  },
}
</script>
<style scoped >

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
}


dialog {
  position: fixed;
  top: 15vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 9rem);
  margin: 0;
  background-color: transparent;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
}

.alpha{
  position: relative;
  display: block;
  overflow: hidden;
  width: 400px;
  height: 525px;
  /*height: auto;*/
  padding: 24px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(3, 28, 67, 0.1);
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 34px 0 rgba(3, 28, 67, 0.13);
}

.first-part{
  display: flex;
  justify-content: space-between;
}

.bx-x{
  font-size: 25px;
  padding-top: 2px;
}

.text-1{
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #101828;
  padding-top: 2.5%;
  padding-bottom: 1%;
}

.text-2{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1D2939;
  padding-top: 1%;
  padding-bottom: 2%;
}

.text-3{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1D2939;
  padding-top: 1.5%;
  padding-bottom: 2%;
}

.text-4, .text-5, .text-6{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #667085;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
}

button{
  padding: 8px 55px;
  color: white;
  background-color: #124DA8;
  border: 1px solid #124DA8;
  border-radius: 5px;
  font-size: 13px;
  text-decoration: none;
  /*display: block;*/
  /*margin-left: auto;*/
  /*margin-right: auto;*/
}
button:hover{
  color: white;
  background-color: #D23535;
  border: 1px solid #D23535;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@media (max-width: 500px) {
  dialog {
    top: 11vh;
    width: 25rem;
    height: 18rem;
    left: calc(50% - 10.5rem);
    right: 30px;
  }
  .alpha{
    width: 350px;
    height: 500px;
  }
  h3{
    font-size: 18px;
  }
  p{
    font-size: unset;
  }

  .text-1{
    font-size: 17px;
    line-height: 26px;
    padding-top: 2%;
  }

  .text-2{
    font-size: 15px;
    line-height: 22px;
    padding-top: unset;
    padding-bottom: unset;
  }

  .text-3{
    font-size: 15px;
    line-height: 22px;
    padding-top: 1%;
    padding-bottom: 1%;
  }

  .text-4, .text-5, .text-6{
    font-size: 15px;
    line-height: 22px;
    padding-top: 1%;
    padding-bottom: 1%;
  }

}
</style>