import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchForm = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchTerm })
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput 
                placeholder="Search..." 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <Button>
                <span className="fa fa-search" />
            </Button>

        </form>
    );
};

export default SearchForm;