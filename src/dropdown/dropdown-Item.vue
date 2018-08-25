<template>
    <div :class="['default' , disabled]">
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.default {
  margin-top: 10px;
  width: 60px;
  height: 40px;
  border: none;
  text-align: center;
  color: black;
  &:hover {
    cursor: pointer;
  }
}
.disabled {
  color: gray;
  &:hover {
    cursor: not-allowed;
  }
}
</style>
