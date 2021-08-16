import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import getCharById from "../Data/getCharById";
import getCharQuotes from "../Data/getCharQuotes";
import Loading from "./Loading";

async function handleData(id, setCharacter) {
  const characterData = await getCharById(id);

  if (Array.isArray(characterData) && characterData.length > 0) {
    const character = characterData[0];
    const quotes = await getCharQuotes(character.name);

    character["occupationText"] = character.occupation.reduce(
      (accumulator, currentValue) => {
        return `${accumulator}, ${currentValue}`;
      }
    );
    character["seasons"] = character.appearance.reduce(
      (accumulator, currentValue) => {
        return `${accumulator}, ${currentValue}`;
      }
    );

    character.quotes = quotes;

    setCharacter(character);
  } else {
    setCharacter(null);
  }
}

function InfoItem(props) {
  const { heading, value } = props;
  return (
    <tr>
      <td className="profile--info-item">
        <b>{heading}</b>
      </td>
      <td className="profile--info-item-va">{value}</td>
    </tr>
  );
}

export default function CharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleData(id, setCharacter).then(() => setIsLoading(false));
  }, [id]);

  return (
    <React.Fragment>
      {character && character.name ? (
        <Helmet>
          <title>{character.name} - Bad Characters</title>
        </Helmet>
      ) : null}
      <div>
        {isLoading ? <Loading /> : null}
        {character === null ? (
          "NOT FOUND"
        ) : (
          <div className="profile">
            
            <div className="profile--user">
              <div className="profile--picture">
                <img
                  className="profile--picture-img"
                  src={character.img}
                  alt={character.nickname}
                />
              </div>
              <div className="profile--name">{character.name}</div>
              <div className="profile--user-status">{character.status}</div>
            </div>
            <div className="profile--details">
              <table className="profile--table">
                <tbody>
                  <InfoItem heading="Nickname" value={character.nickname} />
                  <InfoItem
                    heading="Date of Birth"
                    value={character.birthday}
                  />
                  <InfoItem
                    heading="Occupation"
                    value={character.occupationText}
                  />
                  <InfoItem
                    heading="Appeared in Seasons"
                    value={character.seasons}
                  />
                  <InfoItem
                    heading="Actor who portrays"
                    value={character.portrayed}
                  />
                </tbody>
              </table>
              <div className="profile--info">
                <h3 className="profile--info-key">Quotes</h3>
                <div className="profile--info-value">
                  {Array.isArray(character.quotes)
                    ? character.quotes.map(({ quote }, index) => (
                        <React.Fragment key={index}>
                          <div className="profile--quote">"{quote}"</div>
                        </React.Fragment>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
