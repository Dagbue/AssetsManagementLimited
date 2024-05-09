<template>
  <div class="alpha">
    <contact-header/>
    <contact-body/>
    <contact-map/>
    <partners-home/>
    <ready-to-work/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>

import ContactHeader from "@/components/Contact/contactHeader.vue";
import ContactBody from "@/components/Contact/contact-body.vue";
import ContactMap from "@/components/Contact/contact-map.vue";
import PartnersHome from "@/components/baseComponents/partners-home.vue";
import FooterText from "@/components/baseComponents/footerText.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";
import ReadyToWork from "@/components/baseComponents/ready-to-work.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Contact',
  components: {ReadyToWork, FooterHome, FooterText, PartnersHome, ContactMap, ContactBody, ContactHeader},
}
</script>

<style scoped>

</style>