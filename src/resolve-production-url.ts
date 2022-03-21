import { ROOT_URL } from "./root-url";

export default function resolveProductionUrl(doc) {
  if (!["route", "post"].includes(doc._type)) {
    return null;
  }
  const previewUrl = new URL(ROOT_URL);
  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(
    `secret`,
    process.env.SANITY_STUDIO_PREVIEW_SECRET
  );
  previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`);

  return previewUrl.toString();
}
