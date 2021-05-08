import { useState } from "react";
import GameList from "../components/GameList";
import { CARDS_DATA } from "../service/data";
import "./Memory.css";



export default function MemoryGame() {

  const [cardsData, setCardsData] = useState(CARDS_DATA);
  let [userScore, setUserScore] = useState(0);
  let  [message, setMessage] = useState('');
  const length = cardsData.length;
  let [highScore, setHighScore] = useState(length);//or any number, example 5
  

  const handleClick = (id) => {
    const cardClicked = cardsData.filter((card) => card.id === id);

    if(cardClicked[0].clicked) {
      userScore = 0;
      message = 'Your game reset, start again';

      cardsData.map((elem) => {
        elem.clicked = false;
        return elem;
      })
      setMessage(message);
      setCardsData(cardClicked);
      setUserScore(userScore);


    } else {
      cardClicked[0].clicked = true;
      message = 'You won!';
      setUserScore(userScore + 1);
      setMessage(message);
      shuffleCards();
      setCardsData(cardsData);
    }

 
  };

  const shuffleCards = () => {
    cardsData.sort((a, b) => 0.5 - Math.random());
  } ;

  

  if(userScore === highScore) {
    return <p className="message">{message}</p>
  } 
  return (
    <div>
      <h2 className="game-title">Memory Game</h2>
      <h3 className="rule">Please, pay attention  to this rule, to win game your score should be {highScore} point</h3>
      <h3 className="score-title">Your score is {userScore}</h3>

      <GameList cardsData={cardsData} handleClick={handleClick}/>
      
      
    </div>
  )
}

