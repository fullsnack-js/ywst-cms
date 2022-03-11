export const authorFields = [
  {
    title: "Slug",
    name: "slug",
    type: "slug",
    options: { source: "name" },
    hidden: ({ parent }) => parent?.role !== "author",
    validation: (Rule) => Rule.optional(),
  },
  {
    name: "image",
    title: "Image",
    type: "imageWithAlt",
    hidden: ({ parent }) => parent?.role !== "author",
    options: {
      hotspot: true,
    },
  },
  {
    name: "bio",
    title: "Bio",
    type: "simpleBlockContent",
    hidden: ({ parent }) => parent?.role !== "author",
  },
];
