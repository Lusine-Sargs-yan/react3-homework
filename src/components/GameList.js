import { Grid } from "semantic-ui-react";
import GameCard from "./CameCard";
import "./GameList.css"

export default function GameList({ cardsData, handleClick }) {
  console.log(cardsData.map(({ name }) => name));

  return (
    <div className="list">
      <Grid container relaxed columns={4}>
        {cardsData.map(({ name, image, occupation, id }) => {
          return (
            <Grid.Column key={id}>
              <GameCard
                {...{ name, image, occupation, id }}
                handleClick={handleClick}
                className="card"
              />
            </Grid.Column>
          );
        })}
      </Grid>
    </div>
  );
}
