import { externalLink } from "../fields/external-link";
import { internalReference } from "../fields/internal-reference";
import { internalLink } from "../fields/internal-link";

export default {
  title: "Content",
  name: "simpleBlockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bulleted List", value: "bullet" },
        { title: "Numbered List", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strike-Through", value: "strike-through" },
        ],

        annotations: [
          externalLink,
          internalLink(["post", "route"]),
          { type: "attachment" },
          { type: "imageWithAlt" },
          { type: "accessibleVideo" },
        ],
      },
    },
  ],
};
