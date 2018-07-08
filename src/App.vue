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
      <div style=" height: 100px; width:1000px; line-height:100px; background-color:rgb(190, 200, 200)">
        <ad-button type="primary" v-bind:disabled="true">Primary(disabled)</ad-button>
        <ad-button v-bind:disabled="true">Default(disabled)</ad-button>
        <ad-button type="dashed" v-bind:disabled="true">Dashed(disabled)</ad-button>
        <ad-button  v-bind:disabled="true" v-bind:ghost="true">Ghost(disabled)</ad-button>
      </div>
      <h2>Ghost buttons</h2>
      <div style=" height: 100px; width:500px; line-height:100px; background-color:rgb(190, 200, 200)">
        <ad-button type="primary" v-bind:ghost="true">Primary</ad-button>
        <ad-button v-bind:ghost="true">Default</ad-button>
        <ad-button type="dashed" v-bind:ghost="true">Dashed</ad-button>
        <ad-button type="danger" v-bind:ghost="true">danger</ad-button>
      </div>
    </div>
</div>
</template>

<script>
import Button from "./button/index.vue";

export default {
  components: {
    "ad-button": Button
  }
};
</script>

