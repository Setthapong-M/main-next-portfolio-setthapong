/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["storage.naiin.com"],
        domains: ["images-se-ed.com"]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
