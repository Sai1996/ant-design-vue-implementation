<template>
<a :href="href" :target="target">
    <div :type="type"
         :class="['def', type]">
        <slot></slot>
    </div>
</a>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary"
    },
    icon: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: "javascript:;"
    },
    target: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.def {
  border: none;
  margin: 0;
  color: rgba(0, 0, 0, 0.65);
  width: 300px;
  padding-bottom: 10px;
  font-size: 14px;
  text-align: center;
  &:hover {
    color: #1890ff;
    border-bottom: 2px solid #1890ff;
    cursor: pointer;
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}
.primary {
    display: inline-block;
  border-bottom: 1px solid #e8e8e8;
}
.disabled {
    display: inline-block;
  color: rgba(0, 0, 0, 0.25) !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25) !important;
  &:hover {
    cursor: not-allowed;
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .primaryV{
      display: block;
  }
}
</style>
