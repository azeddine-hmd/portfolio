/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [
    "resend",
    "@react-email/components",
    "@react-email/tailwind",
  ],
};

module.exports = nextConfig;
