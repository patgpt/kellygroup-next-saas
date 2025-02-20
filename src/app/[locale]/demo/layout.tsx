export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="flex items-center gap-4">
            {/* Drawer Toggle */}
            <label
              htmlFor="drawer-toggle"
              className="btn-icon-only nm-raised cursor-pointer"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="flex flex-col gap-1.5 p-1">
                <span className="bg-foreground block h-0.5 w-5"></span>
                <span className="bg-foreground block h-0.5 w-5"></span>
                <span className="bg-foreground block h-0.5 w-5"></span>
              </div>
            </label>

            {/* Logo */}
            <a href="/" className="text-xl font-semibold">
              Logo
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="nav-menu">
              <li>
                <a href="#" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <button className="dropdown-trigger">
                  Products
                  <span className="text-xs">▼</span>
                </button>
                <div className="dropdown-content">
                  <a href="#" className="dropdown-item">
                    Category 1
                  </a>
                  <a href="#" className="dropdown-item">
                    Category 2
                  </a>
                  <a href="#" className="dropdown-item">
                    Category 3
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <button className="dropdown-trigger">
                  Services
                  <span className="text-xs">▼</span>
                </button>
                <div className="mega-menu">
                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <h3 className="mb-4 font-semibold">Column 1</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="link-fade">
                            Link 1
                          </a>
                        </li>
                        <li>
                          <a href="#" className="link-fade">
                            Link 2
                          </a>
                        </li>
                        <li>
                          <a href="#" className="link-fade">
                            Link 3
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-4 font-semibold">Column 2</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="link-fade">
                            Link 4
                          </a>
                        </li>
                        <li>
                          <a href="#" className="link-fade">
                            Link 5
                          </a>
                        </li>
                        <li>
                          <a href="#" className="link-fade">
                            Link 6
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-4 font-semibold">Column 3</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="link-fade">
                            Link 7
                          </a>
                        </li>
                        <li>
                          <a href="#" className="link-fade">
                            Link 8
                          </a>
                        </li>
                        <li>
                          <a href="#" className="link-fade">
                            Link 9
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Avatar Dropdown */}
            <div className="dropdown">
              <button className="avatar avatar-sm">
                <img src="https://i.pravatar.cc/40" alt="User" />
              </button>
              <div className="dropdown-content right-0 left-auto">
                <a href="#" className="dropdown-item">
                  Profile
                </a>
                <a href="#" className="dropdown-item">
                  Settings
                </a>
                <hr className="border-border my-1" />
                <a href="#" className="dropdown-item text-red-600">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer */}
      <input type="checkbox" id="drawer-toggle" className="drawer-toggle" />
      <div className="drawer-overlay"></div>
      <aside className="drawer p-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Menu</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:nm-pressed block rounded-md px-4 py-2"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:nm-pressed block rounded-md px-4 py-2"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:nm-pressed block rounded-md px-4 py-2"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:nm-pressed block rounded-md px-4 py-2"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:nm-pressed block rounded-md px-4 py-2"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="mt-[var(--nav-height)] min-h-[calc(100vh-var(--nav-height))] pb-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Us</h3>
            <p className="text-muted-foreground text-sm">
              Short description about your company or website.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="link-fade">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="link-fade">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="link-fade">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="link-fade">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>Email: info@example.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Street, City</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="btn-icon-only nm-raised hover:nm-pressed">
                <span className="sr-only">Twitter</span>
                <span className="text-xl">𝕏</span>
              </a>
              <a href="#" className="btn-icon-only nm-raised hover:nm-pressed">
                <span className="sr-only">GitHub</span>
                <span className="text-xl">🐙</span>
              </a>
              <a href="#" className="btn-icon-only nm-raised hover:nm-pressed">
                <span className="sr-only">LinkedIn</span>
                <span className="text-xl">💼</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
