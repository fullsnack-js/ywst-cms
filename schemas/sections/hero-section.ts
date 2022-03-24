export default {
  name: 'heroSection',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Text',
      name: 'text',
      type: 'simpleBlockContent',
    },
    {
      name: 'image',
      type: 'figure',
    },
  ],
};
