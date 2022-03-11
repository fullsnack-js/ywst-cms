import { externalLinkRender } from "../utils/link-render";
import { FaGlobe as LinkIcon } from "react-icons/fa";

export const externalLink = {
  name: "externalLink",
  title: "External Link",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "Display Text (optional)",
    },
    {
      name: "href",
      type: "url",
      title: "URL",
      validation: (Rule) => [
        Rule.uri({
          allowRelative: false,
        }).warning("Consider the internal link annotation for relative URLs"),
        Rule.uri({ scheme: ["https", "mailto", "tel"] }),
      ],
    },
    {
      title: "Open in new tab",
      name: "blank",
      description: "Read https://css-tricks.com/use-target_blank/",
      type: "boolean",
    },
  ],
  blockEditor: {
    icon: LinkIcon,
    render: externalLinkRender,
  },
};
