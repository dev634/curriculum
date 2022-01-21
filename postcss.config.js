const purgecss = require("@fullhuman/postcss-purgecss");
const postcssImport = require("postcss-import");
const cssnano = require("cssnano");

module.exports = {
  map: false,
  plugins: [
    postcssImport(),
    purgecss({
      content: ["index.html"],
      css: ["assets/custom.css"],
      keyframes: true,
      variables: true,
    }),
    cssnano({
      preset: "default",
    }),
  ],
};
