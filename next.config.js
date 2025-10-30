/** @type {import('next').NextConfig} */
const nextConfig = {
	serverExternalPackages: [
		"resend",
		"@react-email/components",
		"@react-email/tailwind",
	],
	images: {
		qualities: [75, 95],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "logos-world.net",
			},
		],
	},
};

module.exports = nextConfig;
