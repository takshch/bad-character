import React from "react";
import Character from "./Character";

export default function CharList(props) {
  const { characters } = props;

  return (
    <div className="table-handler">
      <table className="character" data-test-char-list>
        <thead className="character--head">
          <tr>
            <th className="character--head-cell">Name</th>
            <th className="character--head-cell">Occupation</th>
            <th className="character--head-cell">Category</th>
            <th className="character--head-cell">Birthday</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((char, index) => (
            <Character
              key={index}
              name={char.name}
              occupation={char.occupation}
              birthday={char.birthday}
              category={char.category}
              id={char.char_id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
