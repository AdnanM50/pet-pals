import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
  },
  // sassOptions: {
  //   implementation: 'sass-embedded',
  // },
};

export default nextConfig;
