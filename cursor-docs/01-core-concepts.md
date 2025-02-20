# Core Concepts

This guide covers the fundamental concepts of Tailwind CSS and how to use them effectively in your projects.

## Table of Contents

1. [Utility Classes](./02-utility-classes.md)
2. [Theme Variables](./03-theme-variables.md)
3. [Colors](./04-colors.md)
4. [Responsive Design](./05-responsive-design.md)
5. [States and Variants](./06-states.md)
6. [Custom Styles](./07-custom-styles.md)
7. [Functions and Directives](./08-functions.md)

## Overview

Tailwind CSS is a utility-first CSS framework that provides a set of pre-built classes to style your HTML elements. The framework is designed to be:

- Highly customizable
- Responsive by default
- Component-friendly
- Production-ready

The core philosophy is to provide low-level utility classes that can be composed to build any design, directly in your markup.

## Key Features

- **Utility-First**: Build complex components from a constrained set of primitive utilities
- **Responsive Design**: Every utility can be applied conditionally at different breakpoints
- **Dark Mode**: Built-in dark mode support with the `dark:` variant
- **Component Extraction**: Extract components when you find repeating patterns
- **Custom Styles**: Easy integration with custom CSS when needed
- **Theme Customization**: Extensive theming capabilities through CSS variables

## Getting Started

To get started with Tailwind CSS, make sure you have:

1. Added the viewport meta tag to your HTML:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

2. Imported Tailwind CSS in your main CSS file:

```css
@import "tailwindcss";
```

3. Started using utility classes in your HTML:

```html
<div class="mx-auto max-w-md p-6">
  <!-- Your content here -->
</div>
```

For detailed information about each concept, please refer to the specific guides listed in the Table of Contents.
