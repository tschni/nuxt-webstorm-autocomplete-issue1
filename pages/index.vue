<template>
  <div class="container">
    <!-- Vue.prototype function -->
    {{ $testFunctionPrototype() }}

    <!-- inject function -->
    {{ $testFunctionInject() }}
  </div>
</template>

<script>
export default {
  computed: {
    callPrototypeFunction() {
      return this.$testFunctionPrototype();
    },
    callInjectFunction() {
      return this.$testFunctionInject();
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
