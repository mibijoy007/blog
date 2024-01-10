/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com' ,
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname:  'firebasestorage.googleapis.com',
          port: '',
          pathname: '**',
        },
      ],
    },
  }
