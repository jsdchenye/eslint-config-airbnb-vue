## Rules

[Strongly Recommended]
> vue/html-self-closing 💬将自动关闭标志强制为已配置的样式
```vue
<template>
  <!-- ✓ GOOD -->
  <div></div>
  <img/>
  <div class="test" />
  <MyComponent/>

  <!-- ✗ BAD -->
  <img>
  <div class="test"></div>
  <MyComponent></MyComponent>
</template>
```
[Recommended]
> vue/no-v-html 💬reports all uses of v-html directive(XSS)
```vue
<template>
  <!-- ✓ GOOD -->
  <div>{{ someHTML }}</div>

  <!-- ✗ BAD -->
  <div v-html="someHTML"></div>
</template>
```
> vue/order-in-components 💬Enforce order of properties in components
```vue
<script>
/* ✓ GOOD */
export default {
  name: 'app',
  props: {
    propA: Number
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<script>
/* ✗ BAD */
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: {
    propA: Number
  }
}
</script>
```


 ## Refer
(https://eslint.vuejs.org/rules)