# Working with Colors

## Using Color Utilities

Tailwind provides a comprehensive set of color utilities for various properties:

```html
<div class="border-gray-200 bg-white text-gray-900">
  <span class="text-blue-500 hover:text-blue-700">
    Colored text with hover state
  </span>
</div>
```

## Color Utility Categories

| Utility        | Description                |
| -------------- | -------------------------- |
| `bg-*`         | Background colors          |
| `text-*`       | Text colors                |
| `border-*`     | Border colors              |
| `outline-*`    | Outline colors             |
| `ring-*`       | Focus ring colors          |
| `shadow-*`     | Box shadow colors          |
| `fill-*`       | SVG fill colors            |
| `stroke-*`     | SVG stroke colors          |
| `accent-*`     | Form control accent colors |
| `caret-*`      | Input caret colors         |
| `decoration-*` | Text decoration colors     |

## Opacity Modifiers

Adjust color opacity using the slash syntax:

```html
<div class="bg-blue-500/75">
  <!-- 75% opacity blue background -->
</div>

<div class="text-gray-900/50">
  <!-- 50% opacity text -->
</div>
```

You can also use arbitrary values:

```html
<div class="bg-blue-500/[0.6]">
  <!-- 60% opacity -->
</div>
```

## Dark Mode Support

Use the `dark:` variant for dark mode colors:

```html
<div class="bg-white dark:bg-gray-800">
  <h1 class="text-gray-900 dark:text-white">Responsive to color scheme</h1>
</div>
```

## CSS Variable Support

Colors are available as CSS variables:

```css
.custom-element {
  background-color: var(--color-blue-500);
  color: var(--color-gray-900);
}
```

## Customizing Colors

### Adding Custom Colors

```css
@import "tailwindcss";
@theme {
  --color-brand: oklch(0.72 0.11 221.19);
  --color-accent: oklch(0.74 0.17 40.24);
}
```

### Overriding Default Colors

```css
@import "tailwindcss";
@theme {
  --color-blue-500: oklch(0.55 0.15 250);
}
```

### Disabling Colors

```css
@import "tailwindcss";
@theme {
  --color-purple-*: initial;
  --color-fuchsia-*: initial;
}
```

## Best Practices

1. **Consistency**

   - Use theme colors instead of arbitrary values
   - Maintain a consistent color palette
   - Document color usage patterns

2. **Accessibility**

   - Ensure sufficient color contrast
   - Don't rely solely on color for information
   - Test with color blindness simulators

3. **Dark Mode**

   - Plan dark mode colors from the start
   - Test both light and dark modes
   - Use semantic color names

4. **Performance**
   - Minimize custom color definitions
   - Use the color opacity modifier
   - Leverage CSS variables

## Example Components

### Alert Component

```html
<div class="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-400/10">
  <div class="flex items-center gap-3">
    <svg class="size-5 stroke-yellow-600 dark:stroke-yellow-500">
      <!-- Icon -->
    </svg>
    <h3 class="font-semibold text-yellow-800 dark:text-yellow-300">
      Attention needed
    </h3>
  </div>
  <p class="mt-2 text-yellow-700 dark:text-yellow-400">
    This alert needs your attention.
  </p>
</div>
```

### Button Component

```html
<button
  class="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 active:bg-blue-700 disabled:bg-blue-300"
>
  Submit
</button>
```

### Card Component

```html
<div
  class="overflow-hidden rounded-xl bg-white shadow-md outline outline-black/5 dark:bg-gray-800 dark:outline-white/10"
>
  <div class="p-6">
    <h3 class="text-lg font-medium text-gray-900 dark:text-white">
      Card Title
    </h3>
    <p class="mt-2 text-gray-500 dark:text-gray-400">
      Card content with semantic colors.
    </p>
  </div>
</div>
```
