import { fetchICalFromUrl } from "../../get-events";
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
      schedule: "schedule",
    },
    prepare({ title, setting, schedule, level }) {
      const day = schedule.weekday
        ? schedule.weekday.value
        : "Please choose a day";
      const subtitle = `${day} ${schedule.time.start}-${schedule.time.end}`;
      return {
        title: `${title}/ Level ${level} - ${setting.classType}`,
        subtitle,
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
      name: "schedule",
      type: "schedule",
    },
    {
      name: "setting",
      type: "setting",
      validation: (Rule) =>
        Rule.required("Must provide a setting for this class."),
    },
    {
      name: "eventCalendar",
      type: "eventCalendar",
    },
  ],
};
