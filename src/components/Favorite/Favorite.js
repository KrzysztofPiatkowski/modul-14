import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsReducer';
import Card from '../Card/Card';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  if (favoriteCards.length === 0) {
    return (
      <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.noCards}>No cards...</p>
      </div>
    );
  }

  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <ul className={styles.cards}>
        {favoriteCards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
