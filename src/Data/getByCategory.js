import { searchByCategory } from "../utils/URLs";
import GetFetch from "./GetFetch";
/**
 * Return Characters data
 * @param { category } - <String>
 * @param { limit } - <Number>
 * @param { page } - <Number>
 * @returns <Array>
 */
async function getByCategory(category, page = 0, limit = 10) {
  const pageValue = page * limit - 1;
  const URL = searchByCategory(category, pageValue >= 0 ? pageValue : 0, limit);
  return GetFetch(URL) || [];
}

export default getByCategory;
