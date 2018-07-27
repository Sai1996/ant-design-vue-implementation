<template>
    <div>
      <div ref="wrapper" :style="elementStyle">
        <slot></slot>
      </div>
      <div v-if="isFixed" :style="`height: ${fixedElementHeight}`"></div>
    </div>
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
  data() {
    return {
      elementStyle: "",
      originalElementOffsetTop: 0
    };
  },
  computed: {
    isFixed() {
      return this.elementStyle.indexOf("fixed") !== -1;
    },
    fixedElementHeight() {
      return this.$refs.wrapper.clientHeight;
    }
  },
  methods: {},
  mounted() {
    window.addEventListener("scroll", () => {
      const elmFromTop = this.$refs.wrapper.offsetTop;
      const viewportFromTop = pageYOffset;

      if (elmFromTop !== this.offsetTop) {
        this.originalElementOffsetTop = elmFromTop;
      }

      if (viewportFromTop > this.originalElementOffsetTop - this.offsetTop) {
        this.elementStyle = `position:fixed; top:${this.offsetTop}; bottom: ${
          this.offsetBottom
        }`;
      } else {
        this.elementStyle = "";
      }
    });
  }
};
</script>

<style lang="scss">
</style>

