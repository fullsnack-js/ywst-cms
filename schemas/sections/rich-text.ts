import { toPlainText } from "@portabletext/react";
import { getIcon } from "../utils/get-icon";
export default {
  name: "richText",
  type: "object",
  title: "Rich text",
  icon: getIcon("longText"),
  preview: {
    select: {
      heading: "heading",
      subheading: "subheading",
      content: "content",
    },
    prepare({ heading, subheading, content = [] }) {
      return {
        title: heading || subheading || toPlainText(content),
        subtitle: "Rich text",
      };
    },
  },
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
      description: "Optional.",
    },
    {
      name: "subheading",
      type: "string",
      title: "Subheading",
      description: "Optional.",
    },
    {
      name: "content",
      title: "Content",
      type: "portableText",
    },
  ],
};
