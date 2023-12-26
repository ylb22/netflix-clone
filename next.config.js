/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
    ],
  },
};

// images: {
//   remotePatterns: [
//     {
//       protocol: 'https',
//       hostname: 'res.cloudinary.com',
//       pathname: '**',
//     },
//   ],
// },
module.exports = nextConfig;
