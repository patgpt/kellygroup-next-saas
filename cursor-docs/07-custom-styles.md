# Custom Styles

## Overview

While Tailwind provides a comprehensive set of utility classes, you'll sometimes need to add custom styles. This guide covers the best practices for adding your own custom styles in Tailwind projects.

## Adding Base Styles

### HTML and Body Defaults

The simplest way to set page defaults is through classes on the `html` or `body` elements:

```html
<!doctype html>
<html lang="en" class="bg-gray-100 font-sans text-gray-900">
  <!-- ... -->
</html>
```

### Element Defaults

Use the `@layer base` directive to style HTML elements:

```css
@layer base {
  h1 {
    font-size: var(--text-2xl);
    font-weight: var(--font-weight-bold);
  }
  h2 {
    font-size: var(--text-xl);
    font-weight: var(--font-weight-semibold);
  }
}
```

## Component Classes

### Creating Components

Use the `@layer components` directive for reusable component styles:

```css
@layer components {
  .btn {
    @apply rounded-lg px-4 py-2 font-medium;
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  .card {
    @apply rounded-xl bg-white p-6 shadow-lg;
  }
}
```

### Third-Party Components

Style third-party components in the components layer:

```css
@layer components {
  .select2-dropdown {
    @apply rounded-lg border border-gray-300;
  }

  .datepicker-input {
    @apply form-input rounded-md;
  }
}
```

## Custom Utilities

### Simple Utilities

Create custom utilities using the `@utility` directive:

```css
@utility content-auto {
  content-visibility: auto;
}

@utility scrollbar-hide {
  &::-webkit-scrollbar {
    display: none;
  }
}
```

### Functional Utilities

Create utilities that accept values:

```css
@utility tab-* {
  tab-size: --value(--tab-size- *, integer, [integer]);
}

@utility opacity-* {
  opacity: --value([percentage]);
  opacity: calc(--value(integer) * 1%);
}
```

### Complex Utilities

Use nesting for more complex utilities:

```css
@utility scrollbar-hidden {
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
}
```

## Custom Variants

### Using @variant

Apply Tailwind variants to custom CSS:

```css
.custom-element {
  background: white;
  @variant dark {
    background: black;
  }
  @variant hover {
    @variant dark {
      background: gray;
    }
  }
}
```

### Creating Custom Variants

Register new variants:

```css
@custom-variant any-hover {
  @media (any-hover: hover) {
    &:hover {
      @slot;
    }
  }
}
```

## Using CSS Variables

### Theme Variables

Reference theme variables in custom CSS:

```css
.custom-component {
  color: var(--color-gray-900);
  font-size: var(--text-lg);
  padding: calc(var(--spacing) * 4);
}
```

### Custom Properties

Define and use custom properties:

```css
:root {
  --custom-easing: cubic-bezier(0.2, 0, 0, 1);
}

.animated-element {
  transition: transform 0.3s var(--custom-easing);
}
```

## Best Practices

1. **Layer Organization**

   - Use appropriate layers for different types of styles
   - Keep base styles minimal
   - Group related components

2. **Utility First**

   - Start with utility classes
   - Extract components when patterns repeat
   - Keep custom CSS as a last resort

3. **Maintainability**

   - Document custom styles
   - Use consistent naming conventions
   - Keep selectors simple

4. **Performance**
   - Minimize custom CSS
   - Use CSS variables efficiently
   - Leverage Tailwind's purge process

## Example Patterns

### Typography Component

```css
@layer components {
  .prose {
    h1 {
      @apply text-3xl font-bold text-gray-900 dark:text-white;

      &:not(:first-child) {
        @apply mt-8;
      }
    }

    p {
      @apply text-gray-600 dark:text-gray-400;

      &:not(:last-child) {
        @apply mb-4;
      }
    }

    a {
      @apply text-blue-600 hover:text-blue-700 dark:text-blue-400;
    }

    ul,
    ol {
      @apply my-6 ml-6;

      li {
        @apply mb-2;
      }
    }
  }
}
```

### Form Components

```css
@layer components {
  .form-input {
    @apply rounded-lg border-gray-300 shadow-sm;
    @apply focus:border-blue-500 focus:ring focus:ring-blue-200;
    @apply disabled:bg-gray-100 disabled:text-gray-500;

    &::placeholder {
      @apply text-gray-400;
    }
  }

  .form-label {
    @apply mb-1 block text-sm font-medium text-gray-700;
  }

  .form-error {
    @apply mt-1 text-sm text-red-600;
  }
}
```

### Custom Animation

```css
@layer components {
  .animate-slide-in {
    --slide-distance: 2rem;
    --slide-duration: 0.3s;

    @apply opacity-0;
    transform: translateY(var(--slide-distance));
    animation: slide-in var(--slide-duration) var(--ease-out) forwards;

    @keyframes slide-in {
      to {
        @apply opacity-100;
        transform: translateY(0);
      }
    }
  }
}
```
