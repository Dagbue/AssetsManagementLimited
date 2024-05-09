<template>
  <div>
    <div class="alpha">

      <div class="contact-text">
        <h1 class="contact-text-header">How to Find Us</h1>
        <p class="contact-text-para">
          If you have any inquiries, please complete our contact form, and our team will promptly respond.
          If you are in close proximity, we invite you to pay a visit to LawExpert at one of our conveniently
          located offices.
        </p>
        <h2 class="contact-text-header-3">Headquarters</h2>
        <p class="contact-text-para-2">
          71-75 Uxbridge Road, London, England, W5 5SL
        </p>
        <p class="contact-text-para-3">Telephone: +1 (510) 256-9690</p>
        <p class="contact-text-para-4">E-mail: support@assetsmanagementlimited.com</p>
      </div>

      <div id="contact-form" class="contact-form">
        <h1 class="contact-form_title">Get in Touch</h1>

        <form class="form" @submit.prevent="sendMessage">
          <input
              required
              name="name"
              v-model="name"
              placeholder="Name"
              type="text"
              autocomplete="off"
          />
          <input
              required
              name="email"
              v-model="email"
              placeholder="E-mail"
              type="email"
          />
          <textarea
              name="message"
              v-model="message"
              rows="4"
              placeholder="Message"
              required
          ></textarea>
          <button class="button">Send</button>
        </form>
      </div>
    </div>

    <div class="newsletter">

      <div class="parent-wrapper">
        <span class="close-btn glyphicon glyphicon-remove"></span>
        <div class="subscribe-wrapper">
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <form class="newsletter-form" @submit.prevent="newsLetter">

            <input
                required
                type="email"
                name="email"
                autocomplete="off"
                class="subscribe-input"
                placeholder="Your e-mail"
                v-model="newsLetterEmail"
            />

            <button class="submit-btn">SUBMIT</button>
          </form>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
// import {doc, setDoc} from "firebase/firestore";
// import {db} from "@/firebase/config";
// import Swal from "sweetalert2";

export default {
  name: "contact-body",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      newsLetterEmail: ""
    };
  },
  methods: {
    // async sendMessage() {
    //   // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
    //   await setDoc(doc(db, "SupportRequest", "list"), {
    //     name: this.name,
    //     email: this.email,
    //     message: this.message,
    //   }, {merge: true})
    //       .then(() => {
    //         console.log('saved')
    //       })
    //   await Swal.fire({
    //     icon: 'success',
    //     title: 'Success',
    //     text: 'Message sent Successfully!',
    //   });
    //   this.resetForm()
    // },
    //
    // resetForm() {
    //   this.name = '';
    //   this.email = '';
    //   this.message = '';
    //   this.newsLetterEmail = '';
    // },
    //
    // async newsLetter() {
    //   // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
    //   await setDoc(doc(db, "newsLetter", "list"), {
    //     newsLetterEmail: this.newsLetterEmail,
    //   }, {merge: true})
    //       .then(() => {
    //         console.log('saved')
    //       })
    //   await Swal.fire({
    //     icon: 'success',
    //     title: 'Success',
    //     text: 'Subscribed Successfully!',
    //   });
    //   this.resetForm()
    // },
  }
}
</script>

<style scoped>
.alpha {
  display: flex;
  justify-content: space-between;
  padding-top: 7%;
  padding-bottom: 7%;
  margin-left: 4%;
}

.contact-text {
  padding-right: 15%;
  margin-left: 9%;
  color: #818a91;
  font-size: 19px;
  margin-top: 2%;
}
.contact-form {
  max-width: 700px;
  width: 100%;
  margin-right: 10%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px 40px;
  border-radius: 8px;
  padding-bottom: 40px;
  background-color: #232323;
}

.contact-form  {
  /*border-bottom: solid 1px #ccc;*/
  margin-bottom: 15px;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  text-align: center;
  font-size: 25px;
  padding-bottom: 12px;
  color: #FFFFFF;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  border: solid 1px #e8e8e8;
  padding: 20px 7px;
  margin-bottom: 15px;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #5d78ff;
  border: solid 1px #5d78ff;
  color: white;
  cursor: pointer;
  padding: 10px 40px;
  text-align: center;
  border-radius: 12px;
}

