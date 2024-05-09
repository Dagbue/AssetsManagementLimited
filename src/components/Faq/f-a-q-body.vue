<template>
  <div>
    <section>
      <details>
        <summary>WHAT IS ASSETS MANAGEMENT LIMITED</summary>
        <p>
          Assets Management Limited is an officially registered company and conducts
          business under the laws of the UK Government. The company is involved
          in cryptocurrency trading and mining. Also trading other valuable
          commodities/assets which we offer to our clients to earn from using a
          single trading account.
        </p>
      </details>
      <details>
        <summary>HOW SAFE ARE MY INVESTMENTS IN YOUR COMPANY</summary>
        <p>
          It is absolutely safe because all our technical experts are extremely
          experienced professionals; our mining/trading/property sourcing and
          other investment strategies are fail-proof.
        </p>
      </details>
      <details>
        <summary>
          HOW CAN I MAKE SURE YOUR COMPANY IS A REAL AND NOT A FAKE ONE
        </summary>
        <p>
          Assets Management Limited is officially incorporated with the UK
          Companies Office. verify registration: (click here)
          <a href="https://find-and-update.company-information.service.gov.uk/company/11557864">
            https://find-and-update.company-information.service.gov.uk/company/11557864
          </a>
        </p>
      </details>
      <details>
        <summary>CAN I LOOSE MONEY IF I INVEST NOW?</summary>
        <p>
          In accordance to investment laws of the FCA with over £3Billion
          investment security, we never worry about those rainy days in global
          trades and projects as we have our investors covered
        </p>
      </details>
      <details>
        <summary>
          DO YOU PROVIDE PROOF OF YOUR TRADING OR MINING ACTIVITIES
        </summary>
        <p>
          No, at the moment this is a closed information, but in the future we
          plan to publish our trade reports regularly. We will announce further,
          follow our news.
        </p>
      </details>
      <details>
        <summary>HOW LONG WILL YOUR COMPANY WORK?</summary>
        <p>
          Assets Management Limited plans to make a stable and profitable
          cooperation with clients for life.
        </p>
      </details>
      <details>
        <summary>WHAT MAKES YOU DIFFERENT FROM MANY OTHERS</summary>
        <p>
          We have no conflicts of interest that could adversely affect your
          portfolio performance. Unlike many brokers and other financial
          advisors, we receive no compensation from brokerages or mutual fund
          companies for investing in their funds. Our only goal is to find the
          best investments available to meet your objectives.
        </p>
      </details>
      <details>
        <summary>HOW CAN I DEPOSIT INTO MY ACCOUNT</summary>
        <p>
          We support the following deposit methods - Cryptocurrency (bitcoin,
          ethereum, ripple) for investments below £50,000 - Bankwire & Paypal
          options are open to investments above the £50,000 benchmark
        </p>
      </details>
      <details>
        <summary>HOW DO YOU USE THE MONEY OF INVESTORS</summary>
        <p>
          We use invested funds to cover all operating costs as well as to
          update the technical base for crypto mining and trading. We also use
          invested funds to trade valuable commodities and assets to make
          returns on client initial investments. You do not have to do the
          trading yourself. We are here for you. We do not trade against you. We
          trade only for you. Period.
        </p>
      </details>
      <details>
        <summary>WHAT ARE YOUR FEES</summary>
        <p>
          We use invested funds to cover all operating costs as well as to
          update the technical base for crypto mining and trading. We also use
          invested funds to trade valuable commodities and assets to make
          returns on client initial investments. You do not have to do the
          trading yourself. We are here for you. We do not trade against you. We
          trade only for you. Period.
        </p>
      </details>
      <details>
        <summary>WHY DO I HAVE TO INVEST IN CRYPTO CURRENCY</summary>
        <p>
          This is to the advantage of our investors, as most investors we have
          come from across the globe and wire transfers take 2-3 working days,
          are taxed heavily and bank charges are incurred. With cryptocurrency
          deposits, all these are handled as they are instant and have minimal
          charges and no taxation involved.
        </p>
      </details>
      <details>
        <summary>HOW LONG DOES IT TAKE MY DEPOSIT TO BE FUNDED</summary>
        <p>
          Depending on the deposit method, wire deposit usually takes between 3
          to 5 working days, depending on the sending bank while other methods
          take less. Cryptocurrency deposits are instant. Once we receive the
          funds in our bank account/wallet, they will be deposited into your
          trading account. Please contact Assets Management Limited, in case you have
          been charged with the deposit but funds are not showing in your
          trading account.
        </p>
      </details>
      <details>
        <summary>HOW DO I NEED TO PARTICIPATE IN THE AFFILIATE PROGRAM</summary>
        <p>
          All you need is just to register an account and find the unique
          affiliate link in the "Referral" section: Share this link to attract
          new investors and get reward.
        </p>
      </details>
    </section>
  </div>
</template>

<script>
export default {
  name: "f-a-q-body"
}
</script>

<style scoped>
section {
  padding-top: 4%;
  width: 60%;
  margin: auto;
}

details[open] summary ~ * {
  animation: open 0.4s ease-in;
}

@keyframes open {
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  60% {
    transform: translateX(10px);
  }
  70% {
    transform: translateX(-10px);
  }
  80% {
    transform: translateX(5px);
  }
  90% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
details summary::-webkit-details-marker {
  display: none;
}

details summary {
  width: 100%;
  position: relative;
  cursor: pointer;
  font-size: 1rem;
  /*font-weight: 300;*/
  list-style: none;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #FFFFFF;
}

details summary:after {
  content: "+";
  color: #ffffff;
  position: absolute;
  font-size: 1.75rem;
  line-height: 0;
  margin-top: 0.75rem;
  right: 0;
  /*font-weight: bold;*/
  transform-origin: center;
  transition: 200ms linear;
}
details[open] summary:after {
  transform: rotate(45deg);
  font-size: 3rem;
}
details summary {
  outline: 0;
}
details p {
  font-size: 17px;
  margin: 0 0 1rem;
  padding-top: 1rem;
  color: #ffffff;
}
details {
  box-shadow: 0 0 5px #232323;
  background-color: #232323;
  position: relative;
  padding: 25px 20px;
  margin-bottom: 5%;
  border-radius: 5px;
}
@media (max-width: 700px){
  .details summary {
    font-size: 19px;
  }
  details p {
    font-size: 16px;
    margin: 0 0 1rem;
    padding-top: 1rem;
  }
  summary{
    font-size: 18px;
  }
  section {
    width: 82%;
  }
}
</style>