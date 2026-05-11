import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'admin.edifyelite.com.pk' },
      { protocol: 'https', hostname: 'edifyelite.com.pk' },
      { protocol: 'https', hostname: 'admin.edify.pk' },
      { protocol: 'https', hostname: 'edify.pk' },
    ],
  },
};

export default nextConfig;
