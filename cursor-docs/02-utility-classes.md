   # Styling with Utility Classes

   Building complex components from a constrained set of primitive utilities.

   ## Overview

   You style things with Tailwind by combining many single-purpose presentational classes (utility classes) directly in your markup:

   ```html
   <div
   class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800"
   >
   <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
   <div>
      <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
      <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
   </div>
   </div>
   ```

   ## Common Utility Categories

   - **Layout**: `flex`, `grid`, `block`, `inline`, etc.
   - **Spacing**: `p-6`, `m-4`, `gap-x-4`, etc.
   - **Sizing**: `w-full`, `h-screen`, `max-w-sm`, etc.
   - **Typography**: `text-xl`, `font-medium`, `tracking-wide`, etc.
   - **Colors**: `text-black`, `bg-white`, `border-gray-200`, etc.
   - **Effects**: `shadow-lg`, `opacity-50`, `blur-sm`, etc.
   - **Borders**: `rounded-xl`, `border`, `outline`, etc.

   ## Benefits of Utility Classes

   1. **Faster Development**

      - No time spent on naming classes
      - No context switching between HTML and CSS files
      - Rapid prototyping and iteration

   2. **Safer Changes**

      - Classes only affect the element they're applied to
      - No unintended side effects
      - Easy to understand impact of changes

   3. **Better Maintenance**

      - Clear relationship between styles and markup
      - No need to maintain separate CSS files
      - Easy to update and modify styles

   4. **Code Portability**

      - Self-contained styling
      - Easy to copy and paste UI components
      - Works across different projects

   5. **CSS Growth Control**
      - Reusable utility classes
      - No duplicate CSS
      - Predictable file size

   ## Comparison with Inline Styles

   While utility classes might seem similar to inline styles, they offer several advantages:

   1. **Design Constraints**

      - Pre-defined design system
      - Consistent values
      - Better visual harmony

   2. **State Handling**

      - Support for hover, focus, etc.
      - Responsive variants
      - Dark mode support

   3. **Media Queries**
      - Breakpoint support
      - Container queries
      - Feature queries

   Example with states and responsiveness:

   ```html
   <button class="bg-blue-500 hover:bg-blue-700 md:px-6 lg:px-8">Click me</button>
   ```

   ## Class Composition

   Tailwind supports combining multiple utilities that affect the same property:

   ```html
   <div class="blur-sm grayscale">
   <!-- Combined filter effects -->
   </div>
   ```

   This works through CSS variables:

   ```css
   .blur-sm {
   --tw-blur: blur(4px);
   filter: var(--tw-blur) var(--tw-grayscale);
   }
   .grayscale {
   --tw-grayscale: grayscale(100%);
   filter: var(--tw-blur) var(--tw-grayscale);
   }
   ```

   ## Using Arbitrary Values

   When you need values outside your theme:

   ```html
   <div class="top-[117px] grid-cols-[1fr_500px_2fr] bg-[#bada55]">
   <!-- Custom values -->
   </div>
   ```

   ## Best Practices

   1. **Keep it Simple**

      - Use theme values when possible
      - Avoid arbitrary values unless necessary
      - Extract components for repeated patterns

   2. **Maintain Readability**

      - Group related utilities
      - Use line breaks for long class lists
      - Consider extracting complex patterns

   3. **Performance**

      - Use the built-in purge process
      - Avoid unnecessary arbitrary values
      - Leverage the design system

   4. **Component Extraction**
      - Extract repeated patterns
      - Use components for complex UI
      - Keep utilities for one-off styles

   ## Working with JavaScript Frameworks

   Tailwind works great with modern JavaScript frameworks:

   ```jsx
   function Button({ size, children }) {
   const sizeClasses = {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
   }[size];

   return <button className={`bg-blue-500 ${sizeClasses}`}>{children}</button>;
   }
   ```
