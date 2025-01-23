export function buildManifest<T extends Record<string, string>>(manifest: T) {
  const assetsUrl = process.env.ASSETS_URL;

  if (!assetsUrl) {
    throw new Error('ASSETS_URL environment variable is not set');
  }

  return Object.keys(manifest).reduce(
    (acc, key: keyof T) => {
      acc[key] = `${assetsUrl}/${manifest[key]}`.replaceAll('//', '/');
      return acc;
    },
    {} as Record<keyof T, string>,
  );
}
