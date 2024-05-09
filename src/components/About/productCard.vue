<template>
  <div>

      <h1  class="products-header">Our Values</h1>

    <div class="products">
      <base-card
          v-for="product in products"
          :key="product.title"
          :product="product"
      />
    </div>

  </div>
</template>

<script>
// import { ref } from "vue";
import BaseCard from "@/components/About/baseCard.vue";
export default {
  name: "productCard",
  components: {
    BaseCard,
  },
  data() {
    return {
      products: [
        {
          title: "Leveraging Technology",
          content:"We believe technology solves a lot of problems and makes life easier. And we here at" +
              "Company Name aims to leverage the best of technology to make your trading life the most simple" +
              "it can be. With our experience working with multiple platforms, we were able to design the ideal new " +
              "experience to acquire maximum profit.",
          src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          image: "Granddad.png",
        },
        {
          title: "Customer Experience",
          content:"Unlike other companies in this field, we truly want to be the people’s choice. Not just in trading, " +
              "we want to be the best brand that you have interacted with. Now, that’s a high bar, but we will be " +
              "working extremely hard to achieve that. We are truly here to make sure that you kick-off trading the " +
              "right way and enjoy your life as a trader.",
          src: "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          image: "Risk.png",
        },
        {
          title: "Truly Global",
          content:"We as a team are distributed internationally, and finding someone who speaks your language and in " +
              "your timezone is as easy clicking the livechat button. With the website translated to multiple languages," +
              " including the educational content, you will find that Company Name is with you all " +
              "the way.",
          src: "https://images.unsplash.com/photo-1523495225575-104bd7a11999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          image: "budget.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.products {
  display: flex;
  /*max-width: 1280px;*/
  width: 95%;
  padding: 25px;
  margin: 0 auto;
}

.products-header {
  text-align: center;
  padding-top: 2%;
  margin-bottom: 0;
  color: #ffffff;
  font-size: 30px;
  letter-spacing: 1px;
}
@media (max-width: 990px) {
  .products-header{
    font-size: 29px;
    margin-bottom: 0;
  }
}

@media (max-width: 800px) {
  .products {
    display: block;
    justify-content: center;
  }
  .products-header{
    font-size: 25px;
    margin-bottom: 0;
  }
}

</style>
