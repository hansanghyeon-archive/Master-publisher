const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');
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
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = {
    '@src': path.resolve(__dirname, '../src/'),
    '@utile': path.resolve(__dirname, '../src/utils'),
    '@FM/atom': path.resolve(__dirname, '../src/components/FramerMotion/atoms'),
    '@FM/molecule': path.resolve(
      __dirname,
      '../src/components/FramerMotion/molecules',
    ),
    '@FM/organism': path.resolve(
      __dirname,
      '../src/components/FramerMotion/organisms',
    ),
    '@FM/template': path.resolve(
      __dirname,
      '../src/components/FramerMotion/templates',
    ),
  };
  return config;
};
