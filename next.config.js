const withTS = require('next-offline')
const withSass = require('@zeit/next-sass')
const compose = require('next-compose')

const tsConfig = {
  target: 'serverless', transformManifest: manifest => ['/'].concat(manifest),
  workboxOpts: {
    swDest: 'static/service-worker.js', runtimeCaching: [{
      urlPattern: /^https?.*!/, handler: 'NetworkFirst', options: {
        cacheName: 'https-calls', networkTimeoutSeconds: 15, expiration: {
          maxEntries: 150, maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
        }, cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },],
  },
}

const sassConfig = {
  cssModules: true
}

module.exports = compose([
  [withTS, tsConfig],
  [withSass, sassConfig],
  {
    webpack: (config) => {
      /**some special code */
      return config
    }
  }
])