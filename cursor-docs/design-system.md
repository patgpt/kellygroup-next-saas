1. Introduction
   Neumorphism creates a soft, extruded look with:
   Subtle Shadows: Dual-shadow approach for depth.
   Minimal Palette: Monochromatic OKLCH colors with opacity adjustments.
   Smooth Interactions: Gentle transitions for states like hover and focus.
   Purpose: This document provides rules for an AI to implement a Neumorphic design system using Tailwind V4’s @theme for design tokens, leveraging generated utility classes (e.g., bg-surface, shadow-raised) and avoiding manual CSS variable references unless necessary.
2. Tailwind CSS V4 Setup
   2.1 Theme Configuration
   Define all design tokens in @theme within globals.css.
   Use OKLCH colors for consistent perception across devices.
   Avoid tailwind.config.js or :root for theme variables.
   globals.css Example:
   css
   @import "tailwindcss";

@theme {
/_ Colors (OKLCH: Lightness, Chroma, Hue) _/
--color-bg: oklch(0.95 0.01 200); /_ Light mode background _/
--color-surface: oklch(0.97 0.01 200); /_ Light mode surface _/
--color-shadow-light: oklch(1 0 0 / 0.2); /_ Highlight shadow _/
--color-shadow-dark: oklch(0 0 0 / 0.1); /_ Depth shadow _/
--color-accent: oklch(0.75 0.15 260); /_ Muted accent _/
--color-text: oklch(0.2 0.02 200); /_ Text _/

/_ Spacing _/
--spacing-6: 1.5rem;

/_ Radius _/
--radius-default: 0.5rem;

/_ Shadows _/
--shadow-raised: 5px 5px 10px var(--color-shadow-dark), -5px -5px 10px var(--color-shadow-light);
--shadow-pressed: inset 5px 5px 10px var(--color-shadow-dark), inset -5px -5px 10px var(--color-shadow-light);

/_ Dark Mode _/
@variant dark {
--color-bg: oklch(0.2 0.01 200);
--color-surface: oklch(0.25 0.01 200);
--color-shadow-light: oklch(1 0 0 / 0.1);
--color-shadow-dark: oklch(0 0 0 / 0.2);
--color-text: oklch(0.9 0.02 200);
}
}
Generated Utilities:
Colors: bg-bg, bg-surface, text-accent, shadow-dark/50.
Spacing: p-6.
Radius: rounded-default.
Shadows: shadow-raised, shadow-pressed.
2.2 Color Usage
Opacity: Adjust with / syntax (e.g., bg-shadow-dark/50 for 50% opacity).
Dark Mode: Use dark: prefix (e.g., dark:bg-bg).
Referencing in CSS: Use --color-\* variables when needed (e.g., background-color: var(--color-surface)).
2.3 Why @theme?
Automatically generates utility classes (e.g., bg-surface instead of bg-[var(--color-surface)]).
Supports dark mode and state variants (e.g., hover:bg-surface/90). 3. Design Pattern: Atomic Design
Atoms: Buttons, Inputs, Toggles.
Molecules: Form groups combining atoms.
Organisms: Cards, Headers combining molecules.
Templates/Pages: Full layouts.
Benefit: Ensures reusability and aligns with Tailwind’s utility-first approach. 4. Core Principles
4.1 Subtlety
Use shadow-raised and shadow-pressed for soft depth.
Prefer low-opacity colors (e.g., bg-surface/90) over stark contrasts.
4.2 Depth
Raised: shadow-raised.
Recessed: shadow-pressed.
4.3 Minimal Palette
Use bg-bg, bg-surface, text-accent, etc., from @theme.
Adjust opacity with / (e.g., text-shadow-dark/50). 5. React TypeScript Components
5.1 Button (Atom) - Client Component
tsx
'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
children: React.ReactNode;
className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
<button
className={`bg-surface rounded-default shadow-raised hover:brightness-110 active:shadow-pressed disabled:opacity-60 disabled:shadow-none transition-shadow duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 dark:bg-surface dark:shadow-raised ${className}`}
{...props}

>

    {children}

  </button>
);
5.2 Card (Organism) - Server Component
tsx
import React from 'react';

