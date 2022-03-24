import { getIcon } from '../utils/get-icon';

// TODO: blockquote component

export default {
  name: 'quote',
  type: 'object',
  title: 'Quote',
  icon: getIcon('blockquote'),
  fields: [
    {
      name: 'text',
      type: 'text', // <= This can also be a Portable Text field
      title: 'Text',
      validation: (Rule) => Rule.required('A quote requires valid text input'),
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      description: 'Source on the web',
    },
  ],
  blockEditor: {
    icon: getIcon('blockquote'),
  },
};
