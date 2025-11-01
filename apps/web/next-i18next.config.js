/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "es"],
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
