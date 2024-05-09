<template>
  <div class="product">
    <div class="product-inner">
      <div class="product-text-wrap">
<!--        <img-->
<!--          v-bind:src="require(`../../../assets/${product.image}`)"-->
<!--          height="50"-->
<!--          width="50"-->
<!--          alt="logo"-->
<!--          class="product-logo"-->
<!--        />-->
        <h2 class="text-header">{{ product.title }}</h2>
      </div>

      <div class="product-image-wrap">
        <img :src="product.src" class="image" alt="product" />
      </div>

      <div class="product-detail">
        <p>{{ product.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "baseCard",
  props: ["product"],
  methods: {
    async onPostClick() {
      await this.$router.push("/about");
      await  window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.product {
  flex: 1 1 33.333%;
  width: 100%;
  padding: 20px;
}



.product-inner {
  position: relative;
  padding: 25px;
  box-shadow: 0 0 12px rgb(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: #232323;
}

.product-image-wrap .image {
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10px;
}

.product-image-wrap h3 {
  color: #ffffff;
  font-weight: 900;
  opacity: 0.2;
  transform-origin: center;
}

.product-detail p {
  font-size: 16px;
  line-height: 1.6;
  color: #818a91;
  font-weight: 300;
}

.product-text-wrap h2 {
  font-size: 21px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 2%;
  text-align: center;
  padding-bottom: 20px;
}

.product-text-wrap img {
  margin-left: 38%;
  opacity: 70%;
}

.product-text-wrap {
  display: flex;
  flex-direction: column;
}



.text-header {
  letter-spacing: 1px;
}


img{
  border-radius: 5px;
}

@media (max-width: 800px) {
  .product {
    padding: 110px;
  }


  .product-inner {
    padding: 55px;
  }
}

@media (max-width: 700px){
  .product {
    padding: unset;
    margin-bottom: 20px;
  }
  .product-text-wrap h2 {
    font-size: 25px;
  }
  .product-detail p {
    font-size: 17px;
  }
  .product-image-wrap .image {
    width: 90%;
    padding-bottom: 10px;
    margin-left: 10px;
  }
  .product-inner {
    padding: 30px;
  }
  .product-text-wrap h2 {
    font-size: 18.5px;
  }
}
</style>
