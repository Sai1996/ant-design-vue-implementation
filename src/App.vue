<template>
<div>
    <h1>Button</h1>
    <hr>
    <div>
      <h2>Buttons with different types</h2>
      <div>
        <ad-button type="primary">Primary</ad-button>
        <ad-button>Default</ad-button>
        <ad-button type="dashed">Dashed</ad-button>
        <ad-button type="danger">Danger</ad-button>
      </div>
      <h2>Disabled buttons</h2>
      <div style=" height: 100px; width:1000px; display:flex;align-items:center; background-color:rgb(190, 200, 200)">
        <ad-button type="primary" v-bind:disabled="true">Primary(disabled)</ad-button>
        <ad-button v-bind:disabled="true">Default(disabled)</ad-button>
        <ad-button type="dashed" v-bind:disabled="true">Dashed(disabled)</ad-button>
        <ad-button  v-bind:disabled="true" v-bind:ghost="true">Ghost(disabled)</ad-button>
      </div>
      <h2>Ghost buttons</h2>
      <div style=" height: 100px; width:500px; display:flex;align-items:center;background-color:rgb(190, 200, 200)">
        <ad-button type="primary" v-bind:ghost="true">Primary</ad-button>
        <ad-button v-bind:ghost="true">Default</ad-button>
        <ad-button type="dashed" v-bind:ghost="true">Dashed</ad-button>
        <ad-button type="danger" v-bind:ghost="true">danger</ad-button>
      </div>
      <h2>Buttons of different shapes</h2>
      <div style=" height: 100px; width:500px; display:flex;align-items:center">
        <ad-button type="primary" shape="circle"></ad-button>
        <ad-button type="primary" >Search</ad-button>
        <ad-button shape="circle"></ad-button>
        <ad-button >Search</ad-button>
        <ad-button type="dashed" shape="circle"></ad-button>
        <ad-button type="dashed" >Search</ad-button>
      </div>
      <h2>Buttons of different sizes</h2>
      <div>
        <ad-button type="primary" size="large">Primary</ad-button>
        <ad-button>Default</ad-button>
        <ad-button type="dashed" size="small">Dashed</ad-button>
        <br>
        <ad-button size="large" shape="circle" ></ad-button>
        <ad-button shape="circle" ></ad-button>
        <ad-button size="small" shape="circle" ></ad-button>
      </div>
      <h2>Buttons with href and target</h2>
      <div>
        <ad-button type="primary" href="https://www.google.com" target="_blank">Primary</ad-button>
        <ad-button href="#top">Default</ad-button>
      </div>
      <h2>Emits click event</h2>
      <div>
        <ad-button  v-on:click="handleOnClick">Alert</ad-button>
      </div>
    </div>
    <h1>Affix</h1>
    <hr>
    <div>
      <h2>Basics</h2>
      <div style="height: 1000px">
        <div>
          <affix>
            <ad-button type="primary">Affix top</ad-button>
          </affix>
        </div>
        <div style="padding-left: 100px">
          <affix v-bind:offsetTop="10">
          <ad-button>Affix top</ad-button>
        </affix>
        </div>
      </div>
    </div>
    <h1>Dropdown</h1>
    <hr>
    <div style="height:400px">
      <ad-dropdown>
        <div>Hover on me</div>
        <ad-dropdown-menu slot="dropdown">
          <ad-dropdown-item>
            ABC
          </ad-dropdown-item>
          <ad-dropdown-item>
            DEF
          </ad-dropdown-item>
          <ad-dropdown-item>
            GHI
          </ad-dropdown-item>
          <ad-dropdown-item disabled>
            JKL
          </ad-dropdown-item>
        </ad-dropdown-menu>
      </ad-dropdown>
    </div>

    <h1>Pagination</h1>
    <hr>
    <div style="height:400px">
      <span> A few pages...</span>
      <ad-pagination v-on:changePage="changePage" v-bind:size="10" style="margin-top:20px;"></ad-pagination>
    </div>
</div>
</template>

<script>
import Button from "./button/index.vue";
import Affix from "./affix/index.vue";
import DropdownEl from "./dropdown/dropdown.vue";
import DropdownItem from "./dropdown/dropdown-Item.vue";
import DropdownMenu from "./dropdown/dropdown-Menu.vue";
import Pagination from "./pagination/index.vue";
export default {
  components: {
    "ad-button": Button,
    affix: Affix,
    "ad-dropdown": DropdownEl,
    "ad-dropdown-item": DropdownItem,
    "ad-dropdown-menu": DropdownMenu,
    "ad-pagination": Pagination
  },
  methods: {
    handleOnClick: function() {
      window.alert("1");
    },
    changePage: function(index){
      console.log("The current page is " + ++index);
    }
  }
};
</script>

