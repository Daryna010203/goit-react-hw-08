import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleSearchChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={css.search}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="search"
        value={filter}
        onChange={handleSearchChange}
        autoFocus
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
