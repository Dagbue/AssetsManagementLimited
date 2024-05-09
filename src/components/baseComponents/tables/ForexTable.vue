<template>
  <div class="alpha">
        <div class="tables">
          <div class="tradingview-widget-container">
            <div class="tradingview-widget-container__widget"></div>
<!--            <div class="tradingview-widget-copyright">-->
<!--              <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">-->
<!--                <span class="blue-text">Track all markets on TradingView</span>-->
<!--              </a>-->
<!--            </div>-->
        </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "ForexTable",
  mounted() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.text = JSON.stringify({
      width: "100%",
      height: "600",
      defaultColumn: "overview",
      defaultScreen: "general",
      market: "forex",
      showToolbar: true,
      colorTheme: "light",
      locale: "en",
    });

    this.$el.querySelector(".tradingview-widget-container__widget").appendChild(script);
  },
}
</script>

<style scoped>
.tables{
  margin-left: 7%;
  margin-right: 7%;
}
</style>