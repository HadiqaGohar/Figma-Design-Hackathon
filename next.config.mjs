/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'], // Add this line to allow images from the Sanity CDN
      },
};

export default nextConfig;
// ...