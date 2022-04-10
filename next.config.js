/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "tailwindui.com",
      "lh3.googleusercontent.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
