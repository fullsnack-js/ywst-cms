import React from "react";
import ReactPlayer from "react-player";

export const VideoPreview = ({ value: { url, autoplay, loop } }) => (
  <ReactPlayer muted={autoplay} url={url} playing={autoplay} loop={loop} />
);
