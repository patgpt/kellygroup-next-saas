import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  // Step 1: Use the incoming request (example)
  // const defaultLocale = request.headers.get("x-your-custom-locale") || "en";

  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createMiddleware({
    locales: routing.locales,
    defaultLocale: routing.defaultLocale,
  });
  const response = handleI18nRouting(request);
  console.log(response.headers);
  // Step 3: Alter the response (example)
  // response.headers.set("x-your-custom-locale", defaultLocale);

  return response;
}
export const config = {
  // Match all pathnames except for

  matcher: [
    "/",
    // Match only internationalized pathnames
    "/(fr-CA|en-US)/:path*",
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