interface CardProps {
children: React.ReactNode;
className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => (

  <div
    className={`bg-surface rounded-default shadow-raised p-6 dark:bg-surface dark:shadow-raised ${className}`}
  >
    {children}
  </div>
);
5.3 Toggle (Atom) - Client Component
tsx
'use client';

import React, { useState } from 'react';

interface ToggleProps {
checked?: boolean;
onChange?: (checked: boolean) => void;
className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({ checked = false, onChange, className = '' }) => {
const [isChecked, setIsChecked] = useState(checked);

const handleToggle = () => {
setIsChecked(!isChecked);
onChange?.(!isChecked);
};

return (
<button
role="switch"
aria-checked={isChecked}
onClick={handleToggle}
className={`w-12 h-6 bg-surface rounded-default flex items-center transition-shadow duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent dark:bg-surface ${isChecked ? 'shadow-raised' : 'shadow-pressed'} ${className}`} >
<span
className={`w-4 h-4 bg-accent rounded-full transition-transform duration-200 ${isChecked ? 'translate-x-6' : 'translate-x-1'}`}
/>
</button>
);
};
5.4 Input (Atom) - Client Component
tsx
'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
className?: string;
}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => (
<input
className={`bg-surface rounded-default shadow-pressed p-2 text-text transition-shadow duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-60 dark:bg-surface dark:text-text ${className}`}
{...props}
/>
); 6. Accessibility (A11y)
Contrast: OKLCH values ensure WCAG 2.1 AA (e.g., text-text on bg-surface: 4.5:1).
Focus: Use focus-visible:outline-accent with 2px outline and offset.
ARIA: Add roles/attributes (e.g., role="switch", aria-checked). 7. Performance Optimization
Shadows: Limit to 2 layers (shadow-raised, shadow-pressed), blur ≤10px.
Transitions: Use transition-shadow duration-200 ease-in-out.
Server Components: Static elements (e.g., Card) reduce client-side JS. 8. AI Rules for Tailwind V4 and React TypeScript
8.1 Tailwind V4 Rules
Theme Definition:
Use @theme in globals.css for all tokens.
Define colors with OKLCH (e.g., oklch(0.95 0.01 200)).
Avoid --color-\*: initial unless replacing the entire palette.
Utility Classes:
Use generated utilities (e.g., bg-surface, shadow-raised) over [var(--color-surface)].
Adjust opacity with / (e.g., bg-shadow-dark/50).
Use arbitrary values sparingly (e.g., bg-[#123456]) only when necessary.
Dark Mode:
Define dark variants in @variant dark.
Apply with dark: prefix (e.g., dark:bg-bg).
States:
Use hover:, focus-visible:, active: for interactivity (e.g., hover:brightness-110).
Avoid focus: alone; prefer focus-visible: for A11y.
No Legacy Practices:
Avoid tailwind.config.js, @tailwind base, or :root.
8.2 React TypeScript Rules
Typing:
Extend HTML attributes (e.g., React.ButtonHTMLAttributes<HTMLButtonElement>).
Include className?: string and spread ...props.
Server vs. Client:
Use server components for static elements (no 'use client').
Use client components ('use client') for interactivity/state.
Props Over State:
Pass props instead of local state in server components.
8.3 Accessibility Rules
Contrast: Ensure 4.5:1 for normal text, 3:1 for large text using OKLCH values.
Focus: Apply focus-visible:outline-accent with 2px width and offset.
ARIA: Add relevant attributes (e.g., role="switch", aria-checked).
8.4 Performance Rules
Shadows: Use shadow-raised/shadow-pressed (2 layers, ≤10px blur).
Transitions: Limit to transition-shadow duration-200 ease-in-out.
Optimize: Prefer server components to minimize client-side JS.
8.5 Neumorphic Rules
Shadows: Use shadow-raised for raised, shadow-pressed for recessed.
Palette: Use bg-bg, bg-surface, text-accent, etc., with opacity adjustments (e.g., /90).
Subtlety: Avoid high-contrast utilities unless required for A11y. 9. Example Integration
Page Example (Next.js):
tsx
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/organisms/Card';
import { Toggle } from '@/components/atoms/Toggle';
import { Input } from '@/components/atoms/Input';

export default function Home() {
return (
<main className="bg-bg min-h-screen p-8 dark:bg-bg">
<Card className="max-w-md mx-auto">
<h1 className="text-xl font-medium text-text dark:text-text">Neumorphic Demo</h1>
<Button className="mt-4">Click Me</Button>
<Toggle className="mt-4" />
<Input placeholder="Type here" className="mt-4 w-full" />
</Card>
</main>
);
} 10. Conclusion
This guide ensures the AI implements a Neumorphic design system with Tailwind V4, using OKLCH colors and generated utility classes (e.g., bg-surface, shadow-raised) for simplicity and consistency. It provides a framework for typed, accessible, performant React components, leveraging server-side rendering and adhering to Atomic Design principles.
Key Updates from Provided Information
Color Handling:
Integrated OKLCH color usage with opacity adjustments (e.g., bg-shadow-dark/50).
Added dark mode support with dark: prefix and @variant dark.
Emphasized utility classes over manual variable references.
State Variants:
Incorporated hover:, focus-visible:, and active: for Neumorphic interactions.
Utility Usage:
Reinforced single-purpose utility classes (e.g., bg-surface, rounded-default) for layout and styling.
This version fully aligns with Tailwind V4’s color documentation and your Neumorphic requirements. Let me know if further adjustments are needed!
