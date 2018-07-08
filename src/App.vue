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
      <div>
        <ad-button type="primary">Primary</ad-button>
        <ad-button >Default</ad-button>
        <ad-button type="dashed">Dashed</ad-button>
        <ad-button type="ghost">Danger</ad-button>
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

