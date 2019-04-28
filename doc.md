## Rules

[Strongly Recommended]
> vue/html-self-closing 将自动关闭标志强制为已配置的样式
```vue
<template>
<!-- Good -->
 <div></div>
<img/>
<div class="test" />
<MyComponent/>
<!-- Bad -->
<img>
<div class="test"></div>
<MyComponent></MyComponent>
</template>
```
[Recommended]
> vue/no-v-html 

## Refer
(https://eslint.vuejs.org/rules)