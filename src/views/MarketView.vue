<template>
  <div class="alpha">
    <market-header/>
    <market-body/>
    <partners-home/>
    <ready-to-work/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>



import MarketHeader from "@/components/Market/marketHeader.vue";
import MarketBody from "@/components/Market/marketBody.vue";
import PartnersHome from "@/components/baseComponents/partners-home.vue";
import ReadyToWork from "@/components/baseComponents/ready-to-work.vue";
import FooterText from "@/components/baseComponents/footerText.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  name: 'MarketView',
  components: {FooterHome, FooterText, ReadyToWork, PartnersHome, MarketBody, MarketHeader},
}
</script>

<style scoped>

</style>