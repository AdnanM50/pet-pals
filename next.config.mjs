/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        backendUrl: "http://localhost:8985/",
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
