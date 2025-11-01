/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // App Router + RSC está OK aqui
  },
  i18n: {
    // Mantemos a config nativa do Next para SEO e <html lang="">
    locales: ["pt", "en", "es"],
    defaultLocale: "pt",
  },
};

module.exports = nextConfig;
