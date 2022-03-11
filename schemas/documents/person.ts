import { generateEmailField } from "../utils/email";
import { authorFields } from "../fields/author-fields";
import { getIcon } from "../utils/get-icon";

export default {
  name: "person",
  title: "Person",
  type: "document",
  icon: getIcon("personDoc"),
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    generateEmailField({
      name: "email",
      description: "The email address associated to this person",
    }),
    {
      name: "role",
      title: "Role",
      description: "Select the type of role this person has",
      type: "string",
      options: {
        list: [
          { title: "Author", value: "author" },
          { title: "Policy Manager", value: "manager" },
        ],
      },
    },
    ...authorFields,
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
    prepare({ title = "No title", media = getIcon("personDoc") }) {
      return {
        title,
        media,
      };
    },
  },
};
