import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = ({ id, title, isFavorite }) => {  // <<< UWAGA: rozbijamy propsy na { id, title, isFavorite }
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    dispatch(toggleCardFavorite(id));
  };

  return (
    <li className={styles.card}>
      <span className={styles.cardTitle}>{title}</span> {/* Wyświetlanie tytułu */}
      <button onClick={handleFavoriteClick} className={styles.favoriteButton}>
        <span className={`fa ${isFavorite ? 'fa-star ' + styles.favoriteIcon : 'fa-star-o'}`} />
      </button>
    </li>
  );
};

export default Card;
