import type { ObjectField } from "../../types/schema-types";
import { getIcon } from "../utils/get-icon";

export const cta: ObjectField = {
  title: "Call to action",
  name: "cta",
  type: "object",
  icon: getIcon("cta"),

  fields: [
    {
      title: "Text",
      name: "text",
      type: "string",
    },
    {
      name: "url",
      type: "url",
      title: "Call to Action URL",
      description: "The target URL.",
      hidden: ({ parent }) => !parent.url && parent.reference,
      validation: (Rule) => Rule.uri({ scheme: ["https", "mailto", "tel"] }),
    },
    {
      name: "reference",
      type: "reference",
      title: "Reference",
      hidden: ({ parent }) => !parent.reference && parent.url,
      to: [{ type: "route" }],
    },
    {
      title: "Kind",
      name: "kind",
      type: "string",
      options: {
        layout: "radio",
        list: ["button", "link", "arrow"],
      },
    },
  ],
  preview: {
    select: {
      text: "text",
      reference: "reference.slug.current",
      url: "url",
    },
    prepare({ text, reference, url }) {
      let subtitle = "Not set";
      if (reference) {
        subtitle = `Internal: /${reference.replace(/\/$/, "")}`;
      }
      if (url) {
        subtitle = `External: ${url}`;
      }
      return {
        title: text,
        subtitle,
      };
    },
  },
};
