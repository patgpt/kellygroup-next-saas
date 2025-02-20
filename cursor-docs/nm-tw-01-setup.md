# Neumorphic Design System Guidelines for Tailwind CSS V4 and React TypeScript

## 1. Introduction

Neumorphism (Soft UI) blends skeuomorphism and flat design, using subtle shadows and highlights for a tactile aesthetic. This guide ensures consistent implementation with Tailwind CSS V4 (as of February 19, 2025) and React TypeScript, leveraging OKLCH colors, typed components, accessibility, performance, and server-side rendering.

### Key Features

- **Subtle Shadows**: Dual-shadow approach for depth
- **Minimal Palette**: Monochromatic OKLCH colors with opacity adjustments
- **Smooth Interactions**: Gentle transitions for states like hover and focus

### Purpose

This document provides rules for implementing a Neumorphic design system using Tailwind V4's `@theme` for design tokens, leveraging generated utility classes (e.g., `bg-surface`, `shadow-raised`) and avoiding manual CSS variable references unless necessary.

## 2. Tailwind CSS V4 Setup

### 2.1 Theme Configuration

Define all design tokens in `@theme` within `globals.css`:

```css
@import "tailwindcss";

@theme {
  /* Colors (OKLCH: Lightness, Chroma, Hue) */
  --color-bg: oklch(0.95 0.01 200); /* Light mode background */
  --color-surface: oklch(0.97 0.01 200); /* Light mode surface */
  --color-shadow-light: oklch(1 0 0 / 0.2); /* Highlight shadow */
  --color-shadow-dark: oklch(0 0 0 / 0.1); /* Depth shadow */
  --color-accent: oklch(0.75 0.15 260); /* Muted accent */
  --color-text: oklch(0.2 0.02 200); /* Text */

  /* Spacing */
  --spacing-6: 1.5rem;

  /* Radius */
  --radius-default: 0.5rem;

  /* Shadows */
  --shadow-raised:
    5px 5px 10px var(--color-shadow-dark),
    -5px -5px 10px var(--color-shadow-light);
  --shadow-pressed:
    inset 5px 5px 10px var(--color-shadow-dark),
    inset -5px -5px 10px var(--color-shadow-light);

  /* Dark Mode */
  @variant dark {
    --color-bg: oklch(0.2 0.01 200);
    --color-surface: oklch(0.25 0.01 200);
    --color-shadow-light: oklch(1 0 0 / 0.1);
    --color-shadow-dark: oklch(0 0 0 / 0.2);
    --color-text: oklch(0.9 0.02 200);
  }
}
```

### Generated Utilities

- **Colors**: `bg-bg`, `bg-surface`, `text-accent`, `shadow-dark/50`
- **Spacing**: `p-6`
- **Radius**: `rounded-default`
- **Shadows**: `shadow-raised`, `shadow-pressed`

### 2.2 Color Usage

1. **Opacity**

   - Adjust with `/` syntax (e.g., `bg-shadow-dark/50` for 50% opacity)
   - Use consistent opacity values for cohesion

2. **Dark Mode**

   - Use `dark:` prefix (e.g., `dark:bg-bg`)
   - Define dark mode colors in `@variant dark`

3. **CSS Variables**
   - Use `--color-*` variables only when necessary
   - Prefer generated utility classes

### 2.3 Why @theme?

1. **Automatic Utility Generation**

   - Creates utility classes (e.g., `bg-surface`)
   - Avoids manual CSS variable references

2. **State Support**

   - Works with dark mode
   - Supports hover and other states

3. **Consistency**
   - Centralizes design tokens
   - Ensures uniform values

## 3. Design Pattern: Atomic Design

### Structure

1. **Atoms**

   - Buttons
   - Inputs
   - Toggles

2. **Molecules**

   - Form groups
   - Input with label
   - Button groups

3. **Organisms**

   - Cards
   - Headers
   - Navigation

4. **Templates/Pages**
   - Full layouts
   - Page structures

### Benefits

- Ensures reusability
- Aligns with Tailwind's utility-first approach
- Maintains consistent component hierarchy

## 4. Core Principles

### 4.1 Subtlety

- Use `shadow-raised` and `shadow-pressed` for soft depth
- Prefer low-opacity colors (e.g., `bg-surface/90`)
- Avoid stark contrasts unless needed for accessibility

### 4.2 Depth

- **Raised Elements**: `shadow-raised`
- **Recessed Elements**: `shadow-pressed`
- **Transitions**: Smooth state changes

### 4.3 Minimal Palette

- Use theme colors (`bg-bg`, `bg-surface`, `text-accent`)
- Adjust opacity with `/` syntax
- Maintain consistent color usage
