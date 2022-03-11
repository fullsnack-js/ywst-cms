import { getIcon } from "../utils/get-icon";

export default {
  name: "questionAndAnswer",
  type: "object",
  title: "Question and Answer",
  icon: getIcon("questionAndAnswer"),
  preview: {
    select: {
      title: "question",
      subtitle: "answer",
    },
  },
  fields: [
    {
      name: "question",
      type: "string",
      title: "Question",
    },
    {
      name: "answer",
      type: "simpleBlockContent",
      title: "Answer",
    },
  ],
};
