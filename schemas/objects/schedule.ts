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
      name: "from",
      type: "datetime",
      title: "Start",
    },
    {
      name: "to",
      type: "datetime",
      title: "End",
    },
    {
      name: "weekday",
      type: "string",
      options: {
        list: [
          { title: "Sunday", value: "sunday" },
          { title: "Monday", value: "monday" },
          { title: "Tuesday", value: "tuesday" },
          { title: "Wednesday", value: "wednesday" },
          { title: "Thursday", value: "thursday" },
          { title: "Friday", value: "friday" },
          { title: "Saturday", value: "saturday" },
        ],
      },
    },
  ],
  options: {
    columns: 2,
  },
};
