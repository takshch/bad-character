import React from "react";
import { useEffect, useState } from "react";
import getCharacters from "../Data/getCharacters";
import ReactPaginate from "react-paginate";
import CharList from "./CharList";
import getByCategory from "../Data/getByCategory";
import debounce from "lodash.debounce";

async function handleCharacters(page, handleDataFn, limit) {
  const charactersData = await getCharacters(limit, page);
  console.log(charactersData);
  handleDataFn(charactersData);
}

async function fetchByCategory(category, page = 0, limit = 10) {
  const data = await getByCategory(category, page, limit);
  return data;
}

function setCharacterByCategory(category, page, setCharacters, setIsLoading) {
  fetchByCategory(category, page).then((value) => {
    setCharacters(value);
    setIsLoading(false);
  });
}

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const limit = 10;

    setIsLoading(true);
    if (searchCategory !== "") {
      setCharacterByCategory(searchCategory, page, setCharacters, setIsLoading);
    } else {
      handleCharacters(
        page,
        (charactersData) => {
          setCharacters(charactersData);
          setIsLoading(false);
        },
        limit
      );
    }
  }, [page, searchCategory]);

  function handlePage({ selected }) {
    setPage(selected);
  }

  const handleSearch = debounce((e) => setSearchCategory(e.target.value), 1000);

  return (
    <div className="home">
      <div className="search">
        <input
          type="text"
          className="search--box"
          placeholder="Search by Category"
          onChange={(e) => {
            handleSearch(e);
          }}
        />
      </div>
      {isLoading ? "Loading...." : null}
      <CharList characters={characters} />
      <ReactPaginate
        initialPage={0}
        previousLabel={page === 0 ? false : "previous"}
        nextLabel={"next"}
        ellipses={false}
        breakClassName={"break-me"}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePage}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
