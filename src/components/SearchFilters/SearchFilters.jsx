import styles from './SearchFilters.module.css';
import PropTypes from 'prop-types';

export const SearchFilters = ({ onChange }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="name"
        onChange={onChange}
        autoComplete="off"
        className={styles.input}
      />
    </div>
  );
};

SearchFilters.propTypes = {
  onChange: PropTypes.func.isRequired,
};
