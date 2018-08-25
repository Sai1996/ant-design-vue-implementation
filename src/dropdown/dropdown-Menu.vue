<template>
    <div class="menu">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.menu {
  border: 1px #d9d9d9 solid;
  width: 60px;
  box-shadow: 0px 0px 9px 3px rgba(217,217,217,0.27);
  margin-left: 10px;
}
</style>
