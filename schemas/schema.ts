import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import * as documents from "./documents";
import * as objects from "./objects";
import * as sections from "./sections";

import { mapDocToSchema } from "../utils/mapToSchema";

export default createSchema({
  name: "default",
  types: schemaTypes
    .concat(mapDocToSchema(documents))
    .concat(mapDocToSchema(objects))
    .concat(mapDocToSchema(sections)),
});
