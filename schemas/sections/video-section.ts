import { MdVideoLibrary } from "react-icons/md";
export default {
  name: "videoSection",
  type: "object",
  title: "Video",
  icon: MdVideoLibrary,

  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "url",
      type: "string",
      title: "video URL",
    },
    {
      name: "description",
      type: "string",
    },
  ],
};
