import { useState } from 'react';
import styles from './ImageGalleryItem.module.scss';
import { TPixabayHit } from '../App.types';
import { Modal } from '../Modal/Modal';

export const ImageGalleryItem: React.FC<{ hit: TPixabayHit }> = ({ hit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li className={styles.gallery_items}>
      <button onClick={openModal}>
        <img src={hit.webformatURL} alt={hit.tags} />
      </button>

      {isModalOpen && <Modal hit={hit} closeModal={closeModal} />}
    </li>
  );
};
