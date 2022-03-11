import preview from "part:sanity-plugin-icon-picker/preview";
import { pageSections } from "../fields/page-sections";
import { getIcon } from "../utils/get-icon";

export default {
  name: "page",
  type: "document",
  title: "Pages",
  icon: getIcon("page"),
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Icon",
      name: "icon",
      type: "iconPicker",
      validation: (Rule) => Rule.required(),
    },
    pageSections,
  ],
  preview: {
    select: {
      title: "title",
      icon: "icon",
    },
    prepare({ title, icon }) {
      return {
        title,
        media: preview(icon),
      };
    },
  },
};
