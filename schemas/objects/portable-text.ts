import { externalLink } from "../fields/external-link";

import { internalLink } from "../fields/internal-link";
import { highlightMarker } from "../utils/custom-block-text";
export default {
  title: "Content",
  name: "portableText",
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
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strike-Through", value: "strike-through" },
          highlightMarker,
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          { type: "attachment" },
          externalLink,
          internalLink(["route", "post"]),
        ],
      },
    },
    {
      title: "Image",
      type: "imageWithAlt",
      options: { hotspot: true },
    },
    {
      type: "quote",
    },
    {
      title: "Video",
      type: "accessibleVideo",
    },
  ],
};
