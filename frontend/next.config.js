const withPWA = require('next-pwa')({
  dest: 'public',
  register : true,
  skipWaiting:true,
})

module.exports = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/358nabeel/**',
      },
    ],
  },
  eslint: { ignoreDuringBuilds: true },

  // assetPrefix: "http://localhost:8000/static",
})