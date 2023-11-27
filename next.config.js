/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/tennis",

  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
