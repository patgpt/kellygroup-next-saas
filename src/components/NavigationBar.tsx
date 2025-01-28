import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, ChevronUp } from "lucide-react"; // Import icons for the menu and dropdown
import I18nNavigationLink from "@/components/I18nNavigationLink";
import LanguageSwitcher from "@/components/LanguageSelect";
import ModeToggle from "@/components/ThemeToggle";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"; // Import Collapsible components
import { DialogTitle } from "@radix-ui/react-dialog";

function NavigationBar() {
  return (
    <div className="bg-primary text-accent-foreground dark:bg-accent dark:text-accent-background sticky top-0 z-50 flex w-full items-center justify-between border-b p-4 shadow-2xl">
      {/* Site Title */}
      <I18nNavigationLink href="/" className="text-lg font-bold">
        KellyGroup
      </I18nNavigationLink>

      {/* Desktop Navigation Menu (hidden on small screens) */}
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <I18nNavigationLink
                href="/"
                className="hover:bg-accent rounded-sm px-4 py-2"
              >
                Home
              </I18nNavigationLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <I18nNavigationLink
                href="/about"
                className="hover:bg-accent rounded-sm px-4 py-2"
              >
                About
              </I18nNavigationLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-accent rounded-sm px-4 py-2">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-1 p-2">
                  <li>
                    <I18nNavigationLink
                      href="/services/web-design"
                      className="hover:bg-accent block rounded-sm px-4 py-2"
                    >
                      Web Design
                    </I18nNavigationLink>
                  </li>
                  <li>
                    <I18nNavigationLink
                      href="/services/branding"
                      className="hover:bg-accent block rounded-sm px-4 py-2"
                    >
                      Branding
                    </I18nNavigationLink>
                  </li>
                  <li>
                    <I18nNavigationLink
                      href="/services/consulting"
                      className="hover:bg-accent block rounded-sm px-4 py-2"
                    >
                      Consulting
                    </I18nNavigationLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <I18nNavigationLink
                href="/contact"
                className="hover:bg-accent rounded-sm px-4 py-2"
              >
                Contact
              </I18nNavigationLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Drawer Button (visible on small screens) */}
      <div className="flex items-center space-x-4 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <DialogTitle className="text-lg font-bold">KellyGroup</DialogTitle>

            {/* Mobile Navigation Menu */}
            <nav className="flex flex-col space-y-4">
              <SheetClose asChild>
                <I18nNavigationLink
                  href="/"
                  className="hover:bg-accent rounded-sm px-4 py-2"
                >
                  Home
                </I18nNavigationLink>
              </SheetClose>
              <SheetClose asChild>
                <I18nNavigationLink
                  href="/about"
                  className="hover:bg-accent rounded-sm px-4 py-2"
                >
                  About
                </I18nNavigationLink>
              </SheetClose>

              {/* Collapsible "Services" Menu */}
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="hover:bg-accent w-full justify-between rounded-sm px-4 py-2"
                  >
                    Services
                    <ChevronDown className="collapsible-chevron h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-4">
                  <ul className="flex flex-col space-y-2">
                    <li>
                      <SheetClose asChild>
                        <I18nNavigationLink
                          href="/services/web-design"
                          className="hover:bg-accent block rounded-sm px-4 py-2"
                        >
                          Web Design
                        </I18nNavigationLink>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <I18nNavigationLink
                          href="/services/branding"
                          className="hover:bg-accent block rounded-sm px-4 py-2"
                        >
                          Branding
                        </I18nNavigationLink>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <I18nNavigationLink
                          href="/services/consulting"
                          className="hover:bg-accent block rounded-sm px-4 py-2"
                        >
                          Consulting
                        </I18nNavigationLink>
                      </SheetClose>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              <SheetClose asChild>
                <I18nNavigationLink
                  href="/contact"
                  className="hover:bg-accent rounded-sm px-4 py-2"
                >
                  Contact
                </I18nNavigationLink>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Language Switcher and Theme Toggle */}
      <div className="hidden items-center space-x-4 md:flex">
        <LanguageSwitcher />
        <ModeToggle />
      </div>
    </div>
  );
}

export default NavigationBar;
