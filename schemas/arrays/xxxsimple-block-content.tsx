import React from "react";
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";
import { MdTextFields } from "react-icons/md";
import { internalReference } from "../objects";

const highlightIcon = () => <span style={{ fontWeight: "bold" }}>H</span>;
const highlightRender = (props) => (
  <span style={{ backgroundColor: "rgba(0, 184, 212, 0.3)" }}>
    {props.children}
  </span>
);
export default {
  name: "simpleBlock",
  title: "Simple Block Content",
  type: "array",
  icon: MdTextFields,
  of: [
    {
      type: "block",
      title: "Block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Citation", value: "blockquote" },
      ],
      lists: [
        { title: "Bulleted List", value: "bullet" },
        { title: "Numbered List", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strike-Through", value: "strike-through" },
          {
            title: "Highlight",
            value: "highlight",
            blockEditor: {
              icon: highlightIcon,
              render: highlightRender,
            },
          },
        ],
        annotations: [
          { type: "externalLink" },
          { ...internalReference(["route"]) },
        ],
      },
    },
  ],
};