/*.contact-form .button:hover {*/
/*  background: #124DA8;*/
/*  border: solid 1px #124DA8;*/
/*}*/

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px;
}

.contact-text-header {
  text-align: center;
  font-size: 25px;
  color: #FFFFFF;
  font-weight: bold;
}

.contact-text-para {
  font-size: 20px;
  padding-top: 13px;
  padding-bottom: 13px;
  color: #818a91;
}

.contact-text-header-3 {
  padding-bottom: 15px;
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
}

.contact-text-para-2 {
  padding-bottom: 15px;
  color: #818a91;
}

.contact-text-para-3 {
  padding-bottom: 17px;
  color: #818a91;
}

.contact-text-para-4 {
  color: #818a91;
}

.newsletter {
  background: #232323;
  padding-top: 10px;
  padding-bottom: 60px;
  margin-top: 2%;
}

.parent-wrapper {
  position: relative;
  width: 400px;
  height: 270px;
  margin: 50px auto 0;
  background-image: url('http://www.imgbase.info/images/safe-wallpapers/digital_art/1_miscellaneous_digital_art/41750_1_miscellaneous_digital_art_simple_dark_shapes.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: -600%;
  background-color: #5d78ff;
  border-radius: 4px;
  color: #FFF;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.5);
}

.close-btn {
  margin: 20px;
  font-size: 18px;
  cursor: pointer;
}

.subscribe-wrapper {
  position: absolute;
  left: -30px;
  right: -30px;
  height: 200px;
  padding: 30px;
  background-position-x: 272%;
  background-position-y: -1px;
  background-repeat: no-repeat;
  background-color: #FFF;
  border-radius: 4px;
  color: #333;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
}

.subscribe-wrapper:after {
  position: absolute;
  content: "";
  right: -10px;
  bottom: 71px;
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #5d78ff;
}

.subscribe-wrapper h4 {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  padding-top: 25px;
  line-height: 28px;
}

.subscribe-wrapper input {
  position: absolute;
  bottom: 30px;
  border: none;
  border-bottom: 1px solid #d4d4d4;
  padding: 10px;
  width: 65%;
  background: transparent;
  transition: all .25s ease;
}

.subscribe-wrapper input:focus {
  outline: none;
  border-bottom: 1px solid #5d78ff;
}

.subscribe-wrapper .submit-btn {
  position: absolute;
  border-radius: 20px 0 0 20px;
  background-color: #5d78ff;
  border: 3px solid #5d78ff;
  color: #FFF;
  padding: 12px 25px;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  right: -10px;
  bottom: 30px;
  cursor: pointer;
  transition: all .25s ease;
  box-shadow: -5px 6px 20px 0 rgba(51, 51, 51, 0.4);
}

.subscribe-wrapper .submit-btn:hover {
  background-color: #5d78ff;
}

@media (max-width: 500px){
  .parent-wrapper {
    position: relative;
    width: 300px;
    height: 270px;
    margin: 50px auto 0;
  }
  .subscribe-wrapper h4 {
    font-size: 17px;
    padding-top: 20px;
  }
}

@media (max-width: 990px){
  .alpha{
    display: block;
  }
  .contact-form{
    margin-left: 20%;
    margin-top: 10%;
  }
  .contact-text{
    text-align: center;
  }
  .contact-text-para-2{
    padding-bottom: unset;
  }
  .contact-text-para-3{
    padding-bottom: unset;
  }
  .contact-form_title{
    font-size: 26px;
  }
}


@media (max-width: 800px) {
  .contact-form{
    margin-left: 11%;
  }
}

@media (max-width: 700px){
  .contact-text-header {
    font-size: 30px;
  }
  .contact-text-para {
    font-size: 18px;
  }
  .contact-form{
    margin-left: unset;
    margin-top: 10%;
    max-width: unset;
    width: unset;
    margin-right: 20px;
  }
}

</style>