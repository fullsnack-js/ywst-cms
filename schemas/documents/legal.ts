import preview from 'part:sanity-plugin-icon-picker/preview';

import { policyContact } from '../fields/policy-contact';
import { getIcon } from '../utils/get-icon';

export default {
  name: 'legal',
  type: 'document',
  title: 'Legal Terms & Agreements',
  icon: getIcon('legal'),
  __experimental_actions: [/**/ 'create', 'delete', 'update', 'publish'],
  initialValue: () => ({
    last_modified: new Date().toISOString(),
  }),

  fields: [
    {
      title: 'Icon',
      name: 'icon',
      type: 'iconPicker',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      codegen: { required: true },
    },

    {
      name: 'content',
      title: 'Content',
      type: 'simpleBlockContent',
      validation: (Rule: any) => Rule.required(),
      codegen: { required: true },
    },
    policyContact,
    {
      name: 'last_modified',
      title: 'Date Modified',
      type: 'datetime',
      validation: (Rule) =>
        Rule.required('Must provide the most recent modification date.'),
      codegen: { required: true },
    },
  ],
  preview: {
    select: {
      icon: 'icon',
      title: 'title',
    },
    prepare({ title, icon }) {
      return {
        title,
        media: preview(icon),
      };
    },
  },
};
