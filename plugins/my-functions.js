import Vue from 'vue';

export default({ app }, inject) => {
  /**
   * Just a example function, which returns a random integer from 0 to 9
   *
   * @returns {number} Random integer from 0 to 9
   */
  function testFunction() {
    return Math.floor(Math.random() * 10);
  }

  // Register the function via `Vue.prototype`
  // Hint: `$testFunctionPrototype` is currently only suggested in the <script> area, not also in the <template>.
  Vue.prototype.$testFunctionPrototype = testFunction;

  // Register the function via the `inject` function by Nuxt
  // Hint: `$testFunctionInject` is not suggested in the <script> and <template> area.
  inject('testFunctionInject', testFunction);
};
