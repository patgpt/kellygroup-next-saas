# Responsive Design

## Overview

Tailwind makes it easy to build responsive designs using breakpoint prefixes. Every utility class can be applied conditionally at different breakpoints.

## Default Breakpoints

| Breakpoint  | Prefix | Minimum Width  |
| ----------- | ------ | -------------- |
| Small       | `sm:`  | 40rem (640px)  |
| Medium      | `md:`  | 48rem (768px)  |
| Large       | `lg:`  | 64rem (1024px) |
| Extra Large | `xl:`  | 80rem (1280px) |
| 2XL         | `2xl:` | 96rem (1536px) |

Example usage:

```html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Full width on mobile, half width on medium screens, third width on large screens -->
</div>
```

## Mobile-First Approach

Tailwind uses a mobile-first breakpoint system:

- Unprefixed utilities take effect on all screen sizes
- Prefixed utilities take effect at that breakpoint and above

```html
<!-- DON'T: Using sm: for mobile styles -->
<div class="sm:text-center md:text-left">
  <!-- Incorrect usage -->
</div>

<!-- DO: Use unprefixed for mobile, override at breakpoints -->
<div class="text-center md:text-left">
  <!-- Correct usage -->
</div>
```

## Breakpoint Ranges

Target specific breakpoint ranges using max-\* variants:

```html
<div class="md:max-lg:flex">
  <!-- Only flex between md and lg breakpoints -->
</div>
```

Available max-\* variants:

- `max-sm`: @media (max-width: 40rem)
- `max-md`: @media (max-width: 48rem)
- `max-lg`: @media (max-width: 64rem)
- `max-xl`: @media (max-width: 80rem)
- `max-2xl`: @media (max-width: 96rem)

## Container Queries

Container queries let you style elements based on their parent's size instead of the viewport.

### Basic Usage

```html
<div class="@container">
  <div class="flex flex-col @md:flex-row">
    <!-- Stack on small containers, side-by-side on medium+ containers -->
  </div>
</div>
```

### Container Sizes

| Variant | Minimum width | CSS                             |
| ------- | ------------- | ------------------------------- |
| `@3xs`  | 16rem (256px) | `@container (min-width: 16rem)` |
| `@2xs`  | 18rem (288px) | `@container (min-width: 18rem)` |
| `@xs`   | 20rem (320px) | `@container (min-width: 20rem)` |
| `@sm`   | 24rem (384px) | `@container (min-width: 24rem)` |
| `@md`   | 28rem (448px) | `@container (min-width: 28rem)` |
| `@lg`   | 32rem (512px) | `@container (min-width: 32rem)` |
| `@xl`   | 36rem (576px) | `@container (min-width: 36rem)` |
| `@2xl`  | 42rem (672px) | `@container (min-width: 42rem)` |
| `@3xl`  | 48rem (768px) | `@container (min-width: 48rem)` |

### Named Containers

For complex layouts with nested containers:

```html
<div class="@container/sidebar">
  <div class="@md/sidebar:grid-cols-2">
    <!-- Responds to sidebar width -->
  </div>
</div>
```

## Customizing Breakpoints

### Adding Custom Breakpoints

```css
@import "tailwindcss";
@theme {
  --breakpoint-xs: 30rem;
  --breakpoint-3xl: 120rem;
}
```

### Overriding Default Breakpoints

```css
@import "tailwindcss";
@theme {
  --breakpoint-lg: 70rem;
}
```

### Custom Container Sizes

```css
@import "tailwindcss";
@theme {
  --container-8xl: 96rem;
}
```

## Arbitrary Values

Use arbitrary values for one-off responsive styles:

```html
<div class="max-[600px]:bg-sky-300 min-[320px]:text-center">
  <!-- Custom breakpoints -->
</div>
```

## Best Practices

1. **Mobile-First Development**

   - Start with mobile layout
   - Add breakpoint variants for larger screens
   - Use min-width queries when possible

2. **Logical Breakpoints**

   - Choose breakpoints based on content
   - Don't rely solely on device sizes
   - Consider container queries for components

3. **Performance**

   - Minimize breakpoint variations
   - Use container queries for component-level responsiveness
   - Avoid unnecessary media queries

4. **Maintainability**
   - Keep breakpoint usage consistent
   - Document custom breakpoints
   - Use semantic names for custom breakpoints

## Example Patterns

### Responsive Navigation

```html
<nav class="flex flex-col md:flex-row md:items-center md:justify-between">
  <div class="flex items-center justify-between md:block">
    <Logo />
    <button class="md:hidden">Menu</button>
  </div>
  <div class="hidden md:flex md:gap-4">
    <NavLinks />
  </div>
</nav>
```

### Responsive Grid

```html
<div
  class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
>
  <Card />
  <Card />
  <Card />
  <!-- More cards -->
</div>
```

### Container Query Card

```html
<div class="@container">
  <div class="flex flex-col @md:flex-row @md:items-center">
    <img class="w-full object-cover @md:h-48 @md:w-48" src="image.jpg" alt="" />
    <div class="p-4">
      <h2 class="text-xl @md:text-2xl">Title</h2>
      <p class="mt-2">Description</p>
    </div>
  </div>
</div>
```
