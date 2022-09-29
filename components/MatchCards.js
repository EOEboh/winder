import React, { useState } from 'react';
import styles from '../styles/components/MatchCards.module.css';
import TinderCard from 'react-tinder-card';

const MatchCards = () => {

  const [ matches, setMatches ] = useState([
    {
      name: 'John',
      img: '/images/one.jpg'
    },
    {
      name: 'Mary',
      img: ' /images/two.jpg'
    },
    {
      name: 'Obinna',
      img: '/images/three.jpg'
    },
    {
      name: 'Obinna',
      img: '/images/four.jpg'
    }
  ])
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  return (
    <div className={styles.myDiv}>
      <main className={styles.cardContainer}> 
       {matches.map((match) => (
        <TinderCard
        className={styles.TinderCard}
        onSwipe={onSwipe} 
        onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>      
              <div
                className={styles.matchcard}
                key={match.name} 
                style={{ backgroundImage: `url(${match.img})`}}>
                <h2> {match.name} </h2>
              </div>
        </TinderCard>
         ))}
      </main>
    </div>
  )
}

export default MatchCards