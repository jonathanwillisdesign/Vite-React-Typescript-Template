const StyleDictionary = require("style-dictionary-utils");

const config = StyleDictionary.extend({
  source: ["tokens/**/*.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "src/styles/1_foundations/",
      files: [
        {
          destination: "tokens.scss",
          format: "scss/map-deep",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
});

config.buildAllPlatforms();
