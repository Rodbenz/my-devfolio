const path = require("path");
module.exports = {
    debug: process.env.NODE_ENV === 'development',
    i18n: {
      locales: ["default", "en", "th"],
      defaultLocale: "default",
      localeDetection: false,
      localePath: path.resolve("./public/locales"),
    },
  };