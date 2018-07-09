<template>
  <a :href="href" :target="target" >
    <button 
      :type="htmlType"
      :class="[ 'btn','btn-' + type, ghost ? 'btn-background-ghost' : '', isClicked, 'btn-' + shape, 'btn-' + size]" 
      :disabled="disabled"
      v-on:click="handleOnClick"
    >
      <slot></slot>
    </button>
  </a>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: ""
    },
    size: {
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
    },
    htmlType: {
      type: String,
      default: "button"
    }
  },
  data: function() {
    return {
      isClicked: ""
    };
  },
  methods: {
    handleOnClick: function(event) {
      this.isClicked = "clicked";

      setTimeout(() => {
        this.isClicked = "";
      }, 400);

      this.$emit('click', event);
    }
  }
};
</script>

<style lang="scss">
.btn {
  margin-right: 8px;
  margin-bottom: 12px;
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
  outline: 0;
  &.clicked::after {
    box-sizing: content-box;
    @keyframes buttonEffect {
      to {
        opacity: 0;
        top: -6px;
        left: -6px;
        bottom: -6px;
        right: -6px;
        border-width: 6px;
      }
    }
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    border-radius: inherit;
    border: 0 solid #1890ff;
    opacity: 0.4;
    animation: buttonEffect 0.4s;
    display: block;
  }
  &.btn-danger.clicked::after {
    border-color: #f5222d;
  }
}

.btn-primary {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  &:hover,
  &:focus {
    background-color: #40a9ff;
    border-color: #40a9ff;
  }
  &:active {
    color: #fff;
    background-color: #096dd9;
    border-color: #096dd9;
    outline: 0;
  }
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

.btn[disabled="disabled"],
.btn[disabled="disabled"]:hover {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  cursor: not-allowed;
}

.btn-background-ghost {
  background: transparent !important;
  border-color: #d9d9d9;
  color: #fff;
}

.btn-primary.btn-background-ghost {
  color: #1890ff;
  background-color: transparent;
  border-color: #1890ff;
}

.btn-primary.btn-background-ghost:hover {
  color: #40a9ff;
  background-color: transparent;
  border-color: #40a9ff;
}

.btn-danger.btn-background-ghost {
  color: #f5222d;
  border-color: #f5222d;
}

.btn-danger.btn-background-ghost:hover {
  color: #ff4d4f;
  border-color: #ff4d4f;
}

.btn-circle {
  width: 32px;
  padding: 0;
  font-size: 16px;
  border-radius: 50%;
  height: 32px;
  &.btn-large {
    width: 40px;
    padding: 0;
    font-size: 18px;
    border-radius: 50%;
    height: 40px;
  }
  &.btn-small {
    width: 24px;
    padding: 0;
    font-size: 14px;
    border-radius: 50%;
    height: 24px;
  }
}

.btn-large {
  padding: 0 15px;
  font-size: 16px;
  border-radius: 4px;
  height: 40px;
}

.btn-small {
  padding: 0 7px;
  font-size: 14px;
  border-radius: 4px;
  height: 24px;
}
</style>

