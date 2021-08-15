import { limitNoffset } from "../utils/URLs";
import GetFetch from "./GetFetch";
/**
 * Return Characters data
 * @param limit - <Number>
 * @param offset - <Number>
 * @returns <Array>
 */
async function getCharacters(limit = 10, page = 0) {
  const pageValue = (page * limit)- 1;
  const badCharAPI = limitNoffset(limit, pageValue >= 0 ? pageValue : 0);
  return GetFetch(badCharAPI) || [];
}

export default getCharacters;
