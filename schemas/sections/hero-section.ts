export default {
  name: "heroSection",
  title: "Hero",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Text",
      name: "text",
      type: "simpleBlockContent",
    },
    {
      name: "image",
      type: "imageWithAlt",
    },
  ],
};
