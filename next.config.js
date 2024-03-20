/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    // remotePatterns : ['youtube.com', 'img.youtube.com', 'foyr.com'] // <== Domain name
    remotePatterns : [
      {
        protocol : 'https',
        hostname : 'youtube.com',
      },
      {
        protocol : 'https',
        hostname : 'img.youtube.com',
      },
      {
        protocol : 'https',
        hostname : 'foyr.com',
      },
      {
        protocol : 'https',
        hostname : 'picsum.photos',
      },{
        protocol : 'https',
        hostname : 'loremflickr.com',
      },
      {
        protocol:'https',
        hostname: 'images.unsplash.com',
      }
    ]
  },
}

module.exports = nextConfig
