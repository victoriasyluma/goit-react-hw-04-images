import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export const Button = ({ onClick }) => (
  <button onClick={onClick} className={styles.button}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
