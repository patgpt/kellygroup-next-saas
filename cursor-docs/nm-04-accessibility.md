# Neumorphic Design System: Accessibility

## 6. Accessibility (A11Y)

Neumorphism's subtle contrasts require strict accessibility rules to ensure usability for all users.

### 6.1 Contrast Requirements

#### WCAG 2.1 AA Standards

- Normal text: 4.5:1 minimum contrast ratio
- Large text (18pt+ or 14pt bold): 3:1 minimum contrast ratio
- UI components and graphical objects: 3:1 minimum contrast ratio

```css
/* Example of accessible text colors */
.text-default {
  /* Passes 4.5:1 contrast ratio */
  color: #333333; /* on #F0F0F0 background */
}

.text-large {
  /* Passes 3:1 contrast ratio */
  color: #666666; /* on #F0F0F0 background */
  font-size: 18px;
}
```

#### Shadow Contrast

```css
.neumorphic-element {
  /* Maintain readable contrast with shadows */
  background: #f0f0f0;
  box-shadow:
    5px 5px 10px rgba(209, 209, 209, 0.5),
    /* Darker shadow */ -5px -5px 10px rgba(255, 255, 255, 0.8); /* Lighter shadow */
}
```

### 6.2 Focus Indicators

#### Keyboard Navigation

```css
.interactive-element:focus-visible {
  /* High visibility focus ring */
  outline: 2px solid #a3bffa;
  outline-offset: 2px;
  box-shadow:
    5px 5px 10px #d1d1d1,
    -5px -5px 10px #ffffff,
    0 0 0 4px rgba(163, 191, 250, 0.2);
}
```

#### Focus Management

- Logical tab order
- Skip navigation links
- Visible focus states
- Focus trap for modals

### 6.3 Color Blindness & Low Vision

#### Color Independence

```css
/* Use patterns and shapes, not just color */
.status-indicator {
  /* Base styles */
  padding: 4px 8px;
  border-radius: 4px;

  /* Success state */
  &.success {
    background: #f0f0f0;
    box-shadow: inset 0 0 0 2px #22c55e;
    &::before {
      content: "✓";
      margin-right: 4px;
    }
  }

  /* Error state */
  &.error {
    background: #f0f0f0;
    box-shadow: inset 0 0 0 2px #ef4444;
    &::before {
      content: "!";
      margin-right: 4px;
    }
  }
}
```

#### Text Scaling

```css
/* Support text scaling up to 200% */
.text-content {
  font-size: 16px;
  line-height: 1.5;
  max-width: 65ch;
}

@media screen and (max-width: 480px) {
  .text-content {
    font-size: calc(16px + 0.5vw);
  }
}
```

### 6.4 Screen Reader Support

#### ARIA Labels

```html
<button class="neumorphic-button" aria-label="Submit form" aria-pressed="false">
  <span class="icon" aria-hidden="true">→</span>
  <span class="text">Submit</span>
</button>
```

#### Live Regions

```html
<div class="status-message" role="status" aria-live="polite">
  Form submitted successfully
</div>
```

### 6.5 Reduced Motion

```css
/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 6.6 High Contrast Mode

```css
@media (prefers-contrast: high) {
  .neumorphic-element {
    /* Enhance visibility in high contrast mode */
    box-shadow: none;
    border: 2px solid currentColor;
  }

  .interactive-element:focus-visible {
    outline: 3px solid currentColor;
    outline-offset: 3px;
  }
}
```

### Best Practices

1. **Semantic HTML**

   - Use appropriate HTML elements
   - Maintain logical document structure
   - Implement ARIA when needed

2. **Keyboard Accessibility**

   - All interactive elements focusable
   - Visible focus indicators
   - Logical tab order
   - Keyboard shortcuts where appropriate

3. **Screen Reader Support**

   - Descriptive alt text
   - ARIA labels and roles
   - Live regions for dynamic content
   - Hidden decorative elements

4. **Visual Accessibility**
   - Sufficient color contrast
   - Color-independent information
   - Scalable text
   - Clear visual hierarchy

### Testing Guidelines

1. **Automated Testing**

   - Use accessibility testing tools
   - Regular automated audits
   - CI/CD integration

2. **Manual Testing**

   - Keyboard navigation testing
   - Screen reader testing
   - Color contrast verification
   - Zoom level testing

3. **User Testing**
   - Include users with disabilities
   - Test with assistive technologies
   - Gather feedback on usability

### Implementation Checklist

1. **Structure**

   - [ ] Semantic HTML
   - [ ] Logical heading hierarchy
   - [ ] Proper landmark roles
   - [ ] Skip navigation links

2. **Interaction**

   - [ ] Keyboard accessibility
   - [ ] Focus management
   - [ ] Touch targets (44x44px minimum)
   - [ ] Error handling

3. **Visual**

   - [ ] Color contrast compliance
   - [ ] Color-independent design
   - [ ] Responsive text sizing
   - [ ] High contrast support

4. **Content**
   - [ ] Alt text for images
   - [ ] Form labels
   - [ ] Error messages
   - [ ] Status updates

### Resources

1. **Tools**

   - WAVE Web Accessibility Tool
   - axe DevTools
   - Color Contrast Analyzer
   - Screen readers (NVDA, VoiceOver)

2. **Guidelines**
   - WCAG 2.1 Guidelines
   - WAI-ARIA Practices
   - Section 508 Requirements
   - European EN 301 549
