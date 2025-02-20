# Theme Variables

Using utility classes as an API for your design tokens.

## Overview

Theme variables are special CSS variables defined using the `@theme` directive that influence which utility classes exist in your project.

## What are Theme Variables?

Theme variables allow you to:

- Define design tokens for your project
- Create corresponding utility classes automatically
- Access values through CSS variables
- Customize the default Tailwind theme

Example:

```css
/* app.css */
@import "tailwindcss";
@theme {
  --color-mint-500: oklch(0.72 0.11 178);
}
```

This creates:

- A `bg-mint-500` utility class
- A `text-mint-500` utility class
- A CSS variable `--color-mint-500`

## Theme Variable Namespaces

| Namespace         | Utility classes                                  |
| ----------------- | ------------------------------------------------ |
| `--color-*`       | Color utilities (`bg-*`, `text-*`, etc.)         |
| `--font-*`        | Font family utilities (`font-sans`, etc.)        |
| `--text-*`        | Font size utilities (`text-xl`, etc.)            |
| `--font-weight-*` | Font weight utilities (`font-bold`, etc.)        |
| `--tracking-*`    | Letter spacing utilities (`tracking-wide`, etc.) |
| `--leading-*`     | Line height utilities (`leading-tight`, etc.)    |
| `--spacing-*`     | Spacing utilities (`p-4`, `m-6`, etc.)           |
| `--radius-*`      | Border radius utilities (`rounded-lg`, etc.)     |
| `--shadow-*`      | Box shadow utilities (`shadow-md`, etc.)         |
| `--blur-*`        | Blur utilities (`blur-sm`, etc.)                 |
| `--aspect-*`      | Aspect ratio utilities (`aspect-video`, etc.)    |
| `--ease-*`        | Transition timing utilities (`ease-in`, etc.)    |
| `--animate-*`     | Animation utilities (`animate-spin`, etc.)       |

## Customizing Your Theme

### Extending the Default Theme

Add new theme variables to extend the default theme:

```css
@import "tailwindcss";
@theme {
  --font-script: Great Vibes, cursive;
}
```

### Overriding Default Values

Override existing theme variables:

```css
@import "tailwindcss";
@theme {
  --breakpoint-sm: 30rem;
}
```

### Using a Custom Theme

Disable all default theme variables and define your own:

```css
@import "tailwindcss";
@theme {
  --*: initial;
  --spacing: 4px;
  --font-body: Inter, sans-serif;
  --color-lagoon: oklch(0.72 0.11 221.19);
  --color-coral: oklch(0.74 0.17 40.24);
}
```

## Animation Keyframes

Define keyframes within the `@theme` directive:

```css
@theme {
  --animate-fade-in: fade-in 0.3s ease-out;
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
```

## Referencing Variables

### In CSS

Use theme variables in your custom CSS:

```css
@layer components {
  .typography {
    font-size: var(--text-base);
    color: var(--color-gray-700);
  }
}
```

### In JavaScript

Access theme variables in JavaScript:

```javascript
let styles = getComputedStyle(document.documentElement);
let shadow = styles.getPropertyValue("--shadow-xl");
```

## Sharing Across Projects

Create a shared theme file:

```css
/* brand/theme.css */
@theme {
  --*: initial;
  --color-brand: oklch(0.72 0.11 221.19);
  --font-brand: "Brand Font", sans-serif;
}

/* app.css */
@import "tailwindcss";
@import "../brand/theme.css";
```

## Best Practices

1. **Use Semantic Names**

   - Choose clear, meaningful variable names
   - Use consistent naming conventions
   - Document the purpose of custom variables

2. **Maintain Consistency**

   - Use theme variables instead of arbitrary values
   - Keep related values in sync
   - Document any deviations from defaults

3. **Organization**

   - Group related variables together
   - Use comments to explain complex values
   - Keep theme files modular

4. **Performance**
   - Minimize the number of custom variables
   - Reuse existing theme values when possible
   - Consider the impact on bundle size
