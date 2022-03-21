import { generateEmailField } from '../utils/email';
/* eslint-disable no-useless-escape */
import { FiSettings } from 'react-icons/fi';

export default {
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  icon: FiSettings,
  __experimental_actions: ['create', 'delete', /**/ 'update', 'publish'],
  groups: [{ name: 'navigation', title: 'Site Navigation' }],
  fields: [
    {
      name: 'title',
      title: 'Website title',
      type: 'string',
    },
    generateEmailField({
      name: 'contactEmail',
      title: 'Contact Email',
      description: 'Reply email for website contact page',
    }),
    {
      group: 'navigation',
      title: 'Main navigation',
      name: 'mainNav',
      type: 'array',
      description:
        'Drag and drop items to represent the display order on the website main navigation',

      of: [{ type: 'navigationItem' }],
      validation: (Rule) => Rule.required(),
    },
    {
      group: 'navigation',
      title: 'Footer navigation',
      name: 'footerNav',
      type: 'array',
      description:
        'Drag and drop items to represent the display order on the website footer navigation',

      of: [{ type: 'navigationItem' }],
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'socials',
      title: 'Social Media Accounts',
      type: 'array',
      of: [{ type: 'social' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Default SEO',
      name: 'seo',
      type: 'seo',
      validation: (Rule) => Rule.required(),
    },
  ],
};
