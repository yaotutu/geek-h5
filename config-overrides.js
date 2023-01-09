const { override, addWebpackAlias, addPostcssPlugins } = require("customize-cra");
const path = require("path");
const px2viewport = require("postcss-px-to-viewport")

// 配置别名
const alias =   addWebpackAlias({
    "@": path.join(__dirname, "src"),
    "@scss": path.join(__dirname, "src/assets/styles"),
  })
//配置postCss
const postcssPlugins = addPostcssPlugins([
    px2viewport({
        viewportWidth: 375
    })
])
module.exports = override(
    alias,
    postcssPlugins
);
