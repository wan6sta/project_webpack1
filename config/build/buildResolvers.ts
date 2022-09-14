import {ResolveOptions} from 'webpack';

export function buildResolvers(): ResolveOptions {

  return {
    // Разрешаем импортировать файлы без расширений "./test"
    extensions: ['.tsx', '.ts', '.js'],
  }
}