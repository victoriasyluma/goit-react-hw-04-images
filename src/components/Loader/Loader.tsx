import { RotatingLines } from 'react-loader-spinner';
import styles from './Loader.module.scss';
import PropTypes from 'prop-types';

export const Loader = () => {
  return (
    <div className={styles.span}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

Loader.propTypes = {
  visible: PropTypes.bool,
};
