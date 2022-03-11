import { getIcon } from "../utils/get-icon";

type ReferenceType = "post" | "route" | "page" | "legal";

export const internalReference = (referenceTypes: ReferenceType[]) => ({
  name: "internalReference",
  title: "Internal Link",
  icon: getIcon("internalReference"),
  type: "reference",
  to: referenceTypes.map((ref: ReferenceType) => ({
    type: ref,
  })),
});
