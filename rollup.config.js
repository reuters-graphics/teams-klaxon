import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';

const config = [
  {
    input: './src/types.ts',
    output: { file: 'dist/types.d.ts' },
    plugins: [dts()],
  },
  {
    input: './src/index.ts',
    output: { dir: 'dist' },
    external: ['axios', 'ajv', 'ajv-formats'],
    plugins: [json(), typescript()],
  },
];

export default config;
