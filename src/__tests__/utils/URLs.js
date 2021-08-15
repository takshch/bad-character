import {
  searchByID,
  limitNoffset,
  quotes,
  searchByCategory,
} from "../../utils/URLs";

const API_BASEURL = process.env.API_BASEURL;

describe("URL Generators", () => {
  it("searchByID generates URL for search category by ID", function () {
    expect(searchByID(1)).toStrictEqual(`${API_BASEURL}/characters/1`);
  });

  it("limitNoffset generates URL for search category by ID", function () {
    expect(limitNoffset(10, 0)).toStrictEqual(
      `${API_BASEURL}/characters?limit=${10}&offset=${0}`
    );
  });

  it("quotes generates URL for search category by ID", function () {
    expect(quotes("Breaking bad")).toStrictEqual(
      `${API_BASEURL}/quote?author=Breaking bad`
    );
  });

  it("searchByCategory generates URL for search category by ID", function () {
    expect(searchByCategory("breaking", 10, 10)).toStrictEqual(
      `${API_BASEURL}/characters?category=breaking&limit=10&offset=10`
    );
  });
});
