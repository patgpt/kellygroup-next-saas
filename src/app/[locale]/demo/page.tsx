export default function DemoPage() {
  return (
    <div className="container mx-auto space-y-12 p-8">
      {/* Cards Section */}
      <section className="space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Cards</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="card nm-raised">
            <h3 className="text-xl font-medium">Basic Card</h3>
            <p>A simple raised card with neumorphic shadow.</p>
          </div>

          <div className="card nm-convex nm-interactive">
            <h3 className="text-xl font-medium">Interactive Card</h3>
            <p>Hover and click me to see interactions.</p>
          </div>

          <div className="card nm-raised animate-float">
            <h3 className="text-xl font-medium">Floating Card</h3>
            <p>This card has a floating animation.</p>
          </div>
        </div>
      </section>

      {/* Enhanced Buttons Section */}
      <section className="space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Buttons</h2>

        {/* Basic Buttons */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Basic Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <button className="btn nm-raised">Default Button</button>
            <button className="btn btn-primary nm-raised">
              Primary Button
            </button>
            <button className="btn btn-secondary nm-raised">
              Secondary Button
            </button>
            <button className="btn nm-raised" disabled>
              Disabled Button
            </button>
          </div>
        </div>

        {/* Additional Button Variants */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Additional Variants</h3>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-outline nm-flat border-2">
              Outline
            </button>
            <button className="btn btn-outline btn-primary nm-flat border-2">
              Primary Outline
            </button>
            <button className="btn btn-ghost nm-flat hover:nm-pressed">
              Ghost
            </button>
            <button className="btn btn-link nm-flat text-primary underline">
              Link Button
            </button>
          </div>
        </div>

        {/* Loading State Buttons */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Loading States</h3>
          <div className="flex flex-wrap gap-4">
            <button className="btn nm-raised flex items-center gap-2" disabled>
              <div className="border-primary h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
              Loading...
            </button>
            <button
              className="btn btn-primary nm-raised flex items-center gap-2"
              disabled
            >
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              Processing
            </button>
            <button className="btn nm-pressed flex items-center gap-2" disabled>
              <div className="bg-primary h-4 w-4 animate-pulse rounded-full"></div>
              Please wait
            </button>
          </div>
        </div>

        {/* Button Groups */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Button Groups</h3>
          <div className="flex flex-wrap gap-4">
            <div className="nm-raised flex overflow-hidden rounded-lg">
              <button className="btn nm-flat rounded-none border-r">
                Left
              </button>
              <button className="btn nm-flat rounded-none border-r">
                Middle
              </button>
              <button className="btn nm-flat rounded-none">Right</button>
            </div>
            <div className="nm-raised flex overflow-hidden rounded-lg">
              <button className="btn btn-primary nm-flat rounded-none border-r">
                1
              </button>
              <button className="btn btn-primary nm-flat rounded-none border-r">
                2
              </button>
              <button className="btn btn-primary nm-flat rounded-none">
                3
              </button>
            </div>
          </div>
        </div>

        {/* Button Styles */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Button Styles</h3>
          <div className="flex flex-wrap gap-4">
            <button className="btn nm-flat">Flat</button>
            <button className="btn nm-raised">Raised</button>
            <button className="btn nm-pressed">Pressed</button>
            <button className="btn nm-convex">Convex</button>
          </div>
        </div>

        {/* Button Sizes */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Button Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            <button className="btn nm-raised px-3 py-1 text-sm">Small</button>
            <button className="btn nm-raised">Default</button>
            <button className="btn nm-raised px-6 py-3 text-lg">Large</button>
          </div>
        </div>

        {/* Animated Buttons */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Animated Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <button className="btn nm-raised animate-pulse">Pulse</button>
            <button className="btn nm-raised animate-float">Float</button>
            <button className="btn nm-raised animate-bounce">Bounce</button>
            <button className="btn nm-raised animate-shake">Shake</button>
          </div>
        </div>

        {/* Icon Buttons */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Icon Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <button className="btn nm-raised h-10 w-10 rounded-full p-0">
              <span className="text-xl">+</span>
            </button>
            <button className="btn nm-raised flex gap-2">
              <span>Settings</span>
              <span className="text-xl">⚙️</span>
            </button>
            <button className="btn btn-primary nm-raised flex gap-2">
              <span>Download</span>
              <span className="text-xl">↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Form Controls Section */}
      <section className="space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Form Controls</h2>

        {/* Input Groups */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Input Groups</h3>

          <div className="form-control">
            <label className="form-label">Search with Button</label>
            <div className="flex gap-2">
              <input
                type="search"
                className="input nm-pressed flex-1"
                placeholder="Search..."
              />
              <button className="btn btn-primary nm-raised">Search</button>
            </div>
          </div>

          <div className="form-control">
            <label className="form-label">Username with Prefix</label>
            <div className="flex overflow-hidden rounded-lg">
              <span className="bg-muted nm-pressed flex items-center px-3">
                @
              </span>
              <input
                type="text"
                className="input nm-pressed flex-1 rounded-none"
                placeholder="username"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="form-label">Price Input</label>
            <div className="flex overflow-hidden rounded-lg">
              <span className="bg-muted nm-pressed flex items-center px-3">
                $
              </span>
              <input
                type="number"
                className="input nm-pressed flex-1 rounded-none"
                placeholder="0.00"
              />
              <span className="bg-muted nm-pressed flex items-center px-3">
                USD
              </span>
            </div>
          </div>
        </div>

        {/* Validation States */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Validation States</h3>

          <div className="form-control">
            <label className="form-label">Success State</label>
            <input
              type="text"
              className="input nm-pressed border-2 border-green-500"
              defaultValue="Valid input"
            />
            <p className="mt-1 text-sm text-green-600">This input is valid!</p>
          </div>

          <div className="form-control">
            <label className="form-label">Error State</label>
            <input
              type="text"
              className="input nm-pressed border-2 border-red-500"
              defaultValue="Invalid input"
            />
            <p className="mt-1 text-sm text-red-600">This input is invalid!</p>
          </div>

          <div className="form-control">
            <label className="form-label">Warning State</label>
            <input
              type="text"
              className="input nm-pressed border-2 border-yellow-500"
              defaultValue="Warning input"
            />
            <p className="mt-1 text-sm text-yellow-600">
              Please review this input!
            </p>
          </div>
        </div>

        {/* Complex Form Controls */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Complex Controls</h3>

          <div className="form-control">
            <label className="form-label">Password with Strength</label>
            <input
              type="password"
              className="input nm-pressed mb-2"
              placeholder="Enter password"
            />
            <div className="flex gap-2">
              <div className="nm-pressed h-1 flex-1 rounded-full bg-red-500"></div>
              <div className="nm-pressed h-1 flex-1 rounded-full bg-yellow-500"></div>
              <div className="nm-pressed h-1 flex-1 rounded-full bg-green-500 opacity-30"></div>
            </div>
            <p className="text-muted-foreground mt-1 text-sm">
              Password strength: Medium
            </p>
          </div>

          <div className="form-control">
            <label className="form-label">Tags Input</label>
            <div className="nm-pressed flex flex-wrap gap-2 rounded-lg p-2">
              <span className="bg-primary text-primary-foreground flex items-center gap-1 rounded px-2 py-1 text-sm">
                Tag 1<button className="text-xs">&times;</button>
              </span>
              <span className="bg-primary text-primary-foreground flex items-center gap-1 rounded px-2 py-1 text-sm">
                Tag 2<button className="text-xs">&times;</button>
              </span>
              <input
                type="text"
                className="flex-1 bg-transparent outline-none"
                placeholder="Add tag..."
              />
            </div>
          </div>

          <div className="form-control">
            <label className="form-label">Color Picker</label>
            <div className="flex gap-2">
              <div
                className="nm-raised h-10 w-10 rounded-lg"
                style={{ backgroundColor: "#FF5733" }}
              ></div>
              <input
                type="text"
                className="input nm-pressed flex-1"
                value="#FF5733"
                readOnly
              />
              <input
                type="color"
                value="#FF5733"
                className="nm-raised h-10 w-10 cursor-pointer rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Text Inputs */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Text Inputs</h3>

          <div className="form-control">
            <label className="form-label" htmlFor="text">
              Text Input
            </label>
            <input
              className="input nm-pressed"
              type="text"
              id="text"
              placeholder="Enter text"
            />
          </div>

          <div className="form-control">
            <label className="form-label" htmlFor="email">
              Email Input
            </label>
            <input
              className="input nm-pressed"
              type="email"
              id="email"
              placeholder="Enter email"
            />
          </div>

          <div className="form-control">
            <label className="form-label" htmlFor="password">
              Password Input
            </label>
            <input
              className="input nm-pressed"
              type="password"
              id="password"
              placeholder="Enter password"
            />
          </div>

          <div className="form-control">
            <label className="form-label" htmlFor="search">
              Search Input
            </label>
            <input
              className="input nm-pressed"
              type="search"
              id="search"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Number & Date Inputs */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Number & Date Inputs</h3>

          <div className="form-control">
            <label className="form-label" htmlFor="number">
              Number Input
            </label>
            <input
              className="input nm-pressed"
              type="number"
              id="number"
              placeholder="0"
            />
          </div>

          <div className="form-control">
            <label className="form-label" htmlFor="date">
              Date Input
            </label>
            <input className="input nm-pressed" type="date" id="date" />
          </div>

          <div className="form-control">
            <label className="form-label" htmlFor="time">
              Time Input
            </label>
            <input className="input nm-pressed" type="time" id="time" />
          </div>

          <div className="form-control">
            <label className="form-label" htmlFor="range">
              Range Input
            </label>
            <input
              className="w-full"
              type="range"
              id="range"
              min="0"
              max="100"
            />
          </div>
        </div>

        {/* Textareas & Selects */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Textareas & Selects</h3>

          <div className="form-control">
            <label className="form-label" htmlFor="textarea">
              Textarea
            </label>
            <textarea
              className="textarea nm-pressed"
              id="textarea"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="form-label" htmlFor="select">
              Select
            </label>
            <select className="select nm-pressed" id="select">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <div className="form-control">
            <label className="form-label" htmlFor="multiselect">
              Multiple Select
            </label>
            <select className="select nm-pressed" id="multiselect" multiple>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </div>
        </div>

        {/* Checkboxes & Radios */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Checkboxes & Radios</h3>

          <div className="space-y-2">
            <div className="form-control">
              <label className="flex items-center gap-2">
                <div className="switch">
                  <input type="checkbox" />
                </div>
                <span>Toggle Switch</span>
              </label>
            </div>

            <div className="form-control">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="nm-pressed h-5 w-5 rounded" />
                <span>Checkbox</span>
              </label>
            </div>

            <div className="form-control">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="radio"
                  className="nm-pressed h-5 w-5"
                />
                <span>Radio Option 1</span>
              </label>
            </div>

            <div className="form-control">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="radio"
                  className="nm-pressed h-5 w-5"
                />
                <span>Radio Option 2</span>
              </label>
            </div>
          </div>

          <div className="form-control">
            <label className="form-label">File Input</label>
            <input
              type="file"
              className="file:btn file:nm-raised file:mr-4 file:border-0"
            />
          </div>
        </div>

        {/* Enhanced Input Groups */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Enhanced Input Groups</h3>

          {/* Search with Loading State */}
          <div className="form-control">
            <label className="form-label">Search with Loading State</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="search"
                  className="input nm-pressed w-full pr-10"
                  placeholder="Search..."
                />
                <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
                  <div className="border-primary h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
                </div>
              </div>
              <button className="btn btn-primary nm-raised" disabled>
                Searching...
              </button>
            </div>
          </div>

          {/* Input with Clear Button */}
          <div className="form-control">
            <label className="form-label">Input with Clear Button</label>
            <div className="relative">
              <input
                type="text"
                className="input nm-pressed w-full pr-10"
                placeholder="Type something..."
                value="Clear me"
              />
              <button className="hover:nm-pressed absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-1">
                <span className="text-lg opacity-50 hover:opacity-100">
                  &times;
                </span>
              </button>
            </div>
          </div>

          {/* Input with Copy Button */}
          <div className="form-control">
            <label className="form-label">Input with Copy Button</label>
            <div className="flex overflow-hidden rounded-lg">
              <input
                type="text"
                className="input nm-pressed flex-1 rounded-none"
                value="https://example.com/share/123"
                readOnly
              />
              <button className="btn nm-flat hover:nm-pressed px-4">
                Copy
              </button>
            </div>
          </div>

          {/* Number Input with Controls */}
          <div className="form-control">
            <label className="form-label">Number Input with Controls</label>
            <div className="flex overflow-hidden rounded-lg">
              <button className="btn nm-flat hover:nm-pressed px-4">-</button>
              <input
                type="number"
                className="input nm-pressed w-20 rounded-none text-center"
                value="1"
                min="0"
                max="10"
              />
              <button className="btn nm-flat hover:nm-pressed px-4">+</button>
            </div>
          </div>
        </div>

        {/* Enhanced Validation States */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Enhanced Validation States</h3>

          {/* Real-time Validation */}
          <div className="form-control">
            <label className="form-label">
              Email with Real-time Validation
            </label>
            <div className="relative">
              <input
                type="email"
                className="input nm-pressed w-full border-2 border-green-500 pr-10"
                value="user@example.com"
              />
              <div className="absolute top-1/2 right-3 -translate-y-1/2 text-green-500">
                ✓
              </div>
              <p className="mt-1 text-sm text-green-600">
                Email format is valid
              </p>
            </div>
          </div>

          {/* Password Strength */}
          <div className="form-control">
            <label className="form-label">Interactive Password Strength</label>
            <div className="space-y-2">
              <input
                type="password"
                className="input nm-pressed w-full"
                value="StrongP@ss123"
              />
              <div className="flex gap-1">
                <div className="nm-pressed h-1 flex-1 rounded-full bg-green-500"></div>
                <div className="nm-pressed h-1 flex-1 rounded-full bg-green-500"></div>
                <div className="nm-pressed h-1 flex-1 rounded-full bg-green-500"></div>
                <div className="nm-pressed h-1 flex-1 rounded-full bg-green-500"></div>
              </div>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="text-green-600">✓ Minimum 8 characters</li>
                <li className="text-green-600">✓ Contains numbers</li>
                <li className="text-green-600">
                  ✓ Contains special characters
                </li>
                <li className="text-green-600">
                  ✓ Contains uppercase & lowercase
                </li>
              </ul>
            </div>
          </div>

          {/* Form Field with Character Count */}
          <div className="form-control">
            <label className="form-label">Textarea with Character Count</label>
            <div className="relative">
              <textarea
                className="textarea nm-pressed w-full"
                placeholder="Maximum 100 characters..."
                rows={3}
              ></textarea>
              <div className="text-muted-foreground absolute right-2 bottom-2 text-sm">
                0/100
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Components */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Interactive Components</h3>

          {/* Expandable Search */}
          <div className="form-control">
            <label className="form-label">Expandable Search</label>
            <div className="flex justify-end">
              <div className="relative w-12 transition-all duration-300 focus-within:w-full hover:w-full">
                <input
                  type="search"
                  className="input nm-pressed w-full pr-10"
                  placeholder="Search..."
                />
                <button className="hover:nm-pressed absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-2">
                  ��
                </button>
              </div>
            </div>
          </div>

          {/* Tags Input with Animations */}
          <div className="form-control">
            <label className="form-label">Animated Tags Input</label>
            <div className="nm-pressed flex flex-wrap gap-2 rounded-lg p-2">
              <span className="bg-primary text-primary-foreground animate-float flex items-center gap-1 rounded px-2 py-1 text-sm">
                Animation
                <button className="opacity-50 transition-opacity hover:opacity-100">
                  &times;
                </button>
              </span>
              <span
                className="bg-primary text-primary-foreground animate-float flex items-center gap-1 rounded px-2 py-1 text-sm"
                style={{ animationDelay: "0.1s" }}
              >
                Hover
                <button className="opacity-50 transition-opacity hover:opacity-100">
                  &times;
                </button>
              </span>
              <span
                className="bg-primary text-primary-foreground animate-float flex items-center gap-1 rounded px-2 py-1 text-sm"
                style={{ animationDelay: "0.2s" }}
              >
                Interactive
                <button className="opacity-50 transition-opacity hover:opacity-100">
                  &times;
                </button>
              </span>
              <input
                type="text"
                className="flex-1 bg-transparent outline-none"
                placeholder="Type and press enter..."
              />
            </div>
          </div>

          {/* Interactive Slider */}
          <div className="form-control">
            <label className="form-label">
              Interactive Slider with Preview
            </label>
            <div className="space-y-2">
              <input
                type="range"
                className="w-full"
                min="0"
                max="100"
                value="60"
              />
              <div className="flex justify-between text-sm">
                <span>0</span>
                <div className="nm-pressed rounded px-2">Value: 60</div>
                <span>100</span>
              </div>
            </div>
          </div>

          {/* Color Picker with Preview */}
          <div className="form-control">
            <label className="form-label">Enhanced Color Picker</label>
            <div className="space-y-2">
              <div className="flex gap-2">
                <div
                  className="nm-raised h-16 w-16 rounded-lg transition-all hover:scale-105"
                  style={{ backgroundColor: "#FF5733" }}
                ></div>
                <div className="flex flex-1 flex-col gap-2">
                  <input
                    type="text"
                    className="input nm-pressed"
                    value="#FF5733"
                    readOnly
                  />
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value="#FF5733"
                      className="nm-raised h-8 w-full cursor-pointer rounded"
                    />
                    <button className="btn nm-raised h-8 px-3 text-sm">
                      Copy
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2">
                <div
                  className="nm-raised h-6 w-full cursor-pointer rounded"
                  style={{ backgroundColor: "#FF5733" }}
                ></div>
                <div
                  className="nm-raised h-6 w-full cursor-pointer rounded"
                  style={{ backgroundColor: "#33FF57" }}
                ></div>
                <div
                  className="nm-raised h-6 w-full cursor-pointer rounded"
                  style={{ backgroundColor: "#5733FF" }}
                ></div>
                <div
                  className="nm-raised h-6 w-full cursor-pointer rounded"
                  style={{ backgroundColor: "#FFFF33" }}
                ></div>
                <div
                  className="nm-raised h-6 w-full cursor-pointer rounded"
                  style={{ backgroundColor: "#33FFFF" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Validation Patterns */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Enhanced Validation Patterns</h3>

          {/* Credit Card Input with Live Validation */}
          <div className="form-control">
            <label className="form-label" htmlFor="card-number">
              Credit Card Number
            </label>
            <div className="relative">
              <input
                type="text"
                id="card-number"
                className="input nm-pressed w-full pr-10"
                placeholder="4111 1111 1111 1111"
                pattern="[0-9\s]{13,19}"
                maxLength={19}
                aria-describedby="card-validation"
              />
              <div className="absolute top-1/2 right-3 -translate-y-1/2">
                <span className="text-xl" role="img" aria-label="Visa">
                  💳
                </span>
              </div>
            </div>
            <p id="card-validation" className="mt-1 text-sm text-green-600">
              Format: XXXX XXXX XXXX XXXX
            </p>
          </div>

          {/* Enhanced Password Field */}
          <div className="form-control">
            <label className="form-label" htmlFor="password-complex">
              Password with Requirements
            </label>
            <div className="space-y-2">
              <div className="relative">
                <input
                  type="password"
                  id="password-complex"
                  className="input nm-pressed w-full pr-10"
                  aria-describedby="password-requirements"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 -translate-y-1/2 p-1"
                  aria-label="Toggle password visibility"
                >
                  👁️
                </button>
              </div>
              <div id="password-requirements" className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">8+ characters</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <span className="text-sm">One uppercase letter</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <span className="text-sm">One special character</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Number with Country Code */}
          <div className="form-control">
            <label className="form-label" htmlFor="phone">
              Phone Number
            </label>
            <div className="flex gap-2">
              <select
                className="select nm-pressed w-24"
                id="country-code"
                aria-label="Country code"
              >
                <option>+1</option>
                <option>+44</option>
                <option>+81</option>
              </select>
              <input
                type="tel"
                id="phone"
                className="input nm-pressed flex-1"
                placeholder="(555) 555-5555"
                pattern="[\d\s-()]+"
              />
            </div>
          </div>
        </div>

        {/* Specialized Input Types */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Specialized Inputs</h3>

          {/* Enhanced Color Picker */}
          <div className="form-control">
            <label className="form-label" id="color-picker-label">
              Enhanced Color Picker
            </label>
            <div
              role="group"
              aria-labelledby="color-picker-label"
              className="space-y-2"
            >
              <div className="flex gap-2">
                <div
                  className="nm-raised h-16 w-16 rounded-lg transition-transform hover:scale-105"
                  style={{ backgroundColor: "#FF5733" }}
                  role="img"
                  aria-label="Selected color preview: #FF5733"
                ></div>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="relative">
                    <input
                      type="text"
                      className="input nm-pressed pr-16"
                      value="#FF5733"
                      aria-label="Color hex value"
                    />
                    <button
                      className="hover:nm-pressed absolute top-1/2 right-2 -translate-y-1/2 rounded p-1"
                      aria-label="Copy color value"
                    >
                      Copy
                    </button>
                  </div>
                  <input
                    type="color"
                    value="#FF5733"
                    className="nm-raised h-8 w-full cursor-pointer rounded"
                    aria-label="Color picker"
                  />
                </div>
              </div>
              <div
                className="grid grid-cols-5 gap-2"
                role="listbox"
                aria-label="Color presets"
              >
                {["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF"].map(
                  (color) => (
                    <button
                      key={color}
                      className="nm-raised focus:ring-primary h-6 w-full cursor-pointer rounded transition-transform hover:scale-110 focus:ring-2 focus:outline-none"
                      style={{ backgroundColor: color }}
                      aria-label={`Select color: ${color}`}
                    />
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Enhanced Tags Input */}
          <div className="form-control">
            <label className="form-label" id="tags-label">
              Tags Input with Keyboard Support
            </label>
            <div
              className="nm-pressed flex flex-wrap gap-2 rounded-lg p-2"
              role="textbox"
              aria-labelledby="tags-label"
              tabIndex={0}
            >
              {["React", "TypeScript", "Tailwind"].map((tag, index) => (
                <span
                  key={tag}
                  className="bg-primary text-primary-foreground animate-float flex items-center gap-1 rounded px-2 py-1 text-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tag}
                  <button
                    className="opacity-50 transition-opacity hover:opacity-100"
                    aria-label={`Remove ${tag} tag`}
                  >
                    &times;
                  </button>
                </span>
              ))}
              <input
                type="text"
                className="flex-1 bg-transparent outline-none"
                placeholder="Type and press enter..."
                aria-label="Add new tag"
              />
            </div>
          </div>

          {/* Enhanced Range Slider */}
          <div className="form-control">
            <label className="form-label" id="range-label">
              Interactive Range with Steps
            </label>
            <div className="space-y-2">
              <div className="relative">
                <input
                  type="range"
                  className="w-full"
                  min="0"
                  max="100"
                  step="10"
                  value="60"
                  aria-labelledby="range-label"
                />
                <div className="absolute right-0 -bottom-6 left-0 flex justify-between text-xs">
                  <span>0</span>
                  <span>20</span>
                  <span>40</span>
                  <span>60</span>
                  <span>80</span>
                  <span>100</span>
                </div>
              </div>
              <div className="h-6"></div>
              <div className="flex justify-between">
                <button
                  className="btn nm-raised px-2 py-1 text-sm"
                  aria-label="Decrease by 10"
                >
                  -
                </button>
                <div className="nm-pressed rounded px-2 py-1" role="status">
                  Value: 60
                </div>
                <button
                  className="btn nm-raised px-2 py-1 text-sm"
                  aria-label="Increase by 10"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Date Range Picker */}
          <div className="form-control">
            <label className="form-label">Date Range</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="date"
                  className="input nm-pressed w-full"
                  aria-label="Start date"
                />
                <div className="absolute top-1/2 right-2 -translate-y-1/2 text-sm opacity-50">
                  From
                </div>
              </div>
              <div className="relative flex-1">
                <input
                  type="date"
                  className="input nm-pressed w-full"
                  aria-label="End date"
                />
                <div className="absolute top-1/2 right-2 -translate-y-1/2 text-sm opacity-50">
                  To
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Animations */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Interactive Animations</h3>

          {/* Hover Effects */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <button
              className="card nm-raised hover:nm-convex transition-all hover:scale-105"
              aria-label="Card with scale and shadow effect"
            >
              Scale + Shadow
            </button>
            <button
              className="card nm-raised hover:nm-convex transition-all hover:rotate-3"
              aria-label="Card with rotation effect"
            >
              Rotate
            </button>
            <button
              className="card nm-raised transition-all hover:-translate-y-2 hover:shadow-lg"
              aria-label="Card with lift effect"
            >
              Lift
            </button>
            <button
              className="card nm-raised hover:nm-pressed transition-all"
              aria-label="Card with press effect"
            >
              Press
            </button>
          </div>

          {/* Loading States */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <button className="card nm-raised" disabled>
              <div className="flex items-center gap-2">
                <div className="border-primary h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
                Loading...
              </div>
            </button>
            <button className="card nm-raised" disabled>
              <div className="flex items-center gap-2">
                <div className="bg-primary h-4 w-4 animate-pulse rounded-full"></div>
                Processing
              </div>
            </button>
            <button className="card nm-raised" disabled>
              <div className="flex items-center gap-2">
                <div className="animate-progress bg-primary h-1 w-full rounded-full"></div>
                Uploading
              </div>
            </button>
            <button className="card nm-raised animate-shimmer" disabled>
              <div className="h-4 w-full rounded bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Animation Showcase Section */}
      <section className="space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Animation Showcase</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="card nm-raised animate-float">
            <p className="text-center">Float</p>
          </div>

          <div className="card nm-raised animate-bounce">
            <p className="text-center">Bounce</p>
          </div>

          <div className="card nm-raised animate-shake">
            <p className="text-center">Shake</p>
          </div>

          <div className="card nm-raised animate-spin">
            <p className="text-center">Spin</p>
          </div>

          <div className="card nm-raised animate-pulse">
            <p className="text-center">Pulse</p>
          </div>

          <div className="card nm-raised animate-float animate-slow">
            <p className="text-center">Slow Float</p>
          </div>

          <div className="card nm-raised animate-fast animate-bounce">
            <p className="text-center">Fast Bounce</p>
          </div>

          <div className="card nm-raised animate-shake animate-once">
            <p className="text-center">Once Shake</p>
          </div>
        </div>
      </section>

      {/* Navigation Components */}
      <section className="space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Navigation Components</h2>

        {/* Basic Navigation */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Basic Navigation</h3>
          <nav className="flex flex-wrap gap-4">
            <a href="#" className="nav-link active">
              Home
            </a>
            <a href="#" className="nav-link">
              About
            </a>
            <a href="#" className="nav-link">
              Services
            </a>
            <a href="#" className="nav-link">
              Contact
            </a>
          </nav>
        </div>

        {/* Responsive Navigation */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Responsive Navigation</h3>
          <nav className="nm-raised rounded-lg p-4">
            {/* Mobile Menu Button */}
            <div className="flex items-center justify-between md:hidden">
              <span className="text-lg font-medium">Menu</span>
              <button className="btn-icon-only nm-flat hover:nm-pressed">
                <span className="block h-0.5 w-6 bg-current"></span>
                <span className="mt-1 block h-0.5 w-6 bg-current"></span>
                <span className="mt-1 block h-0.5 w-6 bg-current"></span>
              </button>
            </div>
            {/* Desktop Menu */}
            <ul className="hidden items-center justify-between md:flex">
              <li>
                <a href="#" className="nav-link active">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Breadcrumbs */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Breadcrumbs</h3>
          <nav className="flex items-center space-x-2 text-sm">
            <a href="#" className="hover:text-primary">
              Home
            </a>
            <span className="text-muted-foreground">/</span>
            <a href="#" className="hover:text-primary">
              Products
            </a>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Current Page</span>
          </nav>
        </div>

        {/* Enhanced Dropdown Menu */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Enhanced Dropdown Menu</h3>
          <div className="flex flex-wrap gap-4">
            {/* Basic Dropdown */}
            <div className="dropdown">
              <button className="btn nm-raised dropdown-trigger">
                Basic Dropdown
                <span className="text-xs">▼</span>
              </button>
              <div className="dropdown-content nm-raised">
                <a href="#" className="dropdown-item hover:nm-pressed">
                  Action
                </a>
                <a href="#" className="dropdown-item hover:nm-pressed">
                  Another action
                </a>
                <hr className="border-border my-1" />
                <a href="#" className="dropdown-item hover:nm-pressed">
                  Something else
                </a>
              </div>
            </div>

            {/* Multi-level Dropdown */}
            <div className="dropdown">
              <button className="btn btn-primary nm-raised dropdown-trigger">
                Multi-level
                <span className="text-xs">▼</span>
              </button>
              <div className="dropdown-content nm-raised">
                <a href="#" className="dropdown-item hover:nm-pressed">
                  Level 1
                </a>
                <div className="dropdown-submenu">
                  <button className="dropdown-item hover:nm-pressed flex w-full items-center justify-between text-left">
                    Level 2 <span className="text-xs">▶</span>
                  </button>
                  <div className="dropdown-content nm-raised top-0 left-full ml-1">
                    <a href="#" className="dropdown-item hover:nm-pressed">
                      Sub-item 1
                    </a>
                    <a href="#" className="dropdown-item hover:nm-pressed">
                      Sub-item 2
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Tabs Navigation</h3>
          <div className="nm-raised rounded-lg p-1">
            <nav className="flex gap-1">
              <button className="nm-pressed flex-1 rounded-md px-4 py-2">
                Tab 1
              </button>
              <button className="hover:nm-pressed flex-1 rounded-md px-4 py-2">
                Tab 2
              </button>
              <button className="hover:nm-pressed flex-1 rounded-md px-4 py-2">
                Tab 3
              </button>
            </nav>
          </div>
        </div>

        {/* Pagination */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Pagination</h3>
          <nav className="flex justify-center gap-1">
            <button className="btn nm-flat hover:nm-pressed px-3 py-1">
              Previous
            </button>
            <button className="btn nm-pressed px-3 py-1">1</button>
            <button className="btn nm-flat hover:nm-pressed px-3 py-1">
              2
            </button>
            <button className="btn nm-flat hover:nm-pressed px-3 py-1">
              3
            </button>
            <span className="btn nm-flat px-3 py-1">...</span>
            <button className="btn nm-flat hover:nm-pressed px-3 py-1">
              10
            </button>
            <button className="btn nm-flat hover:nm-pressed px-3 py-1">
              Next
            </button>
          </nav>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Mobile Bottom Navigation</h3>
          <nav className="nm-raised bg-background fixed right-0 bottom-0 left-0 p-4 md:relative">
            <div className="container mx-auto">
              <ul className="flex justify-around">
                <li>
                  <a href="#" className="flex flex-col items-center gap-1">
                    <span className="text-xl">🏠</span>
                    <span className="text-xs">Home</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex flex-col items-center gap-1">
                    <span className="text-xl">🔍</span>
                    <span className="text-xs">Search</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex flex-col items-center gap-1">
                    <span className="text-xl">❤️</span>
                    <span className="text-xs">Favorites</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex flex-col items-center gap-1">
                    <span className="text-xl">👤</span>
                    <span className="text-xs">Profile</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>

      {/* Enhanced Overlays & Modals */}
      <section className="space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">
          Enhanced Overlays & Modals
        </h2>

        {/* Modal Variants */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Modal Variants</h3>
          <div className="flex flex-wrap gap-4">
            {/* Basic Modal */}
            <div>
              <input
                type="checkbox"
                id="modal-basic"
                className="modal-toggle"
              />
              <label htmlFor="modal-basic" className="btn nm-raised">
                Basic Modal
              </label>
              <div className="modal">
                <label className="modal-overlay" htmlFor="modal-basic"></label>
                <div className="modal-content nm-raised">
                  <h3 className="text-lg font-semibold">Basic Modal</h3>
                  <p className="py-4">This is a basic modal example.</p>
                  <div className="flex justify-end gap-2">
                    <label
                      htmlFor="modal-basic"
                      className="btn nm-flat hover:nm-pressed"
                    >
                      Close
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Modal */}
            <div>
              <input
                type="checkbox"
                id="modal-slide"
                className="modal-toggle"
              />
              <label htmlFor="modal-slide" className="btn nm-raised">
                Slide Modal
              </label>
              <div className="modal">
                <label className="modal-overlay" htmlFor="modal-slide"></label>
                <div className="modal-content nm-raised slide-in-up">
                  <h3 className="text-lg font-semibold">Slide Modal</h3>
                  <p className="py-4">This modal slides up from the bottom.</p>
                  <div className="flex justify-end gap-2">
                    <label
                      htmlFor="modal-slide"
                      className="btn nm-flat hover:nm-pressed"
                    >
                      Close
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Screen Modal */}
            <div>
              <input type="checkbox" id="modal-full" className="modal-toggle" />
              <label htmlFor="modal-full" className="btn nm-raised">
                Full Screen
              </label>
              <div className="modal">
                <div className="bg-background fade-in fixed inset-0">
                  <div className="container mx-auto p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-lg font-semibold">
                        Full Screen Modal
                      </h3>
                      <label
                        htmlFor="modal-full"
                        className="btn-icon-only nm-flat hover:nm-pressed"
                      >
                        ×
                      </label>
                    </div>
                    <p>This is a full screen modal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Toast Messages */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Enhanced Toast Messages</h3>
          <div className="space-y-4">
            {/* Success Toast */}
            <div className="toast show nm-raised slide-in-right">
              <div className="flex items-center gap-4">
                <div className="text-green-500">✓</div>
                <div className="flex-1">
                  <h4 className="font-medium">Success</h4>
                  <p className="text-muted-foreground text-sm">
                    Operation completed successfully.
                  </p>
                </div>
                <button className="btn-icon-only nm-flat hover:nm-pressed">
                  ×
                </button>
              </div>
            </div>

            {/* Error Toast */}
            <div
              className="toast show nm-raised slide-in-right"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-center gap-4">
                <div className="text-red-500">⚠</div>
                <div className="flex-1">
                  <h4 className="font-medium">Error</h4>
                  <p className="text-muted-foreground text-sm">
                    Something went wrong.
                  </p>
                </div>
                <button className="btn-icon-only nm-flat hover:nm-pressed">
                  ×
                </button>
              </div>
            </div>

            {/* Info Toast with Action */}
            <div
              className="toast show nm-raised slide-in-right"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center gap-4">
                <div className="text-blue-500">ℹ</div>
                <div className="flex-1">
                  <h4 className="font-medium">Information</h4>
                  <p className="text-muted-foreground text-sm">
                    New update available.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="btn nm-flat hover:nm-pressed text-sm">
                    Update
                  </button>
                  <button className="btn-icon-only nm-flat hover:nm-pressed">
                    ×
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Alerts */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Enhanced Alerts</h3>
          <div className="space-y-4">
            {/* Info Alert with Icon */}
            <div className="alert nm-raised">
              <div className="flex items-center gap-4">
                <div className="text-2xl text-blue-500">ℹ</div>
                <div className="flex-1">
                  <h4 className="font-medium">Information</h4>
                  <p className="text-sm">
                    This is an informational message with an icon.
                  </p>
                </div>
                <button className="btn-icon-only nm-flat hover:nm-pressed">
                  ×
                </button>
              </div>
            </div>

            {/* Warning Alert with Actions */}
            <div className="alert nm-raised">
              <div className="flex items-center gap-4">
                <div className="text-2xl text-yellow-500">⚠</div>
                <div className="flex-1">
                  <h4 className="font-medium">Warning</h4>
                  <p className="text-sm">This action cannot be undone.</p>
                </div>
                <div className="flex gap-2">
                  <button className="btn nm-flat hover:nm-pressed text-sm">
                    Cancel
                  </button>
                  <button className="btn btn-primary nm-raised text-sm">
                    Proceed
                  </button>
                </div>
              </div>
            </div>

            {/* Success Alert with Progress */}
            <div className="alert nm-raised">
              <div className="flex items-center gap-4">
                <div className="text-2xl text-green-500">✓</div>
                <div className="flex-1">
                  <h4 className="font-medium">Upload Complete</h4>
                  <div className="nm-pressed mt-2 h-2 overflow-hidden rounded-full">
                    <div className="animate-progress h-full w-full bg-green-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avatar & User Components */}
      <section className="space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">
          Avatar & User Components
        </h2>

        {/* Avatar Sizes */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Avatar Sizes</h3>
          <div className="flex items-center gap-4">
            <div className="avatar avatar-sm">
              <img src="https://i.pravatar.cc/32" alt="User" />
            </div>
            <div className="avatar avatar-md">
              <img src="https://i.pravatar.cc/48" alt="User" />
            </div>
            <div className="avatar avatar-lg">
              <img src="https://i.pravatar.cc/64" alt="User" />
            </div>
          </div>
        </div>

        {/* Avatar Group */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Avatar Group</h3>
          <div className="avatar-group">
            <div className="avatar avatar-md">
              <img src="https://i.pravatar.cc/48?1" alt="User 1" />
            </div>
            <div className="avatar avatar-md">
              <img src="https://i.pravatar.cc/48?2" alt="User 2" />
            </div>
            <div className="avatar avatar-md">
              <img src="https://i.pravatar.cc/48?3" alt="User 3" />
            </div>
            <div className="avatar avatar-md bg-muted flex items-center justify-center">
              <span className="text-sm">+3</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Links */}
      <section className="space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Enhanced Links</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Link Variants</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <a href="#" className="link">
                Default Link
              </a>
              <a href="#" className="link-underline">
                Underline Link
              </a>
              <a href="#" className="link-fade">
                Fade Link
              </a>
            </div>

            <div className="flex gap-4">
              <a href="#" className="link">
                <span>With Icon</span>
                <span>→</span>
              </a>
              <a href="#" className="link">
                <span>Download</span>
                <span>↓</span>
              </a>
              <a href="#" className="link">
                <span>External</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Context Menu */}
      <section className="space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Context Menu</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Context Menu Example</h3>
          <div className="context-menu-trigger inline-block">
            <div className="card nm-raised p-8">
              <p>Hover me to see the context menu</p>
            </div>
            <div className="context-menu">
              <a href="#" className="dropdown-item">
                Edit
              </a>
              <a href="#" className="dropdown-item">
                Duplicate
              </a>
              <hr className="border-border my-1" />
              <a href="#" className="dropdown-item text-red-600">
                Delete
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
