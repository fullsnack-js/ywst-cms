import { RuleType } from "../../types/schema-types";
import { getIcon } from "../utils/get-icon";

export default {
  name: "imageWithAlt",
  title: "ImageWithAlt",
  type: "image",
  icon: getIcon("image"),
  options: {
    hotspot: false,
  },
  fields: [
    {
      name: "alt",
      title: "Alternative text (for screen readers)",
      type: "string",
      options: {
        isHighlighted: true,
      },
      validation: (Rule: RuleType): RuleType => {
        return Rule.custom((field, context) =>
          "asset" in context.parent && field === undefined
            ? "Required! (think about non-visual readers)"
            : true
        );
      },
    },
  ],
  preview: {
    select: {
      asset: "asset",
      alt: "alt",
    },
    prepare({ alt, asset }) {
      return {
        title: alt || "(alt text missing)",
        media: asset,
      };
    },
  },
};
