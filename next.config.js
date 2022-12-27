const withPwa = require("next-pwa")({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  }
}

module.exports = withPwa(nextConfig)
