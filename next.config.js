// next.config.js 
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssLoaderOptions: {
    esModule: true,
    url: false
  }
});