# Neumorphic Design System: Implementation Rules

## 8. AI Rules for Tailwind V4 and React TypeScript

### 8.1 Tailwind V4 Rules

#### Theme Definition

1. **Use @theme**

   ```css
   @theme {
     --color-bg: oklch(0.95 0.01 200);
     --color-surface: oklch(0.97 0.01 200);
   }
   ```

   - Define all tokens in `globals.css`
   - Use OKLCH colors for consistency
   - Avoid `--color-*: initial` unless replacing entire palette

2. **Color Definition**

   ```css
   @theme {
     /* Correct */
     --color-primary: oklch(0.75 0.15 260);

     /* Incorrect */
     --color-primary: #5b8bf7;
   }
   ```

3. **Dark Mode**

   ```css
   @theme {
     --color-bg: oklch(0.95 0.01 200);

     @variant dark {
       --color-bg: oklch(0.2 0.01 200);
     }
   }
   ```

#### Utility Classes

1. **Use Generated Utilities**

   ```tsx
   // Correct
   <div className="bg-surface shadow-raised" />

   // Incorrect
   <div className="bg-[var(--color-surface)]" />
   ```

2. **Opacity Adjustments**

   ```tsx
   // Correct
   <div className="bg-shadow-dark/50" />

   // Incorrect
   <div className="bg-[rgba(var(--shadow-dark), 0.5)]" />
   ```

3. **Arbitrary Values**
   ```tsx
   // Use sparingly
   <div className="rotate-[17deg]" />
   ```

### 8.2 React TypeScript Rules

#### Component Types

1. **HTML Attribute Extension**

   ```tsx
   interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
     variant?: "primary" | "secondary";
     className?: string;
   }
   ```

2. **Children Typing**
   ```tsx
   interface CardProps {
     children: React.ReactNode;
     className?: string;
   }
   ```

#### Server vs Client Components

1. **Server Components**

   ```tsx
   // Static content
   export const Card: React.FC<CardProps> = ({ children }) => (
     <div className="bg-surface shadow-raised">{children}</div>
   );
   ```

2. **Client Components**

   ```tsx
   "use client";

   export const Button: React.FC<ButtonProps> = ({ children }) => (
     <button className="bg-surface shadow-raised">{children}</button>
   );
   ```

### 8.3 Accessibility Rules

#### Contrast Requirements

```css
@theme {
  /* Ensure 4.5:1 contrast ratio */
  --color-text: oklch(0.2 0.02 200);
  --color-bg: oklch(0.95 0.01 200);
}
```

#### Focus Management

```tsx
<button className="focus-visible:outline-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
  Click Me
</button>
```

#### ARIA Attributes

```tsx
<button role="switch" aria-checked={isChecked} aria-label="Toggle feature">
  {children}
</button>
```

### 8.4 Performance Rules

#### Shadow Optimization

```css
@theme {
  /* Maximum 2 layers, ≤10px blur */
  --shadow-raised:
    5px 5px 10px var(--color-shadow-dark),
    -5px -5px 10px var(--color-shadow-light);
}
```

#### Transition Limits

```css
.element {
  @apply transition-shadow duration-200 ease-in-out;
}
```

#### Component Optimization

```tsx
// Prefer server components
export const StaticContent = () => (
  <div className="bg-surface">Static content</div>
);

// Use client components only for interactivity
("use client");
export const InteractiveContent = () => {
  const [state, setState] = useState(false);
  return <button onClick={() => setState(!state)}>Toggle</button>;
};
```

### 8.5 Neumorphic Rules

#### Shadow Usage

```tsx
// Raised elements
<div className="shadow-raised" />

// Pressed elements
<div className="shadow-pressed" />

// Avoid multiple shadow layers
<div className="shadow-raised shadow-lg" /> // Incorrect
```

#### Color Application

```tsx
// Use theme colors
<div className="bg-surface text-text" />

// Adjust opacity for depth
<div className="bg-surface/90" />

// Maintain subtle contrast
<div className="text-text/80" />
```

## 9. Implementation Examples

### 9.1 Page Layout

```tsx
export default function Dashboard() {
  return (
    <main className="bg-bg dark:bg-bg min-h-screen p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="bg-surface shadow-raised rounded-default p-6">
          <h1 className="text-text text-2xl font-medium">Dashboard</h1>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h2 className="text-text mb-4 text-xl">Statistics</h2>
            <div className="space-y-2">
              <StatItem label="Users" value="1,234" />
              <StatItem label="Revenue" value="$5,678" />
            </div>
          </Card>

          <Card>
            <h2 className="text-text mb-4 text-xl">Actions</h2>
            <div className="space-y-4">
              <Button className="w-full">Create New</Button>
              <Button className="w-full">Export Data</Button>
            </div>
          </Card>

          <Card>
            <h2 className="text-text mb-4 text-xl">Settings</h2>
            <div className="space-y-4">
              <Toggle label="Notifications" />
              <Toggle label="Dark Mode" />
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
```

### 9.2 Form Implementation

```tsx
"use client";

export function ContactForm() {
  return (
    <Card className="mx-auto max-w-md">
      <h2 className="text-text mb-6 text-xl font-medium">Contact Us</h2>

      <form className="space-y-4">
        <FormGroup label="Name" htmlFor="name">
          <Input
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full"
          />
        </FormGroup>

        <FormGroup label="Email" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full"
          />
        </FormGroup>

        <FormGroup label="Message" htmlFor="message">
          <textarea
            id="message"
            name="message"
            className="bg-surface rounded-default shadow-pressed text-text focus-visible:outline-accent dark:bg-surface dark:text-text w-full p-2 focus-visible:outline focus-visible:outline-2"
            rows={4}
          />
        </FormGroup>

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </Card>
  );
}
```

## 10. Conclusion

This guide ensures consistent implementation of a Neumorphic design system with:

- Tailwind V4's `@theme` and utility classes
- TypeScript-powered React components
- Accessibility compliance
- Performance optimization
- Server-side rendering

Follow these rules to maintain:

- Design consistency
- Type safety
- Accessibility standards
- Performance benchmarks
- Code maintainability
