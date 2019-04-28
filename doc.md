 ## Refer
[custome recommended rule] (https://eslint.vuejs.org/rules)

## Rules
<i>Tip: edit some rule baseed on eslint-plugin-vue(recommended)</i> <br />

[Strongly Recommended]
> vue/attribute-hyphenation
Enforce attribute naming style on custom components in template
```vue
<template>
  <!-- ✔ GOOD -->
  <MyComponent my-prop="prop" />

  <!-- ✘ BAD -->
  <MyComponent myProp="prop" />
</template>
```

> vue/html-closing-bracket-newline
Require or disallow a line break before tag's closing brackets
```vue
<!-- ✔ GOOD -->
<div
  id="foo"
  class="bar">
</div>
<!-- ✘ BAD -->
<div
  id="foo"
  class="bar"
>
</div>
```

> vue/html-closing-bracket-spacing
Require or disallow a space before tag's closing brackets
```vue
<template>
  <!-- ✓ GOOD -->
  <div>
  <div foo>
  <div foo="bar">
  </div>
  <div />
  <div foo />
  <div foo="bar" />

  <!-- ✗ BAD -->
  <div >
  <div foo >
  <div foo="bar" >
  </div >
  <div/>
  <div foo/>
  <div foo="bar"/>
</template>
```

> vue/html-end-tags
Enforce end tag style
```vue
<template>
  <!-- ✓ GOOD -->
  <div></div>
  <p></p>
  <p></p>
  <input>
  <br>

  <!-- ✗ BAD -->
  <div>
  <p>
</template>
```

> vue/html-self-closing
This rule aims to enforce the self-closing sign as the configured style
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

> vue/max-attributes-per-line
Enforce the maximum number of attributes per line [ off ]

> vue/no-template-shadow
Disallow variable declarations from shadowing variables declared in the outer scope
```vue
<template>
  <!-- ✓ GOOD -->
  <div v-for="i in 5"></div>
  <div v-for="j in 5"></div>

  <!-- ✗ BAD -->
  <div>
    <div v-for="k in 5">
      <div v-for="k in 10"></div>
      <div slot-scope="{ k }"></div>
    </div>
  </div>
</template>
```

> vue/singleline-html-element-content-newline
Require a line break before and after the contents of a singleline element [ off ]

> vue/v-bind-style
Enforce v-bind directive style
```vue
<template>
  <!-- ✓ GOOD -->
  <div :foo="bar"/>

  <!-- ✗ BAD -->
  <div v-bind:foo="bar"/>
</template>
```

> vue/v-on-style
Enforce v-on directive style
```vue
<template>
  <!-- ✓ GOOD -->
  <div @click="foo"/>

  <!-- ✗ BAD -->
  <div v-on:click="foo"/>
</template>
```

[ Recommended ]
> vue/attributes-order
Enforce order of attributes [ off ]

> vue/no-v-html
Reports all uses of v-html directive(XSS)
```vue
<template>
  <!-- ✓ GOOD -->
  <div>{{ someHTML }}</div>

  <!-- ✗ BAD -->
  <div v-html="someHTML"></div>
</template>
```

> vue/this-in-template
Disallow usage of this in template
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