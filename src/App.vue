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
      <div style="height: 3000px">
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
    <h1>Menu</h1>
    <hr>
    <div>
      <h2>Horizontal menu</h2>
      <div style="margin-left:100px;font-size:0px">
        <ad-menu type="primary">Navigation One</ad-menu>
        <ad-menu type="disabled">Navigation Two</ad-menu>
        <ad-menu type="primary">Navigation Three-subMenu</ad-menu>
        <ad-menu type="primary" href="http://www.bing.com" target="_blank">Navigation Four-link</ad-menu>
      </div>
      <h2>Vertical menu</h2>
      <div>
        <ad-menu v-on:click="someFunc" type="primaryV">Navigation One</ad-menu>
        <ad-menu type="primaryV">Navigation One</ad-menu>
        <ad-menu type="primaryV">Navigation One</ad-menu>
      </div>
    </div>
</div>
</template>

<script>
import Button from "./button/index.vue";
import Affix from "./affix/index.vue";
import Menu from "./menu/menu.vue";
export default {
  components: {
    "ad-button": Button,
    affix: Affix,
    "ad-menu": Menu
  },
  methods: {
    handleOnClick: function() {
      window.alert("1");
    }
  }
};
</script>

