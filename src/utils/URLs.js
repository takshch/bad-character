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

export const searchByCategory = function (category, offset, limit) {
  return `${baseURL}/characters?category=${category}&limit=${limit}&offset=${offset}`;
};
