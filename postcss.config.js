const purgecss = require("@fullhuman/postcss-purgecss");
const postcssImport = require("postcss-import");
const cssnano = require("cssnano");
const postcssPresetEnv = require("postcss-preset-env");
const postcssNested = require("postcss-nested");

module.exports = {
  map: false,
  plugins: [
    postcssImport(),
    postcssNested(),
    postcssPresetEnv({
      stage: 2,
    }),
    purgecss({
      content: ["index.html"],
      css: ["assets/custom.css"],
      keyframes: true,
      variables: true,
    }),
    // cssnano({
    //   preset: "default",
    // }),
  ],
};
