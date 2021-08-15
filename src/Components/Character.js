import React from "react";
import { useHistory } from "react-router-dom";

export default function Character(props) {
  let history = useHistory();

  const { name, occupation: occupationData, birthday, id } = props;
  const occupation = Array.isArray(occupationData)
  ? occupationData.reduce((accumulator, currentValue) => {
    return `${accumulator}, ${currentValue}`;
  })
  : occupationData;
  
  function visitCharacter() {
    history.push(`/character/${id}`);
  }

  return (
    <tr className="character--block" onClick={visitCharacter}>
      <td className="character--cell character--name">{name}</td>
      <td className="character--cell character--occupation">{occupation}</td>
      <td className="character--cell character--birthday">{birthday}</td>
    </tr>
  );
}
