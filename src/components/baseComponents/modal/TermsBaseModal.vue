<template>
  <div>
    <div class="backdrop" @click="$emit('close')"></div>
    <dialog open>
<!--      <p class="close" @click="$emit('close')" >X</p>-->
      <p
          @click="$emit('close')"
          style="float: right;
          font-weight: 900;padding-bottom: 5px;"
      >X</p>
      <h2>Terms and Conditions</h2>
      <div>
        <h3>Legal information and ownership of website</h3>
        <p>The website for Assets Management Limited ("Website"), encompassing all associated products and services,
          is the sole property of Assets Management Limited and remains under its exclusive ownership. All rights
          reserved. Assets Management Limited and its affiliated group retain full ownership of all intellectual
          property rights, including but not limited to trade names, trademarks, logos, and other branding elements
          associated with the Website. Except as explicitly permitted, all underlying HTML, text, graphics, audio
          clips, video clips, and any other information or content on the Website are copyrighted by Assets
          Management Limited. No individual or entity is permitted to alter, modify, reproduce, distribute, display,
          exploit, transmit, transcribe, or translate any materials or media from the Website into any other form
          without prior written permission from Assets Management Limited Group.</p>
      </div>
      <div>
        <h3>Data Disclaimer</h3>
        <p>The information provided through the Website is strictly for informational and private use. Users are
          encouraged to seek advice from independent investment, financial, legal, and tax advisors if desired,
          before making any investment decisions. The content and data shared via the Website are not intended to
          constitute investment advice from the Company, its Employees, Officers, Directors, Affiliates, Agents,
          Service Providers, or Licensors. The Website does not account for any User's individual investment
          objectives, financial situation, or specific needs. Users should assess their financial situation
          carefully before entering into any transactions or agreements.</p>
        <p>Any information obtained from Users through the Website will be held in strict confidence and used solely
          for lawful purposes. Disclosure of such information will only occur in response to lawful requests from
          relevant supervisory bodies, legal obligations necessitating such disclosure, or if required to protect the
          Company’s legal rights or obligations.</p>
      </div>
      <div>
        <h3>Use of Cookies</h3>
        <p>The Company utilizes "Cookies," which are small data files that enable tracking of Website activity.
          Cookies allow Assets Management Limited to analyze traffic and User interactions with the Website, helping
          improve overall service delivery. The Company may access cookies on Users’ devices to gather information
          regarding the source of visits, banners, or advertisements that directed Users to the Website. However,
          information collected through cookies will not be used for direct promotional or marketing activities
          without the User’s prior consent.</p>
      </div>
      <div>
        <h3>Account Termination and Cancellations</h3>
        <p>Clients may choose to terminate their accounts. However, account termination will result in the forfeiture
          of any profits earned. Additionally, clients must provide a 100-day advance notice for documentation
          purposes. Clients are strongly advised to carefully review and understand the terms and conditions before
          proceeding with any investment or trading activities.</p>
      </div>
      <div>
        <h3>Amendments to Agreement</h3>
        <p>Assets Management Limited reserves the right to amend this Agreement at its discretion and without
          obtaining prior consent from the Client. In the event of a material change to the Agreement, the Company
          will provide at least 100 (One Hundred) business days’ notice before the amendment becomes effective. Such
          amendments will be binding as of the date specified in the notice. Unless otherwise agreed, any amendment
          will not affect any outstanding order, transaction, or any legal rights or obligations that have already
          been established.</p>
      </div>
      <div>
        <h3>Confidentiality and Data Protection</h3>
        <p>The Company is committed to maintaining the confidentiality of all personal and financial information
          provided by Users. Such information will not be disclosed, sold, exchanged, or provided to any third party.
          However, the Company may disclose information in rare circumstances where required by law, regulatory
          authority, or court order. Generally, User information will be securely maintained and treated as
          confidential at all times. Users are responsible for safeguarding their account numbers, passwords,
          and login details. The Company is authorized to act on instructions received in good faith.</p>
      </div>
      <div>
        <h3>Applicable Law and Jurisdiction</h3>
        <p>The access to and use of the Website, as well as the products and services provided through the Website,
          are governed by the laws of the United Kingdom Companies House. Without limiting the generality of this
          provision, Users may not use the content of the Website for commercial purposes, integrate it with any
          other product or service, or reproduce it for any distribution without prior written permission from the
          Company.</p>
        <p>In the event that any term or condition is determined to be invalid or unenforceable, such provision
          will be removed, and the remaining provisions will remain in full effect. Translations of the Website’s
          content, including the services and products offered, are provided as a convenience. In the event of any
          discrepancies between language versions, the English version will prevail.</p>
      </div>

      <div>
        <h3>Pre-Payment Withdrawal Fee Policy</h3>
        <p style="padding-bottom: 10px">If you choose to make a withdrawal, please note that a pre-payment withdrawal
          fee is required to process
          your request. This fee must be paid in full before any withdrawal can be completed. The pre-payment
          withdrawal fee is non-refundable and is calculated based on the specific terms outlined in your agreement.
          By initiating a capital deposit, you agree to these terms and accept the responsibility of covering the
          applicable fee in advance.</p>
<!--        <p style="padding-bottom: 10px" >Please be advised that if applicable, you will be fully responsible for any capital gains taxes-->
<!--          associated with your transaction. In order to facilitate the timely processing of tax payments, a-->
<!--          pre-payment withdrawal fee is required. This fee is necessary to cover the administrative costs related to-->
<!--          the payment of taxes, ensuring that all obligations are met before your withdrawal can be completed.</p>-->
        <p style="padding-bottom: 10px" >By initiating a capital deposit, you acknowledge and agree that the pre-payment withdrawal fee is
          mandatory and non-refundable. This fee will be calculated in accordance with the terms specified in your
          agreement. We kindly ask that you make the necessary payment in full to avoid any delays in the processing
          of your request.</p>
      </div>

      <div>
        <h3>Capital</h3>
        <p style="padding-bottom: 10px"> At Assets Management Limited, we value transparency and clarity in our trading processes. As such, we wish
          to outline our policy regarding the capital used in trades and its refundability.</p>
        <p style="padding-bottom: 10px">Refund Policy for Capital : Once a trade has been initiated, the capital used for that trade becomes
          non-refundable. The capital deployed is essential for the execution and operation of the trade, directly
          influencing the potential for profits. As the capital is actively utilized to generate returns, it cannot
          be returned to the client once the trade has begun.</p>
        <p style="padding-bottom: 10px">Refund Eligibility Before Trade Initiation : Clients have the opportunity to request a refund of their
          capital only before the trade has commenced. Once a trade is in progress, the capital is considered
          fully utilized and is no longer eligible for refund. This policy ensures that funds are appropriately
          allocated to facilitate the trade and maximize profit generation.</p>

        <p style="padding-bottom: 10px">Profit and Fund Allocation : Any profits derived from trades are directly
          linked to the capital invested and deployed during the trading process. The allocation and withdrawal of
          funds are subject to the following conditions: Bonuses: Bonuses earned during the trading process are free
          to withdraw both during and after the trading period, However, once a profit withdrawal is initiated, bonuses
          cannot be withdrawn until that withdrawal ticket is closed. These funds are accessible without restrictions.
          Profits: Profits generated through trading are not eligible for withdrawal until the end of the trading
          period. Profit Withdrawal Fee: Profits can only be released once the required prepayment of your withdrawal
          fee is completed. These conditions ensure a structured and transparent approach to fund allocation
          and withdrawal.</p>
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  name: "TermsBaseModal",
  emits: ['close'],
}
</script>

<style scoped>

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

div{
  padding-bottom: 10px;
}
dialog {
  position: fixed;
  top: 14vh;
  width: 34rem;
  height: 30rem;
  left: calc(50% - 17rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  padding: 1.1rem;
  background-color: white;
  color: black;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
  overflow-y: scroll;
}

h3{
  margin-bottom: 5px;
}

.close{
  margin-bottom: 5px;
  font-weight: 900;
}

h2{
  margin-bottom: 5px;
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
    top: 18vh;
    width: 24rem;
    height: 30rem;
    right: 30px;

    left: calc(50% - 12rem);
  }
  h3{
    font-size: 20px;
  }
  p{
    font-size: unset;
  }
}
</style>