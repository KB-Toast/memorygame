import { useState, useEffect, useMemo } from 'react';
import Card from './Card';
import Timer from './Timer';
import styles from '../styles/Home.module.css';

function Home() {
  const deck = [
    { id: 1, name: 'billiard ball', image: '/billiardball.svg' },
    { id: 2, name: 'billiard ball', image: '/billiardball.svg' },
    { id: 3, name: 'bubble tea', image: '/bubbletea.svg' },
    { id: 4, name: 'bubble tea', image: '/bubbletea.svg' },
    { id: 5, name: 'cactus', image: '/cactus.svg' },
    { id: 6, name: 'cactus', image: '/cactus.svg' },
    { id: 7, name: 'dog', image: '/dog.svg' },
    { id: 8, name: 'dog', image: '/dog.svg' },
    { id: 9, name: 'laptop', image: '/laptop.svg' },
    { id: 10, name: 'laptop', image: '/laptop.svg' },
    { id: 11, name: 'octopus', image: '/octopus.svg' },
    { id: 12, name: 'octopus', image: '/octopus.svg' },
    { id: 13, name: 'strawberry', image: '/strawberry.svg' },
    { id: 14, name: 'strawberry', image: '/strawberry.svg' },
    { id: 15, name: 'sunglasses', image: '/sunglasses.svg' },
    { id: 16, name: 'sunglasses', image: '/sunglasses.svg' },
  ];

  const [selected, setSelected] = useState([]);
  const [newDeck, setNewDeck] = useState([]);
  const [lastCard, setLastCard] = useState();
  const [okCards, setOkCards] = useState([]);
  const [gameCounter, setGameCounter] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);

  // added timer maybe
  const [timer, setTimer] = useState(0);
  //const newTimer = timer + 1;
  useEffect(() => {
    if (timerStarted === true && okCards.length < deck.length / 2) {
      const newTimer = timer + 1;
      const interval = setInterval(() => setTimer(newTimer), 1000);
      return () => clearInterval(interval);
    }
  }, [timer, timerStarted]);

  const startTimer = () => {
    !timerStarted && setTimerStarted(true);
  };

  useEffect(() => {
    setNewDeck(shuffledCards());
  }, [gameCounter]);

  const selectCard = (id) => {
    setSelected([...selected, id]);
  };

  const shuffledCards = () => {
    const oldCards = [...deck];
    for (let i = 0; i < oldCards.length; i++) {
      let randomIndex = Math.floor(Math.random() * oldCards.length);
      [oldCards[i], oldCards[randomIndex]] = [
        oldCards[randomIndex],
        oldCards[i],
      ];
    }

    return oldCards;
  };

  const hideCards = () => {
    setTimeout(() => {
      setSelected([]);
      setLastCard();
    }, 800);
  };

  const handleCardClick = (card) => {
    if (lastCard) {
      if (lastCard === card) {
        if (okCards.length === deck.length / 2 - 1) {
          setTimeout(() => {
            setGameCounter(gameCounter + 1);
            setSelected([]);
            setOkCards([]);
            setLastCard();
            setNewDeck([]);
            setTimer(0);
            setTimerStarted(false);
          }, 2500);
        }

        setOkCards([...okCards, card]);
      } else {
        console.log('better luck next time !');
      }
      setLastCard();
    } else {
      setLastCard(card);
    }
  };

  selected.length === 2 && hideCards();
  //okCards.length === deck.length / 2 && setGameCounter(gameCounter + 1);

  const cardsToDisplay = newDeck.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        name={card.name}
        image={card.image}
        selectCard={selectCard}
        selected={selected.includes(card.id) || okCards.includes(card.name)}
        handleCardClick={handleCardClick}
      />
    );
  });

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Memory Game 🧠</h1>
        <h2>
          {timerStarted ? (
            <Timer gameCounter={gameCounter} timer={timer} />
          ) : (
            <span className={styles.timer}>Click on img to start new game</span>
          )}
        </h2>
        <div className={styles.headerDivider} />
      </div>

      <div className={styles.main}>
        <div className={styles.grid} onClick={() => startTimer()}>
          {cardsToDisplay}
        </div>
      </div>
    </div>
  );
}

export default Home;
