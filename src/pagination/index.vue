<template>
<div>
    <div :class="['item', leftSelected ? 'selected' : '', leftDisabled ? 'disabled' : '']" v-on:click="isLeftClicked">&lt;</div>
    <div v-for="(num, index) in list" style="display:inline-block" v-on:click="locateCurrent(index)">
        <div :key="index"  :class="['item', isSelected(index) ? 'selected' : '']" > {{ num  }} </div>
    </div>
    <div :class="['item', rightSelected ? 'selected' : '', rightDisabled ? 'disabled' : '']" v-on:click="isRightClicked">&gt;</div>
</div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 0
    }
  },
  data: function() {
    return {
      list: [],
      current: 0,
      leftSelected: false,
      rightSelected: false,
      leftDisabled: false,
      rightDisabled: false
    };
  },
  watch:{
    current:function(){
        this.$emit('changePage', this.current);
    }
  },
  methods: {
    locateCurrent: function(index) {
      this.current = index;
    },
    isSelected: function(index) {
      return this.current === index;
    },
    isLeftClicked: function() {
      this.leftSelected = true;
      this.rightSelected = false;
      if(this.rightDisabled){
          this.rightDisabled = false;
      }
      if (this.current > 0) {
        this.current--;
      } else {
        this.leftSelected = false;
        this.leftDisabled = true;
      }
    },
    isRightClicked: function() {
      this.rightSelected = true;
      this.leftSelected = false;
      if(this.leftDisabled){
          this.leftDisabled = false;
      }
      if (this.current < this.list.length - 1) {
        this.current++;
      } else {
        this.rightSelected = false;
        this.rightDisabled = true;
      }
    }
  },
  created: function() {
    for (var i = 0; i < this.size; i++) {
      this.list.push(i + 1);
    }
  }
};
</script>

<style lang="scss">
.item {
  height: 32px;
  width: 32px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  text-align: center;
  background-color: #fff;
  margin-right: 8px;
  line-height: 32px;
  border-radius: 4px;
  display: inline-block;
  &:hover {
    transition: all 0.3s;
    border-color: #1890ff;
    color: #1890ff;
  }
}

.selected {
  border-color: #1890ff;
  color: #1890ff;
}

.item.disabled {
  border-color: #d9d9d9;
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
</style>
