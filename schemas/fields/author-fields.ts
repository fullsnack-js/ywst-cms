export const shouldShow = (document) => {
  return document.role === "author";
};
export const authorFields = [
  {
    title: "Slug",
    name: "slug",
    type: "slug",
    options: { source: "name" },
    validation: (rule) =>
      rule.custom((currentValue, { document }) => {
        // in a custom validation rule, check if the field should be shown, and if yes, show an error if the value is not set
        if (shouldShow(document) && currentValue === undefined)
          return "This slug is required for the Author role.";
        // if we are not showing the field, or if the field has a value
        // then the validation passes
        return true;
      }),
    hidden: ({ document }) => {
      // use the shared function to decide whether to show the field
      return !shouldShow(document);
    },
  },
  {
    name: "image",
    title: "Image",
    type: "imageWithAlt",
    options: {
      hotspot: true,
    },
    validation: (rule) =>
      rule.custom((currentValue, { document }) => {
        // in a custom validation rule, check if the field should be shown, and if yes, show an error if the value is not set
        if (shouldShow(document) && currentValue === undefined)
          return "An author image is required for the Author role.";
        // if we are not showing the field, or if the field has a value
        // then the validation passes
        return true;
      }),
    hidden: ({ document }) => {
      // use the shared function to decide whether to show the field
      return !shouldShow(document);
    },
  },
  {
    name: "bio",
    title: "Bio",
    type: "simpleBlockContent",
    validation: (rule) =>
      rule.custom((currentValue, { document }) => {
        // in a custom validation rule, check if the field should be shown, and if yes, show an error if the value is not set
        if (shouldShow(document) && currentValue === undefined)
          return "A short bio is required for the Author role.";
        // if we are not showing the field, or if the field has a value
        // then the validation passes
        return true;
      }),
    hidden: ({ document }) => {
      // use the shared function to decide whether to show the field
      return !shouldShow(document);
    },
  },
];
