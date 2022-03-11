import { getIcon } from "../utils/get-icon";
import { attachmentLinkRender } from "../utils/link-render";

export default {
  name: "attachment",
  title: "Attachment",
  icon: getIcon("attachment"),
  type: "file",
  fields: [
    {
      name: "name",
      title: "File name",
      type: "string",
      validation: (Rule) => Rule.required("Add name in File -> Edit Details"),
    },
    {
      name: "text",
      title: "Link display text",
      type: "string",
      description:
        "Text to display in the link. Default will be the highlighted text.",
    },
  ],
  options: {
    storeOriginalFilename: true,
  },
  validation: (Rule) => Rule.required(),
  blockEditor: {
    render: attachmentLinkRender,
  },
};
