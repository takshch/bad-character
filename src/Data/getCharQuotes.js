import { quotes } from "../utils/URLs";
import GetFetch from "./GetFetch";

/**
 * Return Character data
 * @param id - <Number>
 * @returns <Array> of length '0' conta
 */
async function getCharQuotes(id) {
  const URL = quotes(id);
  return GetFetch(URL) || [{}];
}

export default getCharQuotes;
