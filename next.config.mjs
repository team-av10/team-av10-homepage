/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'], // Add 'cdn.sanity.io' to the array of allowed domains
      },
};

export default nextConfig;
