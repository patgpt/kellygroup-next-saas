# Core Concepts

## Hover, Focus, and Other States

Every utility class in Tailwind can be applied conditionally by adding a variant to the beginning of the class name that describes the condition you want to target.

For example, to apply the `bg-sky-700` class on hover, use the `hover:bg-sky-700` class:

**Hover over this button to see the background color change**

```html
<button class="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>

Tailwind includes variants for just about everything you’ll ever need,
including: • Pseudo-classes: :hover, :focus, :first-child, and :required •
Pseudo-elements: ::before, ::after, ::placeholder, and ::selection • Media and
Feature Queries: Responsive breakpoints, dark mode, and prefers-reduced-motion •
Attribute Selectors: e.g. [dir="rtl"] and [open] • Child Selectors: e.g. & > *
and & * These variants can even be stacked to target more specific situations.
For example, changing the background color in dark mode, at the medium
breakpoint, on hover:

<button class="dark:md:hover:bg-fuchsia-600 ...">Save changes</button>

In this guide you’ll learn about every variant available in the framework, how
to use them with your own custom classes, and even how to create your own.
Pseudo-classes :hover, :focus, and :active Style elements on hover, focus, and
active using the hover, focus, and active variants:

<button
  class="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ..."
>
  Save changes
</button>

Tailwind also includes variants for other interactive states like :visited,
:focus-within, :focus-visible, and more. See the pseudo-class reference for a
complete list of available pseudo-class variants. :first, :last, :odd, and :even
Style an element when it is the first-child or last-child using the first and
last variants. Example with a list of people:

<ul role="list">
  {#each people as person}
  <!-- Remove top/bottom padding when first/last child -->
  <li class="flex py-4 first:pt-0 last:pb-0">
    <img class="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
    <div class="ml-3 overflow-hidden">
      <p class="text-sm font-medium text-gray-900 dark:text-white">
        {person.name}
      </p>
      <p class="truncate text-sm text-gray-500 dark:text-gray-400">
        {person.email}
      </p>
    </div>
  </li>
  {/each}
</ul>

For odd and even children:

<table>
  <tbody>
    {#each people as person}
    <!-- Use different background colors for odd and even rows -->
    <tr
      class="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950"
    >
      <td>{person.name}</td>
      <td>{person.title}</td>
      <td>{person.email}</td>
    </tr>
    {/each}
  </tbody>
</table>

You can also use the nth-* and nth-last-* variants for more precise control:

<div class="nth-3:underline">
  <!-- ... -->
</div>
<div class="nth-last-5:underline">
  <!-- ... -->
</div>

:required and :disabled Style form elements in different states using variants
like required, invalid, and disabled:

<input
  type="text"
  value="tbone"
  disabled
  class="invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 ..."
/>

This approach reduces the need for conditional logic in your templates. :has()
Use the has-* variant to style an element based on the state or content of its
descendants:

<label
  class="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 ..."
>
  <svg fill="currentColor">
    <!-- ... -->
  </svg>
  Google Pay
  <input type="radio" class="checked:border-indigo-500 ..." />
</label>

You can also use it with pseudo-classes like has-[:focus] or element selectors
such as has-[img]. Styling Based on Parent or Sibling States Parent State using
group-* Mark a parent element with the group class and then style child elements
with variants like group-hover:

<a href="#" class="group ...">
  <div>
    <svg
      class="stroke-sky-500 group-hover:stroke-white ..."
      fill="none"
      viewBox="0 0 24 24"
    >
      <!-- ... -->
    </svg>
    <h3 class="text-gray-900 group-hover:text-white ...">New project</h3>
  </div>
  <p class="text-gray-500 group-hover:text-white ...">
    Create a new project from a variety of starting templates.
  </p>
</a>

Sibling State using peer-* Mark a sibling with the peer class and style target
elements with peer-* variants:

<form>
  <label class="block">
    <span class="...">Email</span>
    <input type="email" class="peer ..." />
    <p class="invisible peer-invalid:visible ...">
      Please provide a valid email address.
    </p>
  </label>
</form>

Note: The peer marker works only on previous siblings. :not() Variant Use the
not- variant to style an element when a condition is not true. This can be
especially powerful when combined with other variants:

<button class="bg-indigo-600 hover:not-focus:bg-indigo-700">
  <!-- ... -->
</button>

You can also combine not- with media query variants:

<div class="not-supports-[display:grid]:flex">
  <!-- ... -->
</div>

Styling Based on Open/Closed State Use the open variant to conditionally add
styles when a
<details>
  or
  <dialog>
    element is open:

    <details
      class="border border-transparent open:border-black/10 open:bg-gray-100 ..."
      open
    >
      <summary
        class="text-sm leading-6 font-semibold text-gray-900 select-none"
      >
        Why do they call it Ovaltine?
      </summary>
      <div class="mt-3 text-sm leading-6 text-gray-600">
        <p>
          The mug is round. The jar is round. They should call it Roundtine.
        </p>
      </div>
    </details>

    Also applicable to popovers using the :popover-open pseudo-class. Styling
    Inert Elements The inert variant allows you to style elements marked with
    the inert attribute:

    <form>
      <legend>Notification preferences</legend>
      <fieldset>
        <input type="radio" />
        <label>Custom</label>
        <fieldset inert class="inert:opacity-50">
          <!-- ... -->
        </fieldset>
        <input type="radio" />
        <label>Everything</label>
      </fieldset>
    </form>

    Child Selectors Styling Direct Children with * When you need to style direct
    children that you don’t control, you can use the * variant:

    <div>
      <h2>Categories</h2>
      <ul
        class="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ..."
      >
        <li>Sales</li>
        <li>Marketing</li>
        <li>SEO</li>
        <!-- ... -->
      </ul>
    </div>

    Note: Overriding styles on a child element directly won’t work because of
    the specificity of the generated selector. Styling All Descendants with **
    Use the ** variant to apply styles to all descendants:

    <ul class="**:data-avatar:size-12 **:data-avatar:rounded-full ...">
      {#each items as item}
      <li>
        <img src="{item.src}" data-avatar />
        <p>{item.name}</p>
      </li>
      {/each}
    </ul>

    Custom Variants Using Arbitrary Variants Arbitrary variants let you write
    custom selector variants directly in your HTML by wrapping the selector in
    square brackets. For example, change the cursor to grabbing when the element
    has the is-dragging class:

    <ul role="list">
      {#each items as item}
      <li class="[&.is-dragging]:cursor-grabbing">{item}</li>
      {/each}
    </ul>

    Arbitrary variants can be stacked with built-in variants:

    <ul role="list">
      {#each items as item}
      <li class="[&.is-dragging]:active:cursor-grabbing">{item}</li>
      {/each}
    </ul>

    For selectors with spaces, use an underscore:

    <div class="[&_p]:mt-4">
      <p>Lorem ipsum...</p>
      <ul>
        <li>
          <p>Lorem ipsum...</p>
        </li>
      </ul>
    </div>

    You can even use at-rules like @media or @supports in arbitrary variants:

    <div class="flex [@supports(display:grid)]:grid">
      <!-- ... -->
    </div>

    Registering a Custom Variant If you frequently use the same arbitrary
    variant, you can create a custom variant. For example: @custom-variant
    pointer-coarse { @media (pointer: coarse) { @slot; } } Now you can use it
    like this:

    <button class="pointer-coarse:size-12 ..."></button>

    You can also use shorthand syntax when nesting isn’t required:
    @custom-variant pointer-coarse (@media (pointer: coarse)); For multiple
    rules, nest them: @custom-variant any-hover { @media (any-hover: hover) {
    &:hover { @slot; } } } Attribute Selectors ARIA States Style elements based
    on ARIA attributes using the aria-* variant. For example, to apply
    bg-sky-700 when aria-checked is true:

    <div aria-checked="true" class="bg-gray-600 aria-checked:bg-sky-700">
      <!-- ... -->
    </div>

    Common boolean ARIA variants include: • aria-busy • aria-checked •
    aria-disabled • aria-expanded • aria-hidden • aria-pressed • aria-readonly •
    aria-required • aria-selected You can also create custom ARIA variants:
    @custom-variant aria-asc (&[aria-sort="ascending"]); @custom-variant
    aria-desc (&[aria-sort="descending"]); Or use arbitrary values:

    <th
      aria-sort="ascending"
      class="aria-[sort=ascending]:bg-[url('/img/down-arrow.svg')] aria-[sort=descending]:bg-[url('/img/up-arrow.svg')]"
    >
      Invoice #
    </th>

    ARIA variants can also target parent and sibling elements using group-aria-*
    and peer-aria-*. Data Attributes Style based on data attributes with the
    data-* variant. Check if a data attribute exists:

    <div
      data-active
      class="border border-gray-300 data-active:border-purple-500"
    >
      <!-- ... -->
    </div>

    Or check for a specific value:

    <div data-size="large" class="data-[size=large]:p-8">
      <!-- ... -->
    </div>

    You can also register custom data attribute variants: @custom-variant
    data-checked (&[data-ui~="checked"]); And then use it:

    <div data-ui="checked active" class="data-checked:underline">
      <!-- ... -->
    </div>

    RTL Support Use rtl and ltr variants for right-to-left and left-to-right
    modes respectively.

    <div class="group flex items-center">
      <img class="h-12 w-12 shrink-0 rounded-full" src="..." alt="" />
      <div class="ltr:ml-3 rtl:mr-3">
        <p class="text-gray-700 group-hover:text-gray-900 ...">...</p>
        <p class="text-gray-500 group-hover:text-gray-700 ...">...</p>
      </div>
    </div>

    Open/Closed State Use the open variant to style
    <details>
      or
      <dialog>
        elements when open:

        <details
          class="border border-transparent open:border-black/10 open:bg-gray-100 ..."
          open
        >
          <summary
            class="text-sm leading-6 font-semibold text-gray-900 select-none"
          >
            Why do they call it Ovaltine?
          </summary>
          <div class="mt-3 text-sm leading-6 text-gray-600">
            <p>
              The mug is round. The jar is round. They should call it Roundtine.
            </p>
          </div>
        </details>

        Additional Pseudo-elements ::before and ::after Style the ::before and
        ::after pseudo-elements using the before and after variants:

        <label>
          <span
            class="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ..."
          >
            Email
          </span>
          <input
            type="email"
            name="email"
            class="..."
            placeholder="you@example.com"
          />
        </label>

        Tailwind automatically adds content: '' unless specified otherwise. An
        alternative using actual HTML elements:

        <blockquote
          class="text-center text-2xl font-semibold text-gray-900 italic"
        >
          When you look
          <span class="relative">
            <span
              class="absolute -inset-1 block -skew-y-3 bg-pink-500"
              aria-hidden="true"
            ></span>
            <span class="relative text-white">annoyed</span>
          </span>
          all the time, people think that you're busy.
        </blockquote>

        ::placeholder Style the placeholder text of inputs or textareas:

        <input
          class="placeholder:text-gray-500 placeholder:italic ..."
          placeholder="Search for anything..."
          type="text"
          name="search"
        />

        ::file Style the file input button:

        <input
          type="file"
          class="file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500 ..."
        />

        ::marker Style list markers:

        <ul role="list" class="list-disc marker:text-sky-400 ...">
          <li>5 cups chopped Porcini mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </ul>

        ::selection Style the active text selection:

        <div class="selection:bg-fuchsia-300 selection:text-fuchsia-900">
          <p>
            So I started to walk into the water. I won't lie to you boys, I was
            terrified...
            <em>was</em> a marine biologist.
          </p>
        </div>

        To set selection color globally:

        <html>
          <head>
            <!-- ... -->
          </head>
          <body class="selection:bg-pink-300">
            <!-- ... -->
          </body>
        </html>

        ::first-line and ::first-letter Style the first line or first letter of
        a block:

        <div class="text-gray-700">
          <p
            class="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-line:tracking-widest first-line:uppercase"
          >
            Well, let me tell you something, funny boy. Y'know that little
            stamp...
          </p>
          <p class="mt-6">
            Well that may not mean anything to you, but that means a lot to me.
          </p>
        </div>

        ::backdrop Style the backdrop of a native
        <dialog>
          element:

          <dialog class="backdrop:bg-gray-50">
            <form method="dialog">
              <!-- ... -->
            </form>
          </dialog>

          Media and Feature Queries Responsive Breakpoints To style elements at
          specific breakpoints, use responsive variants like md and lg:

          <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <!-- ... -->
          </div>

          For container queries:

          <div class="@container">
            <div class="flex flex-col @md:flex-row">
              <!-- ... -->
            </div>
          </div>

          See the Responsive Design documentation for more details.
          prefers-color-scheme Tailor styles for light and dark modes:

          <div class="bg-white dark:bg-gray-900 ...">
            <!-- ... -->
            <h3 class="text-gray-900 dark:text-white ...">
              Writes upside-down
            </h3>
            <p class="text-gray-500 dark:text-gray-400 ...">
              The Zero Gravity Pen can be used to write in any orientation...
            </p>
          </div>

          See the Dark Mode documentation for more details.
          prefers-reduced-motion Conditionally style elements based on the
          user’s motion preference:

          <button type="button" class="bg-indigo-500 ..." disabled>
            <svg
              class="animate-spin motion-reduce:hidden ..."
              viewBox="0 0 24 24"
            >
              <!-- ... -->
            </svg>
            Processing...
          </button>

          Alternatively, use the motion-safe variant:

          <button
            class="motion-safe:transition motion-safe:hover:-translate-x-0.5 ..."
          >
            Save changes
          </button>

          prefers-contrast Adjust styles based on user contrast preferences:

          <label class="block">
            <span class="block text-sm font-medium text-gray-700"
              >Social Security Number</span
            >
            <input
              class="border-gray-200 placeholder-gray-400 contrast-more:border-gray-400 contrast-more:placeholder-gray-500 ..."
            />
            <p class="text-gray-600 opacity-10 contrast-more:opacity-100 ...">
              We need this to steal your identity.
            </p>
          </label>

          A contrast-less variant is also available. forced-colors Style
          elements when forced colors mode is active:

          <label>
            <input
              type="radio"
              class="appearance-none forced-colors:appearance-auto"
            />
            <p class="hidden forced-colors:block">Cyan</p>
            <div class="bg-cyan-200 forced-colors:hidden ..."></div>
            <div class="bg-cyan-500 forced-colors:hidden ..."></div>
          </label>

          To apply styles when forced colors mode is not active, use
          not-forced-colors. Orientation Apply styles based on device
          orientation:

          <div>
            <div class="portrait:hidden">
              <!-- ... -->
            </div>
            <div class="landscape:hidden">
              <p>
                This experience is designed to be viewed in landscape. Please
                rotate your device.
              </p>
            </div>
          </div>

          Print Style content for print using the print variant:

          <div>
            <article class="print:hidden">
              <h1>My Secret Pizza Recipe</h1>
              <p>This recipe is a secret, and must not be shared.</p>
              <!-- ... -->
            </article>
            <div class="hidden print:block">
              Are you seriously trying to print this? It's secret!
            </div>
          </div>

          @supports Style elements based on feature support using supports-[...]
          variants:

          <div class="flex supports-[display:grid]:grid ...">
            <!-- ... -->
          </div>

          Use not-supports-[...] to style when a feature is not supported.
          Custom shortcuts can be defined in your configuration. @starting-style
          Set the initial appearance when an element first renders or
          transitions from display: none:

          <div>
            <button popovertarget="my-popover">Check for updates</button>
            <div
              popover
              id="my-popover"
              class="opacity-0 starting:open:opacity-0 ..."
            >
              <!-- ... -->
            </div>
          </div>

          Quick Reference Appendix Below is a summary table of every variant
          included by default in Tailwind: Variant Generated CSS hover @media
          (hover: hover) { &:hover } focus &:focus focus-within &:focus-within
          focus-visible &:focus-visible active &:active visited &:visited target
          &:target * :is(& > *) ** :is(& *) has-[…] &:has(...) group-[…]
          :is(:where(.group)... *) peer-[…] :is(:where(.peer)... ~ *) in-[…]
          :where(...) & not-[…] &:not(...) inert &:is([inert], [inert] *) first
          &:first-child last &:last-child only &:only-child odd &:nth-child(odd)
          even &:nth-child(even) first-of-type &:first-of-type last-of-type
          &:last-of-type only-of-type &:only-of-type nth-[…] &:nth-child(...)
          nth-last-[…] &:nth-last-child(...) nth-of-type-[…] &:nth-of-type(...)
          nth-last-of-type-[…] &:nth-last-of-type(...) empty &:empty disabled
          &:disabled enabled &:enabled checked &:checked indeterminate
          &:indeterminate default &:default optional &:optional required
          &:required valid &:valid invalid &:invalid in-range &:in-range
          out-of-range &:out-of-range placeholder-shown &:placeholder-shown
          autofill &:autofill read-only &:read-only before &::before after
          &::after first-letter &::first-letter first-line &::first-line marker
          &::marker, & *::marker selection &::selection file
          &::file-selector-button backdrop &::backdrop placeholder
          &::placeholder sm @media (min-width: 40rem) md @media (min-width:
          48rem) lg @media (min-width: 64rem) xl @media (min-width: 80rem) 2xl
          @media (min-width: 96rem) min-[…] @media (min-width: ...) max-sm
          @media (max-width: 40rem) max-md @media (max-width: 48rem) max-lg
          @media (max-width: 64rem) max-xl @media (max-width: 80rem) max-2xl
          @media (max-width: 96rem) max-[…] @media (max-width: ...) @3xs
          @container (min-width: 16rem) @2xs @container (min-width: 18rem) @xs
          @container (min-width: 20rem) @sm @container (min-width: 24rem) @md
          @container (min-width: 28rem) @lg @container (min-width: 32rem) @xl
          @container (min-width: 36rem) @2xl @container (min-width: 42rem) @3xl
          @container (min-width: 48rem) @4xl @container (min-width: 56rem) @5xl
          @container (min-width: 64rem) @6xl @container (min-width: 72rem) @7xl
          @container (min-width: 80rem) @max-[…] @container (max-width: ...)
          dark @media (prefers-color-scheme: dark) portrait @media (orientation:
          portrait) landscape @media (orientation: landscape) motion-safe @media
          (prefers-reduced-motion: no-preference) motion-reduce @media
          (prefers-reduced-motion: reduce) contrast-more @media
          (prefers-contrast: more) contrast-less @media (prefers-contrast: less)
          print @media print supports-[…] @supports (...) aria-busy
          &[aria-busy="true"] aria-checked &[aria-checked="true"] aria-disabled
          &[aria-disabled="true"] aria-expanded &[aria-expanded="true"]
          aria-hidden &[aria-hidden="true"] aria-pressed &[aria-pressed="true"]
          aria-readonly &[aria-readonly="true"] aria-required
          &[aria-required="true"] aria-selected &[aria-selected="true"] aria-[…]
          &[aria-...] data-[…] &[data-...] rtl [dir="rtl"] & ltr [dir="ltr"] &
          open &:is([open], :popover-open) forced-colors @media (forced-colors:
          active) starting @starting-style
        </dialog>
      </dialog>
    </details>
  </dialog>
</details>
```
