import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getColumnsByList } from '../../redux/store';
import { getListById } from '../../redux/store';
import { useParams } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';
import { Navigate } from 'react-router-dom';
//import { useParams } from 'react-router-dom';

const List = () => {

	const { listId } = useParams();

	const columns = useSelector(state => getColumnsByList(state, listId));

	const listData = useSelector(state => getListById(state, listId));

	if (!listData) return <Navigate to="/" />

	return (
		<div className={styles.list}>
		  <header className={styles.header}>
			<h2>{listData.title}</h2>
		  </header>
		  <p>{listData.description}</p>
		  <SearchForm />
		  <section className={styles.columns}>
			{columns.map(column =>
			  <Column
				key={column.id}
				{...column}  />
			)}
		  </section>
		  <ColumnForm />
		</div>
	);
};

export default List;