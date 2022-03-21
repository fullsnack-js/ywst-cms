import { ROOT_URL } from './root-url';
const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET;
export default function resolveProductionUrl(doc) {
  if (!['route', 'post'].includes(doc._type)) {
    return null;
  }
  console.log({ previewSecret });
  const previewUrl = new URL(ROOT_URL);
  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`);

  return previewUrl.toString();
}
