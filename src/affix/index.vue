<template>
    <div :style="'position:relative;top:' + offsetTop + '; bottom:' + offsetBottom"><slot></slot></div>
</template>

<script>
export default {
  props: {
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetBottom: {
      type: Number,
      default: 0
    }
  },
  data: function() {
    return {};
  },
  methods: {},
  mounted: function() {
    window.addEventListener("scroll", function() {
        
    });
  }
};
</script>

<style lang="scss">
</style>

