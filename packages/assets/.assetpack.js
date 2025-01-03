import { compress } from '@assetpack/core/image';
import { css } from './src/plugins/css/index.js';

export default {
  entry: './src',
  output: './build',
  pipes: [
    css(),
    compress({
      jpg: { quality: 80 },
      png: { quality: 90 },
      webp: { quality: 80 },
    }),
  ],
};
