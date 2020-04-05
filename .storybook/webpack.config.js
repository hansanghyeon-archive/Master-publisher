const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
//dont need stories path if you have your stories inside your //components folder
module.exports = ({ config }) => {
  config.module.rules[0].include = [SRC_PATH];
  config.module.rules[0].use[0].loader = require.resolve('babel-loader');
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ];
  config.resolve.mainFields = ['browser', 'module', 'main'];
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          prependData: `@import '~@style/global';`,
        },
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');
  config.resolve.alias = {
    '@src': path.resolve(__dirname, '../src/'),
    // Views
    '@view': path.resolve(__dirname, '../src/views'),
    '@atom': path.resolve(__dirname, '../src/views/components/atoms'),
    '@molecule': path.resolve(__dirname, '../src/views/components/molecules'),
    '@organism': path.resolve(__dirname, '../src/views/components/organisms'),
    '@template': path.resolve(__dirname, '../src/views/components/templates'),
    '@animation': path.resolve(__dirname, '../src/views/components/animations'),
    '@style': path.resolve(__dirname, '../src/views/styles'),
    // Utilities
    '@utile': path.resolve(__dirname, '../src/utilites'),
    // Models
    '@model': path.resolve(__dirname, '../src/models'),
  };
  config.module.rules.push({
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  });
  config.module.rules.push({
    // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
    //     the docs page from the markdown
    test: /\.(stories|story)\.mdx$/,
    use: [
      {
        loader: 'babel-loader',
        // may or may not need this line depending on your app's setup
        options: {
          plugins: ['@babel/plugin-transform-react-jsx'],
        },
      },
      {
        loader: '@mdx-js/loader',
        options: {
          compilers: [createCompiler({})],
        },
      },
    ],
  });
  return config;
};
