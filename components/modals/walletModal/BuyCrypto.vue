<template>
    <div class="deposit">
    <h3 class="mb-3">Buy Crypto</h3>
    <div class="mt-4 external">
      <iframe class="w-100" scrolling="no" src="https://widget.changelly.com?from=*&to=*&amount=100&address=&fromDefault=usd&toDefault=btc&theme=default&merchant_id=dsqjm5tohjukbf3n&payment_id=&v=3" frameborder="0"></iframe>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      };
    },
};
</script>

<style lang="scss" scoped>
  .external {
      min-height: 400px !important;
      iframe {
          height: 400px !important;
          border-radius: 10px !important;
      }
  }
</style>
