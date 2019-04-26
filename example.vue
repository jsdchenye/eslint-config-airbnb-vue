<template>
  <div id="app">
    {{ message }}
      <img>
  </div>
</template>
<script>
export default {
  el: 'App',
  data() {
    return {
      message: 'test',
    };
  },
}
</script>