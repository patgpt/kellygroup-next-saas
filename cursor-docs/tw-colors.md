# Working with Colors

## Using Color Utilities

Use color utilities like `bg-white`, `border-pink-300`, and `text-gray-950` to set the different color properties of elements in your design:

```html
<div
  class="flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800"
>
  <span
    class="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10"
  >
    <svg class="size-6 stroke-pink-700 dark:stroke-pink-500"><!-- ... --></svg>
  </span>
  <div>
    <p class="text-gray-700 dark:text-gray-400">
      <span class="font-medium text-gray-950 dark:text-white">Tom Watson</span>
      mentioned you in
      <span class="font-medium text-gray-950 dark:text-white"
        >Logo redesign</span
      >
    </p>
    <time class="mt-1 block text-gray-500" datetime="9:37">9:37am</time>
  </div>
</div>
```

## Full List of Utilities

| Utility          | Description                                  |
| ---------------- | -------------------------------------------- |
| `bg-*`           | Sets the background color of an element      |
| `text-*`         | Sets the text color of an element            |
| `decoration-*`   | Sets the text decoration color of an element |
| `border-*`       | Sets the border color of an element          |
| `outline-*`      | Sets the outline color of an element         |
| `shadow-*`       | Sets the color of box shadows                |
| `inset-shadow-*` | Sets the color of inset box shadows          |
| `ring-*`         | Sets the color of ring shadows               |
| `inset-ring-*`   | Sets the color of inset ring shadows         |
| `accent-*`       | Sets the accent color of form controls       |
| `caret-*`        | Sets the caret color in form controls        |
| `fill-*`         | Sets the fill color of SVG elements          |
| `stroke-*`       | Sets the stroke color of SVG elements        |

## Adjusting Opacity

You can adjust the opacity of a color using syntax like `bg-black/75`, where `75` sets the alpha channel of the color to 75%:

```html
<div>
  <div class="bg-sky-500/10"></div>
  <div class="bg-sky-500/20"></div>
  <div class="bg-sky-500/30"></div>
  <div class="bg-sky-500/40"></div>
  <div class="bg-sky-500/50"></div>
  <div class="bg-sky-500/60"></div>
  <div class="bg-sky-500/70"></div>
  <div class="bg-sky-500/80"></div>
  <div class="bg-sky-500/90"></div>
  <div class="bg-sky-500/100"></div>
</div>
```

This syntax also supports arbitrary values and the CSS variable shorthand:

```html
<div class="bg-pink-500/[71.37%]"></div>
<div class="bg-cyan-400/(--my-alpha-value)"></div>
```

## Targeting Dark Mode

Use the `dark` variant to write classes like `dark:bg-gray-800` that only apply a color when dark mode is active:

```html
<div
  class="rounded-lg bg-white px-6 py-8 ring shadow-xl ring-gray-900/5 dark:bg-gray-800"
>
  <div>
    <span
      class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg"
    >
      <svg class="h-6 w-6 stroke-white"><!-- ... --></svg>
    </span>
  </div>
  <h3
    class="mt-5 text-base font-medium tracking-tight text-gray-900 dark:text-white"
  >
    Writes upside-down
  </h3>
  <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
    The Zero Gravity Pen can be used to write in any orientation, including
    upside-down. It even works in outer space.
  </p>
</div>
```

## Referencing in CSS

Colors are exposed as CSS variables in the `--color-*` namespace, so you can reference them in CSS:

```css
@import "tailwindcss";
@layer components {
  .typography {
    color: var(--color-gray-950);
    a {
      color: var(--color-blue-500);
      &:hover {
        color: var(--color-blue-800);
      }
    }
  }
}
```

You can also use these as arbitrary values in utility classes:

```html
<div class="bg-[light-dark(var(--color-white),var(--color-gray-950))]"></div>
```

To adjust the opacity of a color when referencing it as a variable in CSS, use Tailwind's special `--alpha()` function:

```css
@import "tailwindcss";
@layer components {
  .DocSearch-Hit--Result {
    background-color: --alpha(var(--color-gray-950) / 10%);
  }
}
```

## Customizing Your Colors

Use `@theme` to add custom colors to your project:

```css
@import "tailwindcss";
@theme {
  --color-midnight: #121063;
  --color-tahiti: #3ab7bf;
  --color-bermuda: #78dcca;
}
```

Now utilities like `bg-midnight`, `text-tahiti`, and `fill-bermuda` will be available.

### Overriding Default Colors

Override any of the default colors by defining new theme variables:

```css
@import "tailwindcss";
@theme {
  --color-gray-50: oklch(0.984 0.003 247.858);
  --color-gray-100: oklch(0.968 0.007 247.896);
}
```

### Disabling Default Colors

Disable any default color by setting it to `initial`:

```css
@import "tailwindcss";
@theme {
  --color-lime-: initial;
  --color-fuchsia-: initial;
}
```

### Using a Custom Palette

Use `--color-*` to disable all default colors and define your own:

```css
@import "tailwindcss";
@theme {
  --color-*: initial;
  --color-white: #fff;
  --color-purple: #3f3cbb;
  --color-midnight: #121063;
  --color-tahiti: #3ab7bf;
  --color-bermuda: #78dcca;
}
```

### Referencing Other Variables

Use `@theme inline` to reference other color variables:

```css
@import "tailwindcss";
:root {
  --acme-canvas-color: oklch(0.967 0.003 264.542);
}
[data-theme="dark"] {
  --acme-canvas-color: oklch(0.21 0.034 264.665);
}
@theme inline {
  --color-canvas: var(--acme-canvas-color);
}
```

For more details, refer to the theme documentation.
