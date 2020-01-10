/** @type {import('@vue/cli-service').ProjectOptions} */
module.exports = {
  transpileDependencies: [
    '@guijs/frontend-ui',
  ],

  chainWebpack (config) {
    config.resolve.symlinks(false)
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  },
}
