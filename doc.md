 ## Refer
[custome recommended rule] (https://eslint.vuejs.org/rules)

## Rules
<i><b>Tip: edit some rule baseed on eslint-plugin-vue(recommended)</b></i> <br />

[Strongly Recommended]
> <b>vue/attribute-hyphenation</b><br />
Enforce attribute naming style on custom components in template
```vue
<template>
  <!-- ✔ GOOD -->
  <MyComponent my-prop="prop" />

  <!-- ✘ BAD -->
  <MyComponent myProp="prop" />
</template>
```

> <b>vue/html-closing-bracket-newline</b><br />
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

> <b>vue/html-closing-bracket-spacing</b><br />
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

> <b>vue/html-end-tags</b><br />
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

> <b>vue/html-self-closing</b><br />
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

> <b>vue/max-attributes-per-line</b><br />
Enforce the maximum number of attributes per line [ off ]

> <b>vue/no-template-shadow</b><br />
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

> <b>vue/singleline-html-element-content-newline</b><br />
Require a line break before and after the contents of a singleline element [ off ]

> <b>vue/v-bind-style</b><br />
Enforce v-bind directive style
```vue
<template>
  <!-- ✓ GOOD -->
  <div :foo="bar"/>

  <!-- ✗ BAD -->
  <div v-bind:foo="bar"/>
</template>
```

> <b>vue/v-on-style</b><br />
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
> <b>vue/attributes-order</b><br />
Enforce order of attributes [ off ]

> <b>vue/no-v-html</b><br />
Reports all uses of v-html directive(XSS)
```vue
<template>
  <!-- ✓ GOOD -->
  <div>{{ someHTML }}</div>

  <!-- ✗ BAD -->
  <div v-html="someHTML"></div>
</template>
```

> <b>vue/this-in-template</b><br />
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