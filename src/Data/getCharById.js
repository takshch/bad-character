import { searchByID } from "../utils/URLs";
import GetFetch from "./GetFetch";

/**
 * Return Character data
 * @param id - <Number>
 * @returns <Array> of length '0' conta
 */
async function getCharById(id) {
  const URL = searchByID(id);
  return GetFetch(URL);
}

export default getCharById;
