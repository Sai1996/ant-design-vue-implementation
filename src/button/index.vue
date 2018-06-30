<template>
    <div class="button">
        {{ message }}
    </div>
</template>

<script>
export default {
  data: () => ({
    message: "Hello"
  })
};
</script>

<style lang="css">
.button {
  background-color: aliceblue;
  width: 100px;
  height: 50px;
  border-radius: 4px;
}
</style>

