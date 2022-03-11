/* eslint-disable no-underscore-dangle */
import client from "part:@sanity/base/client";
// Note: this assumes that every document that has a slug field
// have it on the `slug` field at the root

// TODO: Add this to wherever generating slugs
export function isUniqueAcrossAllDocuments(slug: any, options: any): any {
  const { document } = options;

  const id = document._id.replace(/^drafts\./, "");

  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
    type: document._type,
  };

  let query =
    "!defined(*[!(_id in [$draft, $published]) && slug.current == $slug && _type == $type][0]._id)";

  return client.fetch(query, params);
}
