module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addWatchTarget('_site/assets/*.css');

    eleventyConfig.setBrowserSyncConfig({
    files: ['_site/assets/*.css']
    });
}