# Neumorphic Design System: UX & Interaction

## 4. UX & Interaction Guidelines

Ensure interactions are intuitive and tactile with clear visual feedback while maintaining the soft, modern aesthetic of Neumorphism.

### 4.1 State Clarity

Each interactive element must have distinct visuals for different states:

#### Default State

```css
.element {
  background: #f0f0f0;
  box-shadow:
    5px 5px 10px #d1d1d1,
    -5px -5px 10px #ffffff;
  transition: all 0.2s ease;
}
```

#### Hover State

```css
.element:hover {
  filter: brightness(1.1);
  box-shadow:
    6px 6px 12px #d1d1d1,
    -6px -6px 12px #ffffff;
}
```

#### Pressed State

```css
.element:active {
  box-shadow:
    inset 5px 5px 10px #d1d1d1,
    inset -5px -5px 10px #ffffff;
  transform: scale(0.98);
}
```

#### Disabled State

```css
.element:disabled {
  opacity: 0.6;
  box-shadow:
    2px 2px 4px #d1d1d1,
    -2px -2px 4px #ffffff;
  cursor: not-allowed;
}
```

### 4.2 Animation Guidelines

#### Transition Properties

- Duration: 150-250ms
- Timing: ease, ease-in-out
- Properties: box-shadow, transform, opacity

```css
.element {
  transition:
    box-shadow 200ms ease,
    transform 200ms ease,
    opacity 200ms ease;
}
```

#### Animation Principles

1. **Subtle Movement**

   - Use small scale changes (0.98-1.02)
   - Gentle shadow transitions
   - Smooth state changes

2. **Performance**

   - Use hardware-accelerated properties
   - Avoid animating blur values
   - Optimize shadow rendering

3. **Accessibility**
   - Respect reduced-motion preferences
   - Maintain WCAG compliance
   - Ensure keyboard navigation

### 4.3 Hover Effects

#### Basic Hover

```css
.element:hover {
  filter: brightness(1.1);
}
```

#### Enhanced Hover

```css
.element:hover {
  box-shadow:
    8px 8px 16px #d1d1d1,
    -8px -8px 16px #ffffff;
  transform: translateY(-1px);
}
```

#### Hover Guidelines

1. **Subtlety**

   - Avoid dramatic changes
   - Maintain soft aesthetic
   - Use consistent effects

2. **Feedback**
   - Clear state indication
   - Immediate response
   - Smooth transitions

### 4.4 Pressed Feedback

#### Basic Press Effect

```css
.element:active {
  box-shadow:
    inset 5px 5px 10px #d1d1d1,
    inset -5px -5px 10px #ffffff;
}
```

#### Enhanced Press Effect

```css
.element:active {
  box-shadow:
    inset 5px 5px 10px #d1d1d1,
    inset -5px -5px 10px #ffffff;
  transform: scale(0.98);
  filter: brightness(0.95);
}
```

### 4.5 Focus States

#### Keyboard Focus

```css
.element:focus-visible {
  outline: 2px solid #a3bffa;
  outline-offset: 2px;
  box-shadow:
    5px 5px 10px #d1d1d1,
    -5px -5px 10px #ffffff,
    0 0 0 4px rgba(163, 191, 250, 0.2);
}
```

#### Focus Guidelines

1. **Visibility**

   - Clear focus indicators
   - High contrast outlines
   - Consistent styling

2. **Accessibility**
   - WCAG 2.1 compliance
   - Keyboard navigation
   - Screen reader support

### 4.6 Interactive Patterns

#### Button Interaction

```css
.button {
  background: #f0f0f0;
  box-shadow:
    5px 5px 10px #d1d1d1,
    -5px -5px 10px #ffffff;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }

  &:active {
    box-shadow:
      inset 5px 5px 10px #d1d1d1,
      inset -5px -5px 10px #ffffff;
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid #a3bffa;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
```

#### Toggle Interaction

```css
.toggle {
  background: #f0f0f0;
  box-shadow:
    inset 5px 5px 10px #d1d1d1,
    inset -5px -5px 10px #ffffff;
  transition: all 0.2s ease;

  &.active {
    background: #f0f0f0;
    box-shadow:
      5px 5px 10px #d1d1d1,
      -5px -5px 10px #ffffff;
  }

  &:focus-visible {
    outline: 2px solid #a3bffa;
    outline-offset: 2px;
  }
}
```

### Best Practices

1. **Consistency**

   - Use standard timing
   - Maintain uniform effects
   - Follow established patterns

2. **Performance**

   - Optimize animations
   - Minimize repaints
   - Use efficient properties

3. **Accessibility**

   - Support keyboard navigation
   - Provide clear feedback
   - Maintain WCAG compliance

4. **User Experience**
   - Immediate response
   - Clear state changes
   - Intuitive behavior

### Implementation Tips

1. **Animation Performance**

   ```css
   .element {
     will-change: transform;
     backface-visibility: hidden;
     transform: translateZ(0);
   }
   ```

2. **Reduced Motion**

   ```css
   @media (prefers-reduced-motion: reduce) {
     .element {
       transition: none;
       animation: none;
     }
   }
   ```

3. **Touch Device Optimization**

   ```css
   @media (hover: none) {
     .element:hover {
       /* Remove hover effects */
     }
   }
   ```

4. **High Contrast Mode**
   ```css
   @media (prefers-contrast: high) {
     .element {
       outline: 2px solid currentColor;
     }
   }
   ```
