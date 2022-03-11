import type { ArrayField } from "../../types/schema-types";
import { getIcon } from "../utils/get-icon";
import * as sections from "../sections";

export const pageSections: ArrayField = {
  title: "Page Sections",
  name: "pageSections",
  type: "array",
  icon: getIcon("pageSections"),
  of: [
    { type: "cta" },
    ...Object.keys(sections).map((type) => ({ type })),
    { type: "imageWithAlt" },
  ],
};
