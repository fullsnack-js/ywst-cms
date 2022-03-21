import { ROOT_URL } from "./root-url";

type Document = {
  _type: string;
  _id: string;
  slug?: { current: string };
};

const resolver = {
  route: (document: Document) =>
    !document.slug || !document.slug.current
      ? ROOT_URL
      : `${ROOT_URL}/${document.slug?.current}`,
  post: (document: Document) => `${ROOT_URL}/blog/${document.slug.current}`,
  person: (document: Document) => `${ROOT_URL}/author/${document.slug.current}`,
  siteSettings: () => ROOT_URL,
};

export const getPreviewUrl = (document: Document) => {
  return resolver[document._type]?.(document) || ROOT_URL;
};
