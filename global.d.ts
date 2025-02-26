// global.d.ts

import { formats } from "@/i18n/request";
import messages from "@/i18n/messages/en-US.json";

declare module "next-intl" {
  interface AppConfig {
    Messages: typeof messages;
    Formats: typeof formats;
    Locale: (typeof routing.locales)[number];
  }
}
