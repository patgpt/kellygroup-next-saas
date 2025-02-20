# Neumorphic React TypeScript Components

## 5. React TypeScript Components

### 5.1 Button (Atom) - Client Component

```tsx
"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => (
  <button
    className={`bg-surface rounded-default shadow-raised active:shadow-pressed focus-visible:outline-accent dark:bg-surface dark:shadow-raised transition-shadow duration-200 ease-in-out hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:shadow-none ${className} `}
    {...props}
  >
    {children}
  </button>
);
```

### 5.2 Card (Organism) - Server Component

```tsx
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div
    className={`bg-surface rounded-default shadow-raised dark:bg-surface dark:shadow-raised p-6 ${className} `}
  >
    {children}
  </div>
);
```

### 5.3 Toggle (Atom) - Client Component

```tsx
"use client";

import React, { useState } from "react";

interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked = false,
  onChange,
  className = "",
}) => {
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
      className={`bg-surface rounded-default focus-visible:outline-accent dark:bg-surface flex h-6 w-12 items-center transition-shadow duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 ${isChecked ? "shadow-raised" : "shadow-pressed"} ${className} `}
    >
      <span
        className={`bg-accent h-4 w-4 rounded-full transition-transform duration-200 ${isChecked ? "translate-x-6" : "translate-x-1"} `}
      />
    </button>
  );
};
```

### 5.4 Input (Atom) - Client Component

```tsx
"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className = "", ...props }) => (
  <input
    className={`bg-surface rounded-default shadow-pressed text-text focus-visible:outline-accent dark:bg-surface dark:text-text p-2 transition-shadow duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 disabled:opacity-60 ${className} `}
    {...props}
  />
);
```

### 5.5 Form Group (Molecule) - Server Component

```tsx
import React from "react";

interface FormGroupProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  htmlFor,
  error,
  children,
  className = "",
}) => (
  <div className={`space-y-2 ${className}`}>
    <label htmlFor={htmlFor} className="text-text dark:text-text block">
      {label}
    </label>
    {children}
    {error && <p className="text-error dark:text-error text-sm">{error}</p>}
  </div>
);
```

### 5.6 Navigation (Organism) - Client Component

```tsx
"use client";

import React from "react";
import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
}

interface NavigationProps {
  items: NavItem[];
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  className = "",
}) => (
  <nav
    className={`bg-surface shadow-raised rounded-default dark:bg-surface dark:shadow-raised p-4 ${className} `}
  >
    <ul className="flex gap-4">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="text-text hover:text-accent dark:text-text transition-colors duration-200"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
```

### Component Best Practices

1. **Type Safety**

   - Extend HTML attributes where appropriate
   - Use explicit interface definitions
   - Include proper React types

2. **Server vs Client**

   - Use server components for static elements
   - Add 'use client' for interactive components
   - Consider performance implications

3. **Accessibility**

   - Include proper ARIA attributes
   - Ensure keyboard navigation
   - Maintain focus management

4. **Styling**

   - Use Tailwind utility classes
   - Maintain consistent spacing
   - Follow Neumorphic principles

5. **Props**
   - Accept className for customization
   - Use proper defaults
   - Spread additional props

### Component Usage Example

```tsx
import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/organisms/Card";
import { Toggle } from "@/components/atoms/Toggle";
import { Input } from "@/components/atoms/Input";
import { FormGroup } from "@/components/molecules/FormGroup";

export default function ContactForm() {
  return (
    <Card className="mx-auto max-w-md">
      <h2 className="text-text dark:text-text mb-6 text-xl font-medium">
        Contact Us
      </h2>

      <FormGroup label="Name" htmlFor="name" className="mb-4">
        <Input
          id="name"
          name="name"
          placeholder="Enter your name"
          className="w-full"
        />
      </FormGroup>

      <FormGroup label="Email" htmlFor="email" className="mb-4">
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          className="w-full"
        />
      </FormGroup>

      <FormGroup label="Newsletter" htmlFor="newsletter" className="mb-6">
        <Toggle id="newsletter" />
      </FormGroup>

      <Button className="w-full">Submit</Button>
    </Card>
  );
}
```
