import { internalReference } from "../fields/internal-reference";
import { visibility } from "../fields/visibility";
import { getIcon } from "../utils/get-icon";

export default {
  name: "route",
  title: "Routes",
  type: "document",
  icon: getIcon("route"),
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
    visibility.group,
  ],
  fields: [
    {
      name: "internalId",
      type: "string",
      title: "Internal Id",
      description: "Internal route reference",
    },
    {
      ...internalReference(["page", "legal"]),
      name: "page",
      title: "Page Reference",
      description: "Select the page that this route should point to",

      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "seo.title",
      },
    },
    {
      name: "seo",
      type: "seo",
      title: "Metadata",
      description: "For Search Engine Optimization",
      group: "seo",
    },
    ...visibility.fields,
  ],
  preview: {
    select: {
      title: "seo.metaTitle",
      subtitle: "internalName",
      media: "page.icon",
    },
  },
};
