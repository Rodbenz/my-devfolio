/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // i18n,
  env:{
    NODEMAILER_PW: process.env.NODEMAILER_PW,
    NODEMAILER_EMAIL: process.env.NODEMAILER_EMAIL,
  }
}

module.exports = nextConfig
