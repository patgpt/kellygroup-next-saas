# States and Variants

## Overview

Tailwind provides variants for styling elements in different states, such as hover, focus, active, and more. These variants can be combined with any utility class.

## Common State Variants

### Mouse States

```html
<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700">
  Hover and click me
</button>
```

- `hover:` - Mouse hover
- `active:` - Mouse click
- `focus:` - Keyboard focus
- `focus-visible:` - Visible focus ring
- `focus-within:` - Child element focused

### Form States

```html
<input class="border-gray-300 invalid:border-red-500 disabled:bg-gray-100" />
```

- `disabled:` - Disabled form elements
- `enabled:` - Enabled form elements
- `required:` - Required fields
- `invalid:` - Invalid input
- `valid:` - Valid input
- `checked:` - Checked radio/checkbox
- `indeterminate:` - Indeterminate state
- `placeholder-shown:` - When placeholder is visible

### Group States

```html
<div class="group">
  <span class="text-gray-700 group-hover:text-blue-500">
    Hover parent to style me
  </span>
</div>
```

- `group` - Mark parent element
- `group-hover:` - Parent hover
- `group-focus:` - Parent focus
- `group-active:` - Parent active

### Peer States

```html
<input class="peer" />
<p class="peer-invalid:text-red-500">
  Shows error message when input is invalid
</p>
```

- `peer` - Mark target element
- `peer-invalid:` - Peer invalid
- `peer-focus:` - Peer focused
- `peer-disabled:` - Peer disabled

## Element States

### First/Last/Only Child

```html
<ul>
  <li class="py-4 first:pt-0 last:pb-0">List item</li>
</ul>
```

- `first:` - First child
- `last:` - Last child
- `only:` - Only child
- `odd:` - Odd children
- `even:` - Even children

### Empty State

```html
<div class="empty:hidden">
  <!-- Hidden when empty -->
</div>
```

## Media and Feature Queries

### Dark Mode

```html
<div class="bg-white text-black dark:bg-gray-800 dark:text-white">
  <!-- Dark mode aware -->
</div>
```

### Print

```html
<div class="print:hidden">
  <!-- Hidden when printing -->
</div>
```

### Reduced Motion

```html
<div class="animate-spin motion-reduce:animate-none">
  <!-- No animation when reduce motion is enabled -->
</div>
```

### Orientation

```html
<div class="portrait:hidden landscape:block">
  <!-- Orientation specific -->
</div>
```

## Combining Variants

Variants can be stacked to create complex conditions:

```html
<button class="dark:hover:focus:bg-blue-800">
  <!-- Dark mode + hover + focus -->
</button>
```

## Custom Variants

### Using Arbitrary Variants

```html
<div class="[&.is-active]:bg-blue-500">
  <!-- Custom state -->
</div>
```

### Creating Custom Variants

```css
@custom-variant pointer-coarse {
  @media (pointer: coarse) {
    @slot;
  }
}
```

Then use it:

```html
<button class="pointer-coarse:p-6">
  <!-- Larger padding on touch devices -->
</button>
```

## ARIA States

Style based on ARIA attributes:

```html
<div aria-expanded="true" class="aria-expanded:bg-blue-500">
  <!-- Styles when expanded -->
</div>
```

Common ARIA variants:

- `aria-checked:`
- `aria-disabled:`
- `aria-expanded:`
- `aria-hidden:`
- `aria-pressed:`
- `aria-selected:`

## Data Attributes

Style based on data attributes:

```html
<div data-state="active" class="data-[state=active]:bg-blue-500">
  <!-- Styles when active -->
</div>
```

## Best Practices

1. **State Organization**

   - Group related states together
   - Order variants consistently
   - Document complex state combinations

2. **Accessibility**

   - Use appropriate ARIA attributes
   - Ensure state changes are visible
   - Test with keyboard navigation

3. **Performance**

   - Minimize variant combinations
   - Use logical groupings
   - Consider selector specificity

4. **Maintainability**
   - Keep state logic simple
   - Document custom variants
   - Use semantic naming

## Example Patterns

### Interactive Card

```html
<div
  class="group rounded-lg bg-white p-6 shadow-sm hover:shadow-md dark:bg-gray-800"
>
  <h3 class="text-gray-900 group-hover:text-blue-500 dark:text-white">
    Interactive Heading
  </h3>
  <p class="text-gray-500 group-hover:text-gray-600 dark:text-gray-400">
    Content that responds to card hover
  </p>
</div>
```

### Form Input

```html
<label class="block">
  <span class="text-gray-700 dark:text-gray-300">Email</span>
  <input
    type="email"
    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm invalid:border-red-500 invalid:text-red-600 focus:border-blue-500 focus:ring focus:ring-blue-200 disabled:bg-gray-100 disabled:text-gray-500"
  />
  <span class="mt-1 hidden text-sm text-red-500 peer-invalid:block">
    Please enter a valid email
  </span>
</label>
```

### Toggle Button

```html
<button
  aria-pressed="false"
  class="rounded-md bg-gray-200 px-4 py-2 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 aria-pressed:bg-blue-500 aria-pressed:text-white aria-pressed:hover:bg-blue-600"
>
  Toggle Me
</button>
```
