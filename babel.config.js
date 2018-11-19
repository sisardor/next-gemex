module.exports = {
  presets: [
    'next/babel',
  ],
  plugins: [
    ['styled-components',{
      preprocess: false,
      ssr: true,
      displayName: true,
    }],
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": {
          "components": "./src/components",
          "containers": "./src/containers",
          "utils": "./src/utils",
          "translations": "./src/translations"
        }
      }
    ]
  ]
};
