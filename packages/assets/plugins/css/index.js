import { checkExt, createNewAssetAt, Logger } from '@assetpack/core';
import CleanCss from 'clean-css';

export function css(options = {}) {
  return {
    name: 'css',
    folder: false,
    defaultOptions: null,
    async transform(asset) {
      try {
        const css = new CleanCss(options).minify(asset.buffer.toString());
        const compressedCssAsset = createNewAssetAt(asset, asset.filename);

        compressedCssAsset.buffer = Buffer.from(css.styles);

        return [compressedCssAsset];
      } catch {
        Logger.warn(`[AssetPack][css] Failed to compress css file: ${asset.path}`);

        return [asset];
      }
    },
    test(asset) {
      return checkExt(asset.path, '.css');
    },
  };
}
