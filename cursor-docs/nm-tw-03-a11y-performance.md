# Neumorphic Design System: Accessibility & Performance

## 6. Accessibility (A11y)

### 6.1 Color Contrast

#### WCAG 2.1 AA Requirements

- Normal text: 4.5:1 minimum contrast ratio
- Large text (18pt+ or 14pt bold): 3:1 minimum contrast ratio
- UI components: 3:1 minimum contrast ratio

```css
@theme {
  /* Accessible color combinations */
  --color-text: oklch(0.2 0.02 200); /* On light background */
  --color-bg: oklch(0.95 0.01 200); /* Background */
  --color-accent: oklch(0.75 0.15 260); /* Accent color */
}
```

### 6.2 Focus Management

#### Focus Indicators

```tsx
const Button: React.FC<ButtonProps> = ({ className = "", ...props }) => (
  <button
    className={`focus-visible:outline-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className} `}
    {...props}
  />
);
```

#### Focus Order

- Logical tab sequence
- Skip navigation links
- Focus trapping in modals

### 6.3 ARIA Attributes

#### Interactive Elements

```tsx
const Toggle: React.FC<ToggleProps> = ({ checked, ...props }) => (
  <button
    role="switch"
    aria-checked={checked}
    aria-label="Toggle setting"
    {...props}
  />
);
```

#### Status Updates

```tsx
const Alert: React.FC<AlertProps> = ({ message }) => (
  <div role="alert" aria-live="polite" className="text-text dark:text-text">
    {message}
  </div>
);
```

### 6.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
```

### 6.5 Screen Reader Support

#### Hidden Elements

```tsx
const VisuallyHidden: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <span className="sr-only">{children}</span>;
```

#### Descriptive Labels

```tsx
const IconButton: React.FC<IconButtonProps> = ({ icon, label }) => (
  <button aria-label={label}>
    <span aria-hidden="true">{icon}</span>
  </button>
);
```

## 7. Performance Optimization

### 7.1 Shadow Optimization

#### Efficient Shadows

```css
@theme {
  /* Limited shadow layers */
  --shadow-raised:
    5px 5px 10px var(--color-shadow-dark),
    -5px -5px 10px var(--color-shadow-light);
}
```

#### Mobile Optimization

```css
@media (max-width: 768px) {
  @theme {
    /* Reduced shadow complexity */
    --shadow-raised:
      3px 3px 6px var(--color-shadow-dark),
      -3px -3px 6px var(--color-shadow-light);
  }
}
```

### 7.2 Component Optimization

#### Server Components

```tsx
// Static content - Server Component
export const Card: React.FC<CardProps> = ({ children }) => (
  <div className="bg-surface shadow-raised">{children}</div>
);

// Interactive content - Client Component
("use client");
export const Button: React.FC<ButtonProps> = ({ children }) => (
  <button className="bg-surface shadow-raised">{children}</button>
);
```

#### Lazy Loading

```tsx
// Lazy load complex components
const ComplexChart = dynamic(() => import("./ComplexChart"), {
  loading: () => <div className="bg-surface animate-pulse" />,
});
```

### 7.3 CSS Optimization

#### Efficient Utilities

```css
/* Prefer utility classes over custom CSS */
.button {
  @apply bg-surface shadow-raised rounded-default;
}
```

#### Transition Optimization

```css
/* Limit transitions to specific properties */
.element {
  @apply transition-shadow duration-200 ease-in-out;
}
```

### 7.4 Image Optimization

#### Next.js Image Component

```tsx
import Image from "next/image";

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => (
  <div className="shadow-raised overflow-hidden rounded-full">
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      className="object-cover"
    />
  </div>
);
```

## 8. Best Practices

### 8.1 Accessibility Checklist

1. **Color and Contrast**

   - [ ] WCAG 2.1 AA compliant contrast ratios
   - [ ] Color not sole means of conveying information
   - [ ] Dark mode consideration

2. **Keyboard Navigation**

   - [ ] All interactive elements focusable
   - [ ] Visible focus indicators
   - [ ] Logical tab order
   - [ ] Skip links for navigation

3. **ARIA Implementation**

   - [ ] Proper roles and attributes
   - [ ] Live regions for updates
   - [ ] Descriptive labels
   - [ ] Error messaging

4. **Screen Readers**
   - [ ] Alternative text for images
   - [ ] Hidden descriptive text
   - [ ] Semantic HTML
   - [ ] Meaningful headings

### 8.2 Performance Checklist

1. **Component Architecture**

   - [ ] Server vs Client components
   - [ ] Lazy loading where appropriate
   - [ ] Optimized images
   - [ ] Minimal client-side JavaScript

2. **CSS Optimization**

   - [ ] Efficient utility usage
   - [ ] Limited shadow complexity
   - [ ] Optimized transitions
   - [ ] Mobile considerations

3. **Runtime Performance**

   - [ ] Debounced event handlers
   - [ ] Memoized calculations
   - [ ] Efficient re-renders
   - [ ] Bundle size optimization

4. **Loading Performance**
   - [ ] Progressive enhancement
   - [ ] Loading states
   - [ ] Code splitting
   - [ ] Asset optimization

### 8.3 Testing Guidelines

1. **Accessibility Testing**

   - Use axe-core for automated testing
   - Manual keyboard navigation testing
   - Screen reader testing
   - Color contrast verification

2. **Performance Testing**

   - Lighthouse audits
   - Core Web Vitals monitoring
   - Bundle size analysis
   - Runtime performance profiling

3. **Cross-browser Testing**
   - Modern browser support
   - Mobile device testing
   - Responsive design verification
   - Feature detection
