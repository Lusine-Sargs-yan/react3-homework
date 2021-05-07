import { Grid } from "semantic-ui-react";
import GameCard from "./CameCard";


export default function GameList({cardsData, handleClick}) {
  console.log(cardsData.cardsData.map(({name}) => name));

  return (
    <Grid container relaxed columns={4}>
      {cardsData.cardsData.map(({name, image, occupation, id}) => {

        return (
          <Grid.Column key={id}>
            <GameCard {...{name, image, occupation, id}} handleClick={handleClick} />
          </Grid.Column>

        )
      })}
      
    </Grid>

  )
}


