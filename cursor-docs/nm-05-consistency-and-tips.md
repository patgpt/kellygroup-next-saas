# Neumorphic Design System: Consistency & Practical Tips

## 7. Consistency Guidelines

### 7.1 Shadow Depth

#### Standard Shadow Values

```css
:root {
  /* Light shadows */
  --shadow-light-sm: -2px -2px 4px rgba(255, 255, 255, 0.8);
  --shadow-light-md: -5px -5px 10px rgba(255, 255, 255, 0.8);
  --shadow-light-lg: -10px -10px 20px rgba(255, 255, 255, 0.8);

  /* Dark shadows */
  --shadow-dark-sm: 2px 2px 4px rgba(209, 209, 209, 0.5);
  --shadow-dark-md: 5px 5px 10px rgba(209, 209, 209, 0.5);
  --shadow-dark-lg: 10px 10px 20px rgba(209, 209, 209, 0.5);
}
```

#### Usage Tokens

```css
.element {
  /* Small elevation */
  box-shadow: var(--shadow-dark-sm), var(--shadow-light-sm);

  /* Medium elevation */
  box-shadow: var(--shadow-dark-md), var(--shadow-light-md);

  /* Large elevation */
  box-shadow: var(--shadow-dark-lg), var(--shadow-light-lg);
}
```

### 7.2 Corner Radius

```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
}

.element {
  border-radius: var(--radius-md);
}
```

### 7.3 Color Palette

```css
:root {
  /* Light mode */
  --surface-light: #f0f0f0;
  --surface-light-elevated: #f5f5f5;

  /* Dark mode */
  --surface-dark: #333333;
  --surface-dark-elevated: #3c3c3c;

  /* Accent colors */
  --accent-primary: #a3bffa;
  --accent-success: #22c55e;
  --accent-warning: #f59e0b;
  --accent-error: #ef4444;
}
```

### 7.4 Typography

```css
:root {
  /* Font sizes */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;

  /* Line heights */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;

  /* Font weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

## 8. Light vs Dark Mode

### 8.1 Light Mode

```css
:root {
  /* Light mode variables */
  --bg-color: #f0f0f0;
  --shadow-light: rgba(255, 255, 255, 0.8);
  --shadow-dark: rgba(209, 209, 209, 0.5);
  --text-primary: #333333;
  --text-secondary: #666666;
}

.neumorphic-light {
  background-color: var(--bg-color);
  box-shadow:
    5px 5px 10px var(--shadow-dark),
    -5px -5px 10px var(--shadow-light);
}
```

### 8.2 Dark Mode

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode variables */
    --bg-color: #333333;
    --shadow-light: rgba(85, 85, 85, 0.25);
    --shadow-dark: rgba(0, 0, 0, 0.25);
    --text-primary: #ffffff;
    --text-secondary: #a0a0a0;
  }
}

.neumorphic-dark {
  background-color: var(--bg-color);
  box-shadow:
    5px 5px 10px var(--shadow-dark),
    -5px -5px 10px var(--shadow-light);
}
```

## 9. Background & Surface Treatment

### 9.1 Background Styles

```css
.background {
  /* Solid background */
  background-color: var(--bg-color);

  /* Subtle gradient */
  background: linear-gradient(
    145deg,
    var(--bg-color),
    color-mix(in oklch, var(--bg-color), black 5%)
  );
}
```

### 9.2 Surface Elevation

```css
.surface {
  /* Base surface */
  background-color: var(--bg-color);

  /* Elevated surface */
  &.elevated {
    background-color: color-mix(in oklch, var(--bg-color), white 5%);
    box-shadow: var(--shadow-dark-md), var(--shadow-light-md);
  }
}
```

## 10. Practical Tips & Limitations

### 10.1 Performance Optimization

```css
/* Optimize shadow rendering */
.optimized-element {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Reduce shadow complexity on mobile */
@media (max-width: 768px) {
  .element {
    --shadow-blur: 5px;
    --shadow-spread: 1px;
  }
}
```

### 10.2 Size Constraints

```css
/* Minimum size for neumorphic elements */
.neumorphic-element {
  min-width: 40px;
  min-height: 40px;
}

/* Maximum shadow size */
.neumorphic-large {
  --max-shadow-size: 20px;
  box-shadow:
    var(--max-shadow-size) var(--max-shadow-size)
      calc(var(--max-shadow-size) * 2) var(--shadow-dark),
    calc(var(--max-shadow-size) * -1) calc(var(--max-shadow-size) * -1)
      calc(var(--max-shadow-size) * 2) var(--shadow-light);
}
```

### 10.3 Browser Support

```css
/* Fallbacks for older browsers */
.neumorphic-element {
  /* Base styles */
  border: 1px solid rgba(0, 0, 0, 0.1);

  /* Modern browsers */
  @supports (box-shadow: 0 0 0 0 rgb(0 0 0 / 0)) {
    border: none;
    box-shadow: var(--shadow-dark-md), var(--shadow-light-md);
  }
}
```

## 11. Advanced Techniques

### 11.1 Dynamic Shadows

```css
/* Shadow direction follows mouse position */
.dynamic-shadow {
  --x: 50%;
  --y: 50%;

  background: var(--bg-color);
  box-shadow:
    calc(var(--x) - 50%) calc(var(--y) - 50%) 20px var(--shadow-dark),
    calc(50% - var(--x)) calc(50% - var(--y)) 20px var(--shadow-light);
}
```

### 11.2 Animated States

```css
/* Smooth state transitions */
.animated-element {
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      8px 8px 16px var(--shadow-dark),
      -8px -8px 16px var(--shadow-light);
  }

  &:active {
    transform: translateY(0);
    box-shadow:
      inset 5px 5px 10px var(--shadow-dark),
      inset -5px -5px 10px var(--shadow-light);
  }
}
```

### 11.3 Complex Shapes

```css
/* Non-rectangular neumorphic elements */
.complex-shape {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  background: var(--bg-color);
  box-shadow:
    5px 5px 10px var(--shadow-dark),
    -5px -5px 10px var(--shadow-light);
}
```

## Implementation Checklist

1. **Setup**

   - [ ] Define CSS variables
   - [ ] Set up color schemes
   - [ ] Create shadow utilities
   - [ ] Establish typography scale

2. **Components**

   - [ ] Build basic elements
   - [ ] Create interactive states
   - [ ] Implement dark mode
   - [ ] Test accessibility

3. **Optimization**

   - [ ] Audit performance
   - [ ] Add browser fallbacks
   - [ ] Optimize for mobile
   - [ ] Document patterns

4. **Testing**
   - [ ] Cross-browser testing
   - [ ] Device testing
   - [ ] Accessibility validation
   - [ ] Performance benchmarking
