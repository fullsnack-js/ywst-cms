import { getIcon } from '../utils/get-icon';
export default {
  name: 'class',
  title: 'Class',
  type: 'document',
  icon: getIcon('yoga'),
  preview: {
    select: {
      title: 'title',
      setting: 'setting',
      level: 'level',
      schedule: 'schedule',
    },
    prepare({ title, setting, schedule, level }) {
      const day = schedule.weekday;
      const formattedDay = day
        ? day[0].toUpperCase() + day.slice(1)
        : 'Please choose a day';
      const subtitle = `${formattedDay} ${schedule.time.start}-${schedule.time.end}`;
      return {
        title: `${title}/ Level ${level} - ${setting.classType.toUpperCase()}`,
        subtitle,
      };
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required('Must provide a class name.'),
    },
    {
      name: 'level',
      title: 'Level',
      type: 'string',
      validation: (Rule) =>
        Rule.required('Must provide a level for prospective yoga students'),
    },
    {
      name: 'description',
      title: 'Class Description',
      type: 'text',
      rows: 3,
      validation: (Rule) =>
        Rule.required('Must provide a short description for web viewers'),
    },
    {
      name: 'schedule',
      type: 'schedule',
    },
    {
      name: 'setting',
      type: 'setting',
      validation: (Rule) =>
        Rule.required('Must provide a setting for this class.'),
    },
    {
      name: 'eventCalendar',
      type: 'eventCalendar',
    },
  ],
};
