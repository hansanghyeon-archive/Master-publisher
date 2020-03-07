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
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  });
  config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');
  config.resolve.alias = {
    '@src': path.resolve(__dirname, '../src/'),
    '@atom': path.resolve(__dirname, '../src/views/components/atoms'),
    '@molecule': path.resolve(__dirname, '../src/views/components/molecules'),
    '@organism': path.resolve(__dirname, '../src/views/components/organisms'),
    '@template': path.resolve(__dirname, '../src/views/components/templates'),
    '@animation': path.resolve(__dirname, '../src/views/components/animations'),
    '@style': path.resolve(__dirname, '../src/views/components/styles'),
    '@utile': path.resolve(__dirname, '../src/utilites'),
  };
  return config;
};
