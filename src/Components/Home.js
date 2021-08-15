import React from "react";
import { useEffect, useState } from "react";
import getCharacters from "../Data/getCharacters";
import ReactPaginate from "react-paginate";
import CharList from "./CharList";

async function handleData(page, handleDataFn, limit) {
  const charactersData = await getCharacters(limit, page);
  console.log(charactersData);
  handleDataFn(charactersData);
}

function handleSearchText(e, characters, handleDataFn) {
  const searchValue = e.target.value;
  const filteredCharacter = characters.filter(({ category }) => {
    console.log(category);
    return category.toLowerCase().includes(searchValue.toLowerCase());
  });
  console.log(searchValue, filteredCharacter);
  handleDataFn(filteredCharacter);
}

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const limit = 10;
    handleData(
      page,
      (charactersData) => {
        setCharacters(charactersData);
        setFilteredCharacters(charactersData);
      },
      limit
    );
  }, [page]);

  function handlePage({ selected }) {
    setPage(selected);
  }

  return (
    <div className="home">
      <div className="search">
        <input
          type="text"
          className="search--box"
          placeholder="Search by Category"
          onChange={(e) => {
            console.log(characters);
            handleSearchText(e, characters, setFilteredCharacters);
          }}
        />
      </div>
      <CharList characters={filteredCharacters} />
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
