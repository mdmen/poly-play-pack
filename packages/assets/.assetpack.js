import { compress } from '@assetpack/core/image';
import { css } from './plugins/css/index.js';

export default {
  entry: './public',
  output: './dist',
  pipes: [
    css(),
    compress({
      jpg: { quality: 80 },
      png: { quality: 90 },
      webp: { quality: 80 },
    }),
  ],
};
