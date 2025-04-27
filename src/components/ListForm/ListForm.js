import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addList } from '../../redux/listsReducer';

const ListForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      dispatch(addList({ title, description }));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
       <div className={styles.formGroup}>
        <label>Title:</label>
        <TextInput
            value={title}
            onChange={e => setTitle(e.target.value)}
        />
       </div>
       <div className={styles.formGroup}>
        <label>Description:</label>
        <TextInput
            value={description}
            onChange={e => setDescription(e.target.value)}
        />
       </div>
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;
