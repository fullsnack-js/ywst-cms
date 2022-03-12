import { getIcon } from "../utils/get-icon";

export default {
  name: "setting",
  title: "Setting",
  type: "object",
  icon: getIcon("classSetting"),
  fields: [
    {
      name: "classType",
      title: "Class Type",
      type: "string",
      description:
        "Where will this be taught? Live in-person, online or a hybrid...?",
      options: {
        list: [
          { title: "Online-only", value: "online" },
          { title: "Hybrid class", value: "hybrid" },
          { title: "In-studio only", value: "studio" },
        ],
      },
      layout: "dropdown",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "venue",
      title: "Studio",
      type: "reference",
      to: { type: "venue" },
      hidden: ({ parent }) => parent?.classType === "online",
    },
    {
      name: "streaming",
      title: "Video Streaming Platform",
      description:
        "The streaming platform serving the live class recording, eg. zoom",
      type: "string",
      hidden: ({ parent }) => parent?.role === "studio",
    },
    {
      name: "registerUrl",
      type: "url",
      title: "Registration Link",
      description: "Link to the event site (e.g. registration link/ more info)",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: { title: "title", media: "icon" },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title,
        media: media,
      };
    },
  },
};
