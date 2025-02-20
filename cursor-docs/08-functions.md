# Functions and Directives

## Overview

Tailwind CSS provides several functions and directives to help you organize and customize your styles. These tools help you work with layers, theme values, and custom components.

## Layer Directives

### @layer

Use `@layer` to organize styles into the framework's layer system:

```css
@layer base {
  /* Base styles */
  h1 {
    font-size: var(--text-2xl);
  }
}

@layer components {
  /* Component styles */
  .btn {
    @apply rounded-lg px-4 py-2;
  }
}

@layer utilities {
  /* Custom utilities */
  .content-auto {
    content-visibility: auto;
  }
}
```

### Layer Order

Layers are processed in this order:

1. `base` - Element defaults
2. `components` - Class-based styles
3. `utilities` - Utility classes

## Theme Directive

### @theme

Define theme variables and customize the default theme:

```css
@theme {
  /* Add new theme variables */
  --color-brand: oklch(0.72 0.11 221.19);
  --font-brand: "Brand Font", sans-serif;

  /* Override existing variables */
  --breakpoint-lg: 70rem;

  /* Disable default values */
  --color-purple-*: initial;
}
```

### @theme inline

Reference other variables in theme definitions:

```css
@theme inline {
  --font-sans: var(--font-inter);
  --color-primary: var(--brand-color);
}
```

## Utility Directive

### @utility

Create custom utility classes:

```css
@utility content-auto {
  content-visibility: auto;
}

@utility tab-* {
  tab-size: --value(--tab-size- *, integer, [integer]);
}
```

### Value Resolution

The `--value()` function supports different types of values:

```css
@utility opacity-* {
  /* Theme values */
  opacity: --value(--opacity- *);

  /* Bare values */
  opacity: --value(integer);

  /* Arbitrary values */
  opacity: --value([percentage]);
}
```

## Variant Directive

### @custom-variant

Create custom variants:

```css
@custom-variant pointer-coarse {
  @media (pointer: coarse) {
    @slot;
  }
}

@custom-variant aria-expanded {
  &[aria-expanded="true"] {
    @slot;
  }
}
```

### Shorthand Syntax

Use shorthand for simple variants:

```css
@custom-variant pointer-coarse (@media (pointer: coarse));
@custom-variant data-checked (&[data-checked]);
```

## Special Functions

### calc()

Perform calculations with CSS values:

```css
.element {
  width: calc(100% - var(--spacing));
  margin: calc(var(--spacing) * 2);
}
```

### theme()

Access theme values in CSS:

```css
.element {
  color: theme(colors.blue.500);
  padding: theme(spacing.4);
}
```

## Best Practices

1. **Layer Organization**

   - Use appropriate layers for different types of styles
   - Keep base styles minimal
   - Group related components

2. **Theme Variables**

   - Use semantic names
   - Document custom variables
   - Keep overrides organized

3. **Custom Utilities**

   - Follow Tailwind's naming conventions
   - Keep utilities single-purpose
   - Document complex utilities

4. **Custom Variants**
   - Use descriptive names
   - Keep selectors simple
   - Consider performance impact

## Example Patterns

### Custom Color Scheme

```css
@theme {
  /* Brand colors */
  --color-primary: oklch(0.72 0.11 221.19);
  --color-secondary: oklch(0.74 0.17 40.24);

  /* Semantic colors */
  --color-success: var(--color-green-500);
  --color-error: var(--color-red-500);
  --color-warning: var(--color-yellow-500);
}

@layer utilities {
  @utility bg-brand-gradient {
    background: linear-gradient(
      to right,
      var(--color-primary),
      var(--color-secondary)
    );
  }
}
```

### Responsive Typography

```css
@theme {
  /* Base sizes */
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;

  /* Fluid typography */
  --fluid-min: 0.875;
  --fluid-max: 1;
  --fluid-screen-min: 20rem;
  --fluid-screen-max: 96rem;
}

@layer utilities {
  @utility text-fluid {
    font-size: clamp(
      calc(var(--text-base) * var(--fluid-min)),
      calc(
        var(--text-base) + (var(--fluid-max) - var(--fluid-min)) *
          (100vw - var(--fluid-screen-min)) /
          (var(--fluid-screen-max) - var(--fluid-screen-min))
      ),
      calc(var(--text-base) * var(--fluid-max))
    );
  }
}
```

### Custom Component System

```css
@layer components {
  /* Base components */
  .btn {
    @apply rounded-lg px-4 py-2 font-medium transition;
  }

  /* Variants */
  @custom-variant size-sm {
    &[data-size="sm"] {
      @slot;
    }
  }

  @custom-variant size-lg {
    &[data-size="lg"] {
      @slot;
    }
  }

  /* Component styles */
  .btn {
    @variant size-sm {
      @apply px-3 py-1.5 text-sm;
    }

    @variant size-lg {
      @apply px-6 py-3 text-lg;
    }
  }
}
```
