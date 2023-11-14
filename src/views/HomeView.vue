<template>
  <div class="alpha">
    <slider-view/>
    <lowest-cost/>
    <experience/>
    <why-choose/>
    <discover/>
    <investment-principles/>
    <can-trust/>
    <steps/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>




import SliderView from "@/components/Home/slideshow/sliderView.vue";
import LowestCost from "@/components/Home/lowestCost.vue";
import Experience from "@/components/Home/experience.vue";
import Discover from "@/components/Home/discover.vue";
import CanTrust from "@/components/Home/canTrust.vue";
import Steps from "@/components/Home/steps.vue";
import FooterText from "@/components/baseComponents/footerText.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";
import WhyChoose from "@/components/Home/why-choose.vue";
import InvestmentPrinciples from "@/components/Home/investment-principles.vue";

export default {
  name: 'HomeView',
  components: {
    InvestmentPrinciples,
    WhyChoose,
    FooterHome,
    FooterText,
    Steps,
    CanTrust,
    Discover,
    Experience,
    LowestCost,
    SliderView
  },
}
</script>
