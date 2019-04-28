 ## Refer
[custome recommended rule] (https://eslint.vuejs.org/rules)
change all the rule to be error to enforce code style.

## Rules
Tip: edit some rule baseed on eslint-plugin-vue(recommended) <br />

[Strongly Recommended]
> vue/singleline-html-element-content-newline:  Require a line break before and after the contents of a singleline element

> vue/v-bind-style:  Enforce v-bind directive style
```vue
<template>
  <!-- ✓ GOOD -->
  <div :foo="bar"/>

  <!-- ✗ BAD -->
  <div v-bind:foo="bar"/>
</template>
```

> vue/v-on-style:  Enforce v-on directive style
```vue
<template>
  <!-- ✓ GOOD -->
  <div @click="foo"/>

  <!-- ✗ BAD -->
  <div v-on:click="foo"/>
</template>
```

> vue/html-self-closing:  将自动关闭标志强制为已配置的样式
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


[ Recommended ]
> vue/attributes-order:  Enforce order of attributes [ off ]

> vue/no-v-html:  reports all uses of v-html directive(XSS)
```vue
<template>
  <!-- ✓ GOOD -->
  <div>{{ someHTML }}</div>

  <!-- ✗ BAD -->
  <div v-html="someHTML"></div>
</template>
```

> vue/this-in-template:  Disallow usage of this in template
```vue
<template>
  <!-- ✓ GOOD -->
  <a :href="url">
    {{ text }}
  </a>
  
  <!-- ✗ BAD -->
  <a :href="this.url">
    {{ this.text }}
  </a>
</template>
```