import { MdTimelapse } from "react-icons/md";
import { verifyRange, timeList12h } from "../utils/time-range.utils";

export default {
  name: "timeRange",
  title: "Time range",
  type: "object",
  icon: MdTimelapse,
  validation: (Rule) => Rule.custom(verifyRange),
  fields: [
    {
      title: "Start time",
      name: "start",
      type: "string",
      initialValue: timeList12h[10].value,
      options: {
        list: timeList12h,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "End Time",
      name: "end",
      type: "string",
      initialValue: timeList12h[16].value,
      options: {
        list: timeList12h,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      time: "time",
      day: "day",
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
