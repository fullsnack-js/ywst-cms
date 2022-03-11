import sanityClient from "part:@sanity/base/client";
import { api } from "../sanity.json";
export default sanityClient.withConfig({ apiVersion: api.apiVersion });
