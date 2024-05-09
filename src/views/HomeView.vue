<template>
  <div class="alpha">
    <slider-view/>
    <lowest-cost/>
    <experience/>
    <discover/>
    <investment-principles/>
    <can-trust/>
    <steps/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>

import LowestCost from "@/components/Home/lowestCost.vue";
import SliderView from "@/components/Home/slideshow/sliderView.vue";
import Experience from "@/components/Home/experience.vue";
import Discover from "@/components/Home/discover.vue";
import InvestmentPrinciples from "@/components/Home/investment-principles.vue";
import CanTrust from "@/components/Home/canTrust.vue";
import Steps from "@/components/Home/steps.vue";
import FooterText from "@/components/baseComponents/footerText.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  name: 'HomeView',
  components: {
    FooterHome,
    FooterText,
    Steps,
    CanTrust,
    InvestmentPrinciples,
    Discover,
    Experience,
    SliderView,
    LowestCost
  },
}
</script>
