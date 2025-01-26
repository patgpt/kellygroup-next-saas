import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: "./src/i18n/messages/en.json",
  },
});
const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
