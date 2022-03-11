import { getIcon } from "../utils/get-icon";
import { VideoPreview } from "../utils/video-preview";

export default {
  name: "accessibleVideo",
  title: "Accessible Video",
  icon: getIcon("video"),
  type: "object",
  fields: [
    { name: "url", title: "Video Url", type: "url" },
    { name: "file", type: "file", title: "Video File" },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description:
        "Used to describe the contents of the video to assistive technology",
      validation: (Rule) => Rule.required(),
    },
    { name: "autoplay", title: "Autoplay Video", type: "boolean" },
    { name: "loop", title: "Loop Video", type: "boolean" },
  ],
  preview: {
    select: {
      url: "url",
      autoplay: "autoplay",
      loop: "loop",
    },
    component: VideoPreview,
  },
};
