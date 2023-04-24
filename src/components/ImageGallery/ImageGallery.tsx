import styles from './ImageGallery.module.scss';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ hits }) => (
  <ul className={styles.gallery}>
    {hits.map((hit) => (
      <ImageGalleryItem key={hit.id} hit={hit} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  hits: PropTypes.array.isRequired,
};
