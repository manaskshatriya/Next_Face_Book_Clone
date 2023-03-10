/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: [
      "platform-lookaside.fbsbx.com",
      "links.papareact.com",
      "firebasestorage.googleapis.com",
    ]
  }
}

module.exports = nextConfig
