/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        backendUrl: "http://localhost:8985/api/",
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
