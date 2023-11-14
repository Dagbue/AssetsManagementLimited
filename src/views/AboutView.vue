<template>
  <div class="alpha">
    <about-header/>
    <about-company/>
    <about-section1/>
    <br/>
    <about-section2/>
    <br/>
    <what-we-offer/>
    <powerful-trading/>
    <br/>
    <product-card/>
    <about-section3/>
    <loan-features/>
    <reassurance-view/>
    <ready-to-work/>
    <br/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>



import AboutHeader from "@/components/About/aboutHeader.vue";
import AboutSection1 from "@/components/About/aboutSection1.vue";
import AboutSection2 from "@/components/About/aboutSection2.vue";
import PowerfulTrading from "@/components/Home/powerfulTrading.vue";
import AboutSection3 from "@/components/About/aboutSection3.vue";
import FooterText from "@/components/baseComponents/footerText.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";
import ReadyToWork from "@/components/baseComponents/ready-to-work.vue";
import AboutCompany from "@/components/About/about-company.vue";
import WhatWeOffer from "@/components/About/what-we-offer.vue";
import ProductCard from "@/components/About/productCard.vue";
import LoanFeatures from "@/components/About/LoanFeatures.vue";
import ReassuranceView from "@/components/About/reassuranceView.vue";

export default {
  name: 'HomeView',
  components: {
    ReassuranceView,
    LoanFeatures,
    ProductCard,
    WhatWeOffer,
    AboutCompany,
    ReadyToWork,
    FooterHome,
    FooterText,
    AboutSection3,
    PowerfulTrading,
    AboutSection2,
    AboutSection1,
    AboutHeader
  },
}
</script>