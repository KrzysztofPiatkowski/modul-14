import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsReducer'; // ✅ tylko to!

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    dispatch(toggleCardFavorite(id));
  };

  const handleRemoveClick = () => {
    dispatch(removeCard(id));
  };

  return (
    <li className={styles.card}>
      <span className={styles.cardTitle}>{title}</span>
      <button onClick={handleFavoriteClick} className={styles.favoriteButton}>
        <span className={`fa ${isFavorite ? 'fa-star ' + styles.favoriteIcon : 'fa-star-o'}`} />
      </button>
      <button onClick={handleRemoveClick} className={styles.removeButton}>
        <span className="fa fa-trash" />
      </button>
    </li>
  );
};

export default Card;
