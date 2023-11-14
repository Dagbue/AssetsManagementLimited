<template>
  <div class="alpha">
    <faq-header/>
    <f-a-q-body/>
    <partners-home/>
    <ready-to-work/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>

import FaqHeader from "@/components/Faq/faqHeader.vue";
import FAQBody from "@/components/Faq/f-a-q-body.vue";
import PartnersHome from "@/components/baseComponents/partners-home.vue";
import ReadyToWork from "@/components/baseComponents/ready-to-work.vue";
import FooterText from "@/components/baseComponents/footerText.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Faq',
  components: {FooterHome, FooterText, ReadyToWork, PartnersHome, FAQBody, FaqHeader},
}
</script>

<style scoped>

</style>