# Theme Variables

Using utility classes as an API for your design tokens.

## Overview

Tailwind is a framework for building custom designs, and different designs need different typography, colors, shadows, breakpoints, and more.

These low-level design decisions are often called design tokens, and in Tailwind projects you store those values in theme variables.

## What are theme variables?

Theme variables are special CSS variables defined using the `@theme` directive that influence which utility classes exist in your project.

For example, you can add a new color to your project by defining a theme variable like `--color-mint-500`:

```css
/* app.css */
@import "tailwindcss";
@theme {
  --color-mint-500: oklch(0.72 0.11 178);
}
```

Now you can use utility classes like `bg-mint-500`, `text-mint-500`, or `fill-mint-500` in your HTML:

```html
<div class="bg-mint-500">
  <!-- ... -->
</div>
```

Tailwind also generates regular CSS variables for your theme variables so you can reference your design tokens in arbitrary values or inline styles:

```html
<div style="background-color: var(--color-mint-500)">
  <!-- ... -->
</div>
```

Learn more about how theme variables map to different utility classes in the theme variable namespaces documentation.

## Why @theme instead of :root?

Theme variables aren't just CSS variables — they also instruct Tailwind to create new utility classes that you can use in your HTML.

Since they do more than regular CSS variables, Tailwind uses special syntax so that defining theme variables is always explicit. Theme variables are also required to be defined top-level and not nested under other selectors or media queries, and using a special syntax makes it possible to enforce that.

Defining regular CSS variables with `:root` can still be useful in Tailwind projects when you want to define a variable that isn't meant to be connected to a utility class. Use `@theme` when you want a design token to map directly to a utility class, and use `:root` for defining regular CSS variables that shouldn't have corresponding utility classes.

## Relationship to utility classes

Some utility classes in Tailwind like `flex` and `object-cover` are static, and are always the same from project to project. But many others are driven by theme variables, and only exist because of the theme variables you've defined.

For example, theme variables defined in the `--font-*` namespace determine all of the font-family utilities that exist in a project:

```css
/* ./node_modules/tailwindcss/theme.css */
@theme {
  --font-sans:
    ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  /* ... */
}
```

The `font-sans`, `font-serif`, and `font-mono` utilities only exist by default because Tailwind's default theme defines the `--font-sans`, `--font-serif`, and `--font-mono` theme variables.

If another theme variable like `--font-poppins` were defined, a `font-poppins` utility class would become available to go with it:

```css
/* app.css */
@import "tailwindcss";
@theme {
  --font-poppins: Poppins, sans-serif;
}
```

```html
<h1 class="font-poppins">This headline will use Poppins.</h1>
```

You can name your theme variables whatever you want within these namespaces, and a corresponding utility with the same name will become available to use in your HTML.

## Relationship to variants

Some theme variables are used to define variants rather than utilities. For example theme variables in the `--breakpoint-*` namespace determine which responsive breakpoint variants exist in your project:

```css
/* app.css */
@import "tailwindcss";
@theme {
  --breakpoint-3xl: 120rem;
}
```

Now you can use the `3xl:*` variant to only trigger a utility when the viewport is 120rem or wider:

```html
<div class="3xl:grid-cols-6 grid grid-cols-2 md:grid-cols-4">
  <!-- ... -->
</div>
```

Learn more about how theme variables map to different utility classes and variants in the theme variable namespaces documentation.

## Theme variable namespaces

Theme variables are defined in namespaces and each namespace corresponds to one or more utility class or variant APIs.

Defining new theme variables in these namespaces will make new corresponding utilities and variants available in your project:

| Namespace          | Utility classes                                                          |
| ------------------ | ------------------------------------------------------------------------ |
| `--color-*`        | Color utilities like `bg-red-500`, `text-sky-300`, and many more         |
| `--font-*`         | Font family utilities like `font-sans`                                   |
| `--text-*`         | Font size utilities like `text-xl`                                       |
| `--font-weight-*`  | Font weight utilities like `font-bold`                                   |
| `--tracking-*`     | Letter spacing utilities like `tracking-wide`                            |
| `--leading-*`      | Line height utilities like `leading-tight`                               |
| `--breakpoint-*`   | Responsive breakpoint variants like `sm:*`                               |
| `--container-*`    | Container query variants like `@sm:*` and size utilities like `max-w-md` |
| `--spacing-*`      | Spacing and sizing utilities like `px-4`, `max-h-16`, and many more      |
| `--radius-*`       | Border radius utilities like `rounded-sm`                                |
| `--shadow-*`       | Box shadow utilities like `shadow-md`                                    |
| `--inset-shadow-*` | Inset box shadow utilities like `inset-shadow-xs`                        |
| `--drop-shadow-*`  | Drop shadow filter utilities like `drop-shadow-md`                       |
| `--blur-*`         | Blur filter utilities like `blur-md`                                     |
| `--perspective-*`  | Perspective utilities like `perspective-near`                            |
| `--aspect-*`       | Aspect ratio utilities like `aspect-video`                               |
| `--ease-*`         | Transition timing function utilities like `ease-out`                     |
| `--animate-*`      | Animation utilities like `animate-spin`                                  |

For a list of all of the default theme variables, see the default theme variable reference.

## Default theme variables

When you import `tailwindcss` at the top of your CSS file, it includes a set of default theme variables to get you started.

Here's what you're actually importing when you import `tailwindcss`:

```css
/* node_modules/tailwindcss/index.css */
@layer theme, base, components, utilities;
@import "./theme.css" layer(theme);
@import "./preflight.css" layer(base);
@import "./utilities.css" layer(utilities);
```

That `theme.css` file includes the default color palette, type scale, shadows, fonts, and more.

For a complete list of all default theme variables, please refer to the default theme variable reference documentation.

## Customizing your theme

### Extending the default theme

Use `@theme` to define new theme variables and extend the default theme:

```css
/* app.css */
@import "tailwindcss";
@theme {
  --font-script: Great Vibes, cursive;
}
```

This makes a new `font-script` utility class available that you can use in your HTML, just like the default `font-sans` or `font-mono` utilities:

```html
<p class="font-script">This will use the Great Vibes font family.</p>
```

### Overriding the default theme

Override a default theme variable value by redefining it within `@theme`:

```css
/* app.css */
@import "tailwindcss";
@theme {
  --breakpoint-sm: 30rem;
}
```

Now the `sm:*` variant will trigger at 30rem instead of the default 40rem viewport size:

```html
<div class="grid grid-cols-1 sm:grid-cols-3">
  <!-- ... -->
</div>
```

To completely override an entire namespace in the default theme, set the entire namespace to `initial` using the special asterisk syntax:

```css
/* app.css */
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

### Using a custom theme

To completely disable the default theme and use only custom values, set the global theme variable namespace to `initial`:

```css
/* app.css */
@import "tailwindcss";
@theme {
  --*: initial;
  --spacing: 4px;
  --font-body: Inter, sans-serif;
  --color-lagoon: oklch(0.72 0.11 221.19);
  --color-coral: oklch(0.74 0.17 40.24);
  --color-driftwood: oklch(0.79 0.06 74.59);
  --color-tide: oklch(0.49 0.08 205.88);
  --color-dusk: oklch(0.82 0.15 72.09);
}
```

## Defining animation keyframes

Define the `@keyframes` rules for your `--animate-*` theme variables within `@theme` to include them in your generated CSS:

```css
/* app.css */
@import "tailwindcss";
@theme {
  --animate-fade-in-scale: fade-in-scale 0.3s ease-out;
  @keyframes fade-in-scale {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
}
```

## Referencing other variables

When defining theme variables that reference other variables, use the `inline` option:

```css
/* app.css */
@import "tailwindcss";
@theme inline {
  --font-sans: var(--font-inter);
}
```

## Sharing across projects

Since theme variables are defined in CSS, sharing them across projects is just a matter of throwing them into their own CSS file that you can import in each project:

```css
/* ./packages/brand/theme.css */
@theme {
  --*: initial;
  --spacing: 4px;
  --font-body: Inter, sans-serif;
  --color-lagoon: oklch(0.72 0.11 221.19);
  --color-coral: oklch(0.74 0.17 40.24);
  --color-driftwood: oklch(0.79 0.06 74.59);
  --color-tide: oklch(0.49 0.08 205.88);
  --color-dusk: oklch(0.82 0.15 72.09);
}
```

Then you can use `@import` to include your theme variables in other projects:

```css
/* ./packages/admin/app.css */
@import "tailwindcss";
@import "../brand/theme.css";
```

## Using your theme variables

### With custom CSS

Use your theme variables to get access to your design tokens when you're writing custom CSS that needs to use the same values:

```css
/* app.css */
@import "tailwindcss";
@layer components {
  .typography {
    p {
      font-size: var(--text-base);
      color: var(--color-gray-700);
    }
    h1 {
      font-size: var(--text-2xl--line-height);
      font-weight: var(--font-weight-semibold);
      color: var(--color-gray-950);
    }
    h2 {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-gray-950);
    }
  }
}
```

### With arbitrary values

Using theme variables in arbitrary values can be useful, especially in combination with the `calc()` function:

```html
<div class="relative rounded-xl">
  <div class="absolute inset-px rounded-[calc(var(--radius-xl)-1px)]">
    <!-- ... -->
  </div>
  <!-- ... -->
</div>
```

### Referencing in JavaScript

Most of the time when you need to reference your theme variables in JS you can just use the CSS variables directly, just like any other CSS value.

For example, the popular Motion library for React lets you animate to and from CSS variable values:

```jsx
<motion.div animate={{ backgroundColor: "var(--color-blue-500)" }} />
```

If you need access to a resolved CSS variable value in JS, you can use `getComputedStyle` to get the value of a theme variable on the document root:

```javascript
let styles = getComputedStyle(document.documentElement);
let shadow = styles.getPropertyValue("--shadow-xl");
```

## Default theme variable reference

For reference, here's a complete list of the theme variables included by default when you import Tailwind CSS into your project:

```css
/* tailwindcss/theme.css */
@theme {
  /* Font families */
  --font-sans:
    ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;

  /* Colors */
  --color-black: #000;
  --color-white: #fff;

  /* Spacing */
  --spacing: 0.25rem;

  /* Breakpoints */
  --breakpoint-sm: 40rem;
  --breakpoint-md: 48rem;
  --breakpoint-lg: 64rem;
  --breakpoint-xl: 80rem;
  --breakpoint-2xl: 96rem;

  /* Container sizes */
  --container-3xs: 16rem;
  --container-2xs: 18rem;
  --container-xs: 20rem;
  --container-sm: 24rem;
  --container-md: 28rem;
  --container-lg: 32rem;
  --container-xl: 36rem;
  --container-2xl: 42rem;
  --container-3xl: 48rem;
  --container-4xl: 56rem;
  --container-5xl: 64rem;
  --container-6xl: 72rem;
  --container-7xl: 80rem;

  /* Typography */
  --text-xs: 0.75rem;
  --text-xs--line-height: calc(1 / 0.75);
  --text-sm: 0.875rem;
  --text-sm--line-height: calc(1.25 / 0.875);
  --text-base: 1rem;
  --text-base--line-height: calc(1.5 / 1);
  --text-lg: 1.125rem;
  --text-lg--line-height: calc(1.75 / 1.125);
  --text-xl: 1.25rem;
  --text-xl--line-height: calc(1.75 / 1.25);
  --text-2xl: 1.5rem;
  --text-2xl--line-height: calc(2 / 1.5);
  --text-3xl: 1.875rem;
  --text-3xl--line-height: calc(2.25 / 1.875);
  --text-4xl: 2.25rem;
  --text-4xl--line-height: calc(2.5 / 2.25);
  --text-5xl: 3rem;
  --text-5xl--line-height: 1;
  --text-6xl: 3.75rem;
  --text-6xl--line-height: 1;
  --text-7xl: 4.5rem;
  --text-7xl--line-height: 1;
  --text-8xl: 6rem;
  --text-8xl--line-height: 1;
  --text-9xl: 8rem;
  --text-9xl--line-height: 1;

  /* Font weights */
  --font-weight-thin: 100;
  --font-weight-extralight: 200;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;

  /* Letter spacing */
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0em;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;

  /* Line heights */
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  /* Border radius */
  --radius-xs: 0.125rem;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-4xl: 2rem;

  /* Shadows */
  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg:
    0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl:
    0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  /* Inset shadows */
  --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);
  --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
  --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);

  /* Drop shadows */
  --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);
  --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);
  --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);
  --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
  --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
  --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);

  /* Blur */
  --blur-xs: 4px;
  --blur-sm: 8px;
  --blur-md: 12px;
  --blur-lg: 16px;
  --blur-xl: 24px;
  --blur-2xl: 40px;
  --blur-3xl: 64px;

  /* Perspective */
  --perspective-dramatic: 100px;
  --perspective-near: 300px;
  --perspective-normal: 500px;
  --perspective-midrange: 800px;
  --perspective-distant: 1200px;

  /* Aspect ratios */
  --aspect-video: 16 / 9;

  /* Transitions */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  /* Animations */
  --animate-spin: spin 1s linear infinite;
  --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  --animate-bounce: bounce 1s infinite;

  /* Animation keyframes */
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
}
```
