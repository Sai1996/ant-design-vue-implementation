<template>
<div>
    <ad-button type="primary">Primary</ad-button>
    <ad-button type="default">Default</ad-button>
    <ad-button type="dashed">Dashed</ad-button>
    <ad-button type="danger">Danger</ad-button>
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

