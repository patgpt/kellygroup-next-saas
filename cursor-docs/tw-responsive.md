Below is the complete markdown file. You can copy the text into a file (e.g., tailwind-responsive-design.md) and download it.

# Core Concepts: Responsive Design

## Overview

Every utility class in Tailwind can be applied conditionally at different breakpoints, making it a piece of cake to build complex responsive interfaces—all without ever leaving your HTML.

First, ensure you add the viewport meta tag to the `<head>` of your document:

```html
<!-- index.html -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

To add a utility that only takes effect at a certain breakpoint, simply prefix
the utility with the breakpoint name followed by a colon:

<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="..." />

Default Breakpoints Tailwind includes five default breakpoints inspired by
common device resolutions: Breakpoint Prefix Minimum Width CSS sm 40rem (640px)
@media (min-width: 40rem) { ... } md 48rem (768px) @media (min-width: 48rem) {
... } lg 64rem (1024px) @media (min-width: 64rem) { ... } xl 80rem (1280px)
@media (min-width: 80rem) { ... } 2xl 96rem (1536px) @media (min-width: 96rem) {
... } This works for every utility class—meaning you can change anything at a
given breakpoint, even letter spacing or cursor styles. Example: Marketing Page
Component Here’s a simple example of a component that uses a stacked layout on
small screens and a side-by-side layout on larger screens:

<div
  class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl"
>
  <div class="md:flex">
    <div class="md:shrink-0">
      <img
        class="h-48 w-full object-cover md:h-full md:w-48"
        src="/img/building.jpg"
        alt="Modern building architecture"
      />
    </div>
    <div class="p-8">
      <div
        class="text-sm font-semibold tracking-wide text-indigo-500 uppercase"
      >
        Company retreats
      </div>
      <a
        href="#"
        class="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
      >
        Incredible accommodation for your team
      </a>
      <p class="mt-2 text-gray-500">
        Looking to take your team away on a retreat to enjoy awesome food and
        take in some sunshine? We have a list of places to do just that.
      </p>
    </div>
  </div>
</div>

How It Works • Layout Change: By default, the outer
<div>
  is displayed as a block. Adding the md:flex utility makes it a flex container
  on medium screens and larger. • Preventing Shrink: The image container has
  md:shrink-0 so that, when the parent is flex, the image never shrinks. •
  Responsive Image Sizing: The image is full width by default, and on medium
  screens and up, its width is fixed (md:w-48) and height is set to full
  (md:h-full). You could easily customize this component at other sizes by using
  the sm, lg, xl, or 2xl responsive prefixes. Mobile-First Approach Tailwind
  uses a mobile-first breakpoint system, similar to frameworks like Bootstrap.
  This means: • Unprefixed Utilities: Utilities without a breakpoint prefix
  (like uppercase) take effect on all screen sizes. • Prefixed Utilities:
  Utilities with a prefix (like md:uppercase) only take effect at the specified
  breakpoint and above. Targeting Mobile Screens To style something for mobile,
  use unprefixed utilities. Do not use sm: to target mobile devices. For
  example:

  <!-- This will only center text on screens 640px and wider -->
  <div class="sm:text-center"></div>

  Instead, use unprefixed utilities for mobile and override at larger
  breakpoints:

  <!-- Center text on mobile, left align on screens 640px and wider -->
  <div class="text-center sm:text-left"></div>

  It’s often a good idea to implement the mobile layout first, then layer on
  changes for larger breakpoints. Targeting Breakpoint Ranges By default, styles
  like md:flex apply at the specified breakpoint and continue to apply at larger
  sizes. If you want a utility to apply only within a specific breakpoint range,
  you can stack a responsive variant with a max-* variant:

  <div class="md:max-xl:flex">
    <!-- ... -->
  </div>

  Available max-* Variants Variant Media Query max-sm @media (max-width: 40rem)
  { ... } max-md @media (max-width: 48rem) { ... } max-lg @media (max-width:
  64rem) { ... } max-xl @media (max-width: 80rem) { ... } max-2xl @media
  (max-width: 96rem) { ... } Targeting a Single Breakpoint To target a single
  breakpoint, combine a responsive variant with the next breakpoint’s max-*
  variant:

  <div class="md:max-lg:flex">
    <!-- ... -->
  </div>

  Customizing Breakpoints Using Custom Theme Values You can customize
  breakpoints by setting the --breakpoint-* theme variables in your CSS: /*
  app.css */ @import "tailwindcss"; @theme { --breakpoint-xs: 30rem;
  --breakpoint-2xl: 100rem; --breakpoint-3xl: 120rem; } This updates the 2xl
  breakpoint to 100rem, and creates new xs and 3xl breakpoints which you can use
  in your markup:

  <div class="xs:grid-cols-2 3xl:grid-cols-6 grid">
    <!-- ... -->
  </div>

  Removing Default Breakpoints To remove a default breakpoint, reset its value
  to initial: /* app.css */ @import "tailwindcss"; @theme { --breakpoint-2xl:
  initial; } Or reset all default breakpoints and define your own: /* app.css */
  @import "tailwindcss"; @theme { --breakpoint-*: initial; --breakpoint-tablet:
  40rem; --breakpoint-laptop: 64rem; --breakpoint-desktop: 80rem; } Using
  Arbitrary Values For one-off breakpoints that don’t fit your theme, use
  arbitrary values with the min or max variants:

  <div class="max-[600px]:bg-sky-300 min-[320px]:text-center">
    <!-- ... -->
  </div>

  Learn more in the arbitrary values documentation. Container Queries What Are
  Container Queries? Container queries let you style components based on the
  size of a parent element instead of the entire viewport. They enable more
  portable and reusable components that adapt to available space. Basic Example
  Mark an element as a container with @container, then use container query
  variants like @sm or @md on its children:

  <div class="@container">
    <div class="flex flex-col @md:flex-row">
      <!-- ... -->
    </div>
  </div>

  Container queries in Tailwind are mobile-first and apply when the container
  reaches a certain size. Max-Width Container Queries Apply styles below a
  specific container size with variants like @max-sm and @max-md:

  <div class="@container">
    <div class="flex flex-row @max-md:flex-col">
      <!-- ... -->
    </div>
  </div>

  Container Query Ranges Stack a regular container query variant with a
  max-width container query variant to target a specific range:

  <div class="@container">
    <div class="flex flex-row @sm:@max-md:flex-col">
      <!-- ... -->
    </div>
  </div>

  Named Containers For complex designs with nested containers, name containers
  using @container/{name} and target them with variants like @sm/{name}:

  <div class="@container/main">
    <!-- ... -->
    <div class="flex flex-row @sm/main:flex-col">
      <!-- ... -->
    </div>
  </div>

  Custom Container Sizes Customize container sizes by defining the --container-*
  theme variables: /* app.css */ @import "tailwindcss"; @theme {
  --container-8xl: 96rem; } This adds a new 8xl container query variant:

  <div class="@container">
    <div class="@8xl:flex-row flex flex-col">
      <!-- ... -->
    </div>
  </div>

  Arbitrary Container Query Values Use arbitrary values for container query
  sizes you don’t want to add to your theme:

  <div class="@container">
    <div class="flex flex-col @min-[475px]:flex-row">
      <!-- ... -->
    </div>
  </div>

  Container Query Units You can also use container query units like cqw in
  utility classes to reference the container size:

  <div class="@container">
    <div class="w-[50cqw]">
      <!-- ... -->
    </div>
  </div>

  Container Size Reference Tailwind includes container sizes ranging from 16rem
  (256px) to 80rem (1280px): Variant Minimum width CSS @3xs 16rem (256px)
  @container (min-width: 16rem) { … } @2xs 18rem (288px) @container (min-width:
  18rem) { … } @xs 20rem (320px) @container (min-width: 20rem) { … } @sm 24rem
  (384px) @container (min-width: 24rem) { … } @md 28rem (448px) @container
  (min-width: 28rem) { … } @lg 32rem (512px) @container (min-width: 32rem) { … }
  @xl 36rem (576px) @container (min-width: 36rem) { … } @2xl 42rem (672px)
  @container (min-width: 42rem) { … } @3xl 48rem (768px) @container (min-width:
  48rem) { … } @4xl 56rem (896px) @container (min-width: 56rem) { … } @5xl 64rem
  (1024px) @container (min-width: 64rem) { … } @6xl 72rem (1152px) @container
  (min-width: 72rem) { … } @7xl 80rem (1280px) @container (min-width: 80rem) { …
  }
</div>
```
