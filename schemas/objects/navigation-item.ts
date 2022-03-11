import { externalLink } from "../fields/external-link";
import { internalReference } from "../fields/internal-reference";
import { getIcon } from "../utils/get-icon";

export default {
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  icon: getIcon("navItem"),
  fieldsets: [
    {
      name: "navigation",
      title: "Navigation",
    },
  ],

  fields: [
    {
      name: "navLink",
      title: "Navigation Item URL",
      type: "object",
      icon: getIcon("navLink"),
      options: {
        columns: 2,
      },
      fields: [
        {
          title: "Select the type of link",
          description:
            "External links go to other websites using the format `https://www.google.com`. Internal links are restricted to YWST pages.",
          name: "linkType",
          type: "string",
          options: {
            list: [
              { title: "External", value: "external" },
              { title: "Internal", value: "internal" },
            ],
            layout: "radio",
          },
        },
        {
          ...internalReference(["route"]),
          hidden: ({ parent }) => parent?.linkType !== "internal",
        },
        {
          ...externalLink,
          hidden: ({ parent }) => parent?.linkType !== "external",
        },
      ],
    },
  ],
  preview: {
    select: {
      linkType: "navLink.linkType",
      external: "navLink.externalLink.title",
      internal: "navLink.internalReference.slug.current",
    },
    prepare({ linkType, external, internal }) {
      return {
        title: `${linkType === "external" ? external : internal}`,
        subtitle: linkType,
      };
    },
  },
};
