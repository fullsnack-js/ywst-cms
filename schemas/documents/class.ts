import { getIcon } from "../utils/get-icon";
// import eventCalendar from "../objects/eventCalendar";
export default {
  name: "class",
  title: "Class",
  type: "document",
  icon: getIcon("yoga"),
  preview: {
    select: {
      title: "title",
      setting: "setting",
      level: "level",
    },
    prepare({ title, setting, level }) {
      return {
        title: `${title} - Level: ${level}`,
        subtitle: `${setting.classType}`,
      };
    },
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required("Must provide a class name."),
    },
    {
      name: "level",
      title: "Level",
      type: "string",
      validation: (Rule) =>
        Rule.required("Must provide a level for prospective yoga students"),
    },
    {
      name: "description",
      title: "Class Description",
      type: "text",
      rows: 3,
      validation: (Rule) =>
        Rule.required("Must provide a short description for web viewers"),
    },
    {
      name: "eventCalendar",
      type: "eventCalendar",
      validation: (Rule) =>
        Rule.required("Must provide a calendar event that manages this class."),
    },
    {
      name: "setting",
      type: "setting",
      validation: (Rule) =>
        Rule.required("Must provide a setting for this class."),
    },
  ],
};
