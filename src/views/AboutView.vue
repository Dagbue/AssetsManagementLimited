<template>
  <div class="alpha">
    <about-header/>
    <about-company/>
    <about-section1/>
    <about-section2/>
    <what-we-offer/>
    <powerful-trading/>
    <product-card/>
    <loan-features/>
    <reassurance-view/>
    <ready-to-work/>
    <footer-text/>
    <footer-home/>
  </div>
</template>



<script>
import AboutHeader from "@/components/About/aboutHeader.vue";
import AboutCompany from "@/components/About/about-company.vue";
import AboutSection1 from "@/components/About/aboutSection1.vue";
import AboutSection2 from "@/components/About/aboutSection2.vue";
import WhatWeOffer from "@/components/About/what-we-offer.vue";
import PowerfulTrading from "@/components/Home/powerfulTrading.vue";
import ProductCard from "@/components/About/productCard.vue";
import LoanFeatures from "@/components/About/LoanFeatures.vue";
import ReassuranceView from "@/components/About/reassuranceView.vue";
import ReadyToWork from "@/components/baseComponents/ready-to-work.vue";
import FooterText from "@/components/baseComponents/footerText.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  name: 'AboutView',
  components: {
    FooterHome,
    FooterText,
    ReadyToWork,
    ReassuranceView,
    LoanFeatures,
    ProductCard,
    PowerfulTrading,
    WhatWeOffer,
    AboutSection2,
    AboutSection1,
    AboutCompany,
    AboutHeader
  },
}
</script>