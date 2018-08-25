<template>
    <div>
    <div v-on:mouseover="showDropdown" v-on:mouseleave="hideDropdown" class="dropdown">
        <slot></slot>
    </div>
    <div v-if="show">
        <slot name="dropdown"></slot>
    </div>
    </div>
</template>

<script>
export default {
  props: {},
  data: function() {
    return {
        show:false,
    };
  },
  methods: {
      showDropdown: function(event){
          this.show = true;
      },
      hideDropdown: function(event){
          this.show = false;
      }
  }
};
</script>

<style lang="scss">
.dropdown{
    cursor: pointer;
}
</style>
