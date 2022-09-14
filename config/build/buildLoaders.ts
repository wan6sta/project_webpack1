import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {

  const typescriptLoader = {
    // Регулярка на ts и tsx
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    // Какие файлы будет ловить TS
    typescriptLoader,
  ]
}