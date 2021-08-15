export const baseURL = "https://www.breakingbadapi.com/api";
export const searchByID = function (id) {
  return `${baseURL}/characters/${id}`;
};
export const limitNoffset = function (limit, offset) {
  return `${baseURL}/characters?limit=${limit}&offset=${offset}`;
};

export const quotes = function (characterName) {
  return `${baseURL}/quote?author=${characterName}`;
};
