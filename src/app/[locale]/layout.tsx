// import { Footer } from "@/components/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/index.css";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "../../i18n/routing";

export const metadata: Metadata = {
  title: "Kellygroup Next SaaS",
  description: "A modern SaaS application with neumorphic design system",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const currentLocale = (await params).locale;
  const messages = await getMessages();

  return (
    <html lang={currentLocale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages} locale={currentLocale}>
            <div suppressHydrationWarning>
              {/* Main Content */}
              <main className="mt-[var(--nav-height)] min-h-[calc(100vh-var(--nav-height))] pb-8">
                {children}
              </main>
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
