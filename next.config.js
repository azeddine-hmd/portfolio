/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: [
      "resend",
      "@react-email/components",
      "@react-email/tailwind",
    ],
  },
};

module.exports = nextConfig;
