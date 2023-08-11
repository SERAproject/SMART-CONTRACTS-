const withImages = require('next-images');

const redirects = {
  async redirects() {
    return [
      {
        source: '/dashboards',
        destination: '/dashboards/tasks',
        permanent: true
      }
    ];
  },
  // Other Next.js configuration options...
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/public/static/assets/:path*',
      },
    ];
  },
};

module.exports = withImages(redirects);
