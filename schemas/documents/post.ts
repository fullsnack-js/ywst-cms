import { visibility } from "../fields/visibility";

export default {
  name: "post",
  title: "Post",
  type: "document",
  groups: [{ name: "seo", title: "SEO" }, visibility.group],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "person" }],
      options: {
        filter: "role == $role",
        filterParams: { role: "author" },
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "imageWithAlt",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Content",
      type: "portableText",
    },
    {
      name: "excerpt",
      type: "text",
      rows: 3,
      title: "Excerpt",
      validation: (Rule) => Rule.min(40).max(100).required(),
    },
    { name: "seo", type: "seo", group: "seo" },
    ...visibility.fields,
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
