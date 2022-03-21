import { isBefore } from "date-fns";
import { Rule } from "@sanity/types";

export default {
  name: "schedule",
  type: "object",
  title: "Schedule",
  validation: (Rule: Rule) =>
    Rule.custom(
      (schedule: { from: number | Date; to: number | Date }) =>
        !isBefore(schedule.from, schedule.to) ||
        "End time cannot be before start time."
    ),
  fields: [
    // TODO: FIX to only do time, maybe change the component ?

    {
      title: "Day",
      name: "weekday",
      type: "string",
      options: {
        list: [
          { title: "Sunday", value: "0" },
          { title: "Monday", value: "1" },
          { title: "Tuesday", value: "2" },
          { title: "Wednesday", value: "3" },
          { title: "Thursday", value: "4" },
          { title: "Friday", value: "5" },
          { title: "Saturday", value: "6" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "time",
      title: "Time",
      type: "timeRange",
      of: [{ type: "timeRange" }],
      description: "Choose start and end time of class",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      time: "time",
      day: "weekday",
    },
    prepare({ time, day }) {
      const title = day
        ? day[0].toUpperCase() + day.slice(1)
        : "Please choose a day";
      const subtitle = `${time.start}-${time.end}`;

      return {
        title,
        subtitle,
      };
    },
  },
};
