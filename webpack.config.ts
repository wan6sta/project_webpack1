import path from 'path'
import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'

const config: webpack.Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  plugins: [
    // Плагин для HTML
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    // Какие файлы будет ловить TS
    rules: [
      {
        // Регулярка на ts и tsx
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // Разрешаем импортировать файлы без расширений "./test"
    extensions: ['.tsx', '.ts', '.js'],
  },
}

export default config