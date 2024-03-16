/* eslint-disable react/prop-types */
import "./index.css";
import { CHARACTERS } from "./charactersData";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content" >
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const Characters = () => {
  const characters = CHARACTERS;
  return (
    <div className="characters-container">
      {characters.map((character, index) => (
        <Card
          key={index}
          image={character.image}
          title={character.title}
          description={character.description}
        />
      ))}
    </div>
  );
};

export default Characters;
