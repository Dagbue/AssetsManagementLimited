<template>
  <div class="alpha">
    <loan-plan-header/>
    <loan-plan-body/>
    <partners-home/>
    <ready-to-work/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>
import LoanPlanHeader from "@/components/LoanPlan/LoanPlanHeader.vue";
import LoanPlanBody from "@/components/LoanPlan/LoanPlanBody.vue";
import PartnersHome from "@/components/baseComponents/partners-home.vue";
import ReadyToWork from "@/components/baseComponents/ready-to-work.vue";
import FooterText from "@/components/baseComponents/footerText.vue";
import FooterHome from "@/components/baseComponents/footerHome.vue";

export default {
  name: "LoanPlan",
  components: {FooterHome, FooterText, ReadyToWork, PartnersHome, LoanPlanBody, LoanPlanHeader}
}
</script>

<style scoped>

</style>