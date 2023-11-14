<template>
  <div class="alpha">
    <pricing-header/>
    <pricing-body/>
    <partners-home/>
    <ready-to-work/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>

import PricingHeader from "@/components/Pricing/pricingHeader.vue";
import PricingBody from "@/components/Pricing/pricing-body.vue";
import PartnersHome from "@/components/baseComponents/partners-home.vue";
import FooterText from "@/components/baseComponents/footerText.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";
import ReadyToWork from "@/components/baseComponents/ready-to-work.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Pricing',
  components: {ReadyToWork, FooterHome, FooterText, PartnersHome, PricingBody, PricingHeader},
}
</script>

<style scoped>

</style>