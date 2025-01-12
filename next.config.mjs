/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        backendUrl: "http://localhost:3001",
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
