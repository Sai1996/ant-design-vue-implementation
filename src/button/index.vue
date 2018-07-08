<template>
  <button :class="[ 'btn','btn-' + type]"><slot></slot></button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  data: () => ({})
};
</script>

<style lang="scss">
.btn {
  line-height: 1.5;
  display: inline-block;
  font-weight: 400;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  height: 32px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
  
}

.btn-primary {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
}
.btn-primary:hover {
  background-color: #40a9ff;
  border-color: #40a9ff;
}

.btn-default:hover {
  color: #40a9ff;
  border-color: #40a9ff;
}

.btn-dashed {
  border: 1px dashed #d9d9d9;
}

.btn-dashed:hover {
  color: #40a9ff;
  border-color: #40a9ff;
}
.btn-danger {
  color: #f5222d;
  background-color: #f5f5f5;
  border-color: #d9d9d9;
}

.btn-danger:hover {
  color: #fff;
  background-color: #ff4d4f;
  border-color: #ff4d4f;
}
</style>

