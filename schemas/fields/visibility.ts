export const visibility = {
  group: { name: 'visibility', title: 'Visibility' },
  fields: [
    {
      title: 'Include in sitemap',
      description: 'For search engines. Will be generated to /sitemap.xml',
      name: 'includeInSitemap',
      type: 'boolean',
      group: 'visibility',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'noIndex',
      type: 'boolean',
      title: 'Hide this route from search engines', // "Disallow in robots.txt"
      description: 'This route will not be indexed by search engines',
      group: 'visibility',
    },
  ],
};
