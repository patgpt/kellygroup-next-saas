# Neumorphic Design System: Components

## 3. Components

This section details how to style foundational UI elements consistently, reflecting various states including default, hover, pressed, and disabled.

### 3.1 Buttons

#### Default State

```css
.button {
  background: #f0f0f0;
  box-shadow:
    5px 5px 10px #d1d1d1,
    -5px -5px 10px #ffffff;
  border-radius: 8px;
  padding: 12px 24px;
  transition: all 0.2s ease;
}
```

#### States

- **Default**: Raised look with light top-left shadow (#FFFFFF, 5px blur) and dark bottom-right shadow (#D1D1D1, 5px blur)
- **Pressed**: Invert shadows (dark top-left, light bottom-right) to appear depressed
- **Hover/Focus**: Increase brightness by 10% or add a faint inner glow (#FFFFFF, 2px blur)
- **Disabled**: Reduce shadow opacity to 10% and element opacity to 60%

### 3.2 Cards

#### Structure

```css
.card {
  background: #f5f5f5;
  box-shadow:
    10px 10px 20px #d1d1d1,
    -10px -10px 20px #ffffff;
  border-radius: 16px;
  padding: 24px;
}
```

#### Properties

- **Surface**: Match background hue with a slight shift (#F5F5F5 on #F0F0F0)
- **Depth**: Deeper edge shadow (#D1D1D1, 10px blur) for layering
- **Corners**: Rounded, 8px radius minimum
- **Content Spacing**: Consistent internal padding (24px recommended)

### 3.3 Toggles & Switches

#### States

```css
.toggle {
  /* Off State */
  background: #f0f0f0;
  box-shadow:
    inset 5px 5px 10px #d1d1d1,
    inset -5px -5px 10px #ffffff;

  /* On State */
  &.active {
    box-shadow:
      5px 5px 10px #d1d1d1,
      -5px -5px 10px #ffffff;
  }
}
```

#### Properties

- **Off State**: Recessed with dark top-left shadow, light bottom-right shadow
- **On State**: Raised with standard Neumorphic shadows (light top-left, dark bottom-right)
- **Transition**: Smooth animation, 150–250ms, eased timing
- **Size**: Minimum 40px touch target

### 3.4 Input Fields

#### Default Style

```css
.input {
  background: #f0f0f0;
  box-shadow:
    inset 5px 5px 10px #d1d1d1,
    inset -5px -5px 10px #ffffff;
  border-radius: 8px;
  padding: 12px 16px;
}
```

#### States

- **Default**: Recessed style (dark top-left, light bottom-right shadows)
- **Focus**: Add a subtle glow (#A3BFFA, 3px blur) around edges
- **Disabled**: Reduce shadow opacity to 10% and contrast by 20%
- **Error**: Add a subtle red tint or outline

### 3.5 Text and Icons

#### Typography

```css
.text {
  color: #333333;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
}

.heading {
  color: #333333;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
}
```

#### Icon Treatment

```css
.icon {
  width: 24px;
  height: 24px;
  stroke-width: 2px;
  fill: none;
  stroke: #333333;
}
```

#### Guidelines

- **Text**: Use legible typography (16px, medium weight) with WCAG-compliant contrast
- **Icons**: Clear, bold outlines; supplement shadows with shape for visibility
- **Spacing**: Maintain consistent spacing between text and icons
- **Color**: Ensure sufficient contrast against backgrounds

### Component Best Practices

1. **Consistency**

   - Use standardized shadow values
   - Maintain uniform border radius
   - Apply consistent spacing

2. **Accessibility**

   - Ensure touch targets are at least 44x44px
   - Maintain WCAG 2.1 AA contrast ratios
   - Provide clear focus indicators

3. **Performance**

   - Optimize shadow rendering
   - Use hardware acceleration for animations
   - Minimize nested shadow elements

4. **Responsiveness**
   - Scale components appropriately
   - Adjust shadow sizes for different screens
   - Maintain touch-friendly sizes on mobile

### Component Composition

When combining components:

1. **Layering**

   - Maintain clear visual hierarchy
   - Use consistent elevation levels
   - Avoid excessive shadow stacking

2. **Spacing**

   - Use consistent gaps between elements
   - Maintain adequate white space
   - Follow a uniform grid system

3. **Interaction**

   - Ensure predictable behavior
   - Provide clear feedback
   - Maintain smooth transitions

4. **Maintenance**
   - Document component variants
   - Track state management
   - Version control changes
