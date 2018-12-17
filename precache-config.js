var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [],
    stripePrefix: 'dist/browser',
    root: 'dist/browser',
    plugins:[
        new SWPrecacheWebpackPlugin({
            cacheId: 'ng-pwa',
            filename: 'service-worker.js',
            staticFileGlobs: [
                'dist/browser/index.html',
                'dist/browser/**.js',
                'dist/browser/**.css'
            ],

        })
    ],
    stripePrefix: 'dist/browser/assets',
    mergeStaticsConfig: true
};
