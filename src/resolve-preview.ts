import { ROOT_URL } from './root-url';

type Document = {
  _type: string;
  _id: string;
  slug?: { current: string };
};

const formattedRootUrl = `${ROOT_URL}/`;

const resolver = {
  post: (document: Document) => `${ROOT_URL}/blog/`,
  person: (document: Document) => `${ROOT_URL}/author/`,
};

export const getPreviewUrl = (document: Document) => {
  return resolver[document._type]?.(document) || formattedRootUrl;
};
