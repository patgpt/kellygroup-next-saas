import I18nNavigationLink from "@/components/I18nNavigationLink";

function Footer() {
  
  return (
    <footer className="bg-primary border-t-accent-foreground text-accent-foreground dark:bg-accent dark:text-accent-background mt-auto w-full border-t py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Branding  */}
          <div className="space-y-4">
            <I18nNavigationLink href="/" className="text-lg font-bold">
              KellyGroup
            </I18nNavigationLink>
          </div>

          {/* Site Navigation Links */}
          <div className="grid grid-cols-2 gap-4 md:col-span-3 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase">
                Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <I18nNavigationLink
                    href="/"
                    className="hover:text-accent-foreground/80 text-sm"
                  >
                    Home
                  </I18nNavigationLink>
                </li>
                <li>
                  <I18nNavigationLink
                    href="/about"
                    className="hover:text-accent-foreground/80 text-sm"
                  >
                    About
                  </I18nNavigationLink>
                </li>
                <li>
                  <I18nNavigationLink
                    href="/services"
                    className="hover:text-accent-foreground/80 text-sm"
                  >
                    Services
                  </I18nNavigationLink>
                </li>
                <li>
                  <I18nNavigationLink
                    href="/contact"
                    className="hover:text-accent-foreground/80 text-sm"
                  >
                    Contact
                  </I18nNavigationLink>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase">Services</h3>
              <ul className="space-y-2">
                <li>
                  <I18nNavigationLink
                    href="/services/web-design"
                    className="hover:text-accent-foreground/80 text-sm"
                  >
                    Web Design
                  </I18nNavigationLink>
                </li>
                <li>
                  <I18nNavigationLink
                    href="/services/branding"
                    className="hover:text-accent-foreground/80 text-sm"
                  >
                    Branding
                  </I18nNavigationLink>
                </li>
                <li>
                  <I18nNavigationLink
                    href="/services/consulting"
                    className="hover:text-accent-foreground/80 text-sm"
                  >
                    Consulting
                  </I18nNavigationLink>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <I18nNavigationLink
                    href="/privacy-policy"
                    className="hover:text-accent-foreground/80 text-sm"
                  >
                    Privacy Policy
                  </I18nNavigationLink>
                </li>
                <li>
                  <I18nNavigationLink
                    href="/terms-of-service"
                    className="hover:text-accent-foreground/80 text-sm"
                  >
                    Terms of Service
                  </I18nNavigationLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="container mx-auto mt-8 px-4 text-center text-sm">
        &copy; {new Date().getFullYear()} KellyGroup. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
