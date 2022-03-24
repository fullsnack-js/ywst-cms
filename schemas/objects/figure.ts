import { RuleType } from '../../types/schema-types';
import { getIcon } from '../utils/get-icon';

export default {
  name: 'figure',
  title: 'figure',
  type: 'image',
  icon: getIcon('image'),
  options: {
    hotspot: false,
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative text (for screen readers)',
      type: 'string',
      options: {
        isHighlighted: true,
      },
      validation: (Rule: RuleType): RuleType => {
        return Rule.custom((field, context) =>
          'asset' in context.parent && field === undefined
            ? 'Required! (think about non-visual readers)'
            : true
        );
      },
    },
    {
      name: 'caption',
      title: 'Caption text',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      asset: 'asset',
      alt: 'alt',
    },
    prepare({ alt, asset, caption }) {
      return {
        title: caption || alt || '(alt text missing)',
        media: asset,
      };
    },
  },
};
