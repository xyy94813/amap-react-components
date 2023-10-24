import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';

// eslint-disable-next-line import/extensions
import pkg from './package.json';

const deps = [...Object.keys(pkg.peerDependencies || {}), ...Object.keys(pkg.dependencies || {})];

const external = (id) => deps.includes(id) || /@babel\/runtime\//.test(id);

const inputPath = path.join(__dirname, 'src', 'index.ts');

const OUTPUT_DIR = 'dist';

const getBasicConf = () => ({
  input: inputPath,
  external,
});

const getDistDir = (moduleType) => {
  switch (moduleType) {
    case 'umd':
    case 'cjs':
      return OUTPUT_DIR;
    case 'es':
      return path.join(OUTPUT_DIR, 'es');
    default:
      throw Error('Unknown Module Type');
  }
};

const getConf = (env, moduleType) => {
  const distLib = getDistDir(moduleType);
  const fileName = moduleType === 'umd' ? `${pkg.name}.browser.js` : `${pkg.name}.${env}.js`;
  const outputPath = path.join(distLib, fileName);

  const isProd = env === 'production';

  const outputDeclaration = moduleType === 'cjs'; // for only declaration once

  const plugins = [
    typescript({
      useTsconfigDeclarationDir: outputDeclaration,
      tsconfigOverride: {
        compilerOptions: {
          declaration: outputDeclaration, // only es format output declaration
          declarationDir: path.join(OUTPUT_DIR, 'types'),
        },
        exclude: [
          // exclude test files
          '**/__tests__/**',
          '**/*.test.*',
          '**/*.spec.*',
          // exclude stories files
          '**/stories/**',
          '**/*.stories.*',
          '**/storybook-decorators/**',
        ],
      },
    }),
    filesize(),
  ];

  if (isProd) {
    plugins.push(terser());
  }

  return {
    ...getBasicConf(),
    output: {
      file: outputPath,
      format: moduleType,
      sourcemap: true,
      // for umd
      name: 'AMapReact',
      globals: {
        react: 'React',
        '@amap/amap-jsapi-loader': 'AMapLoader',
      },
    },
    plugins,
  };
};

export default [
  getConf('production', 'cjs'),
  getConf('production', 'es'),
  getConf('production', 'umd'),
];
