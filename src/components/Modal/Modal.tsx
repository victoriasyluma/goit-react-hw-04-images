import styles from './Modal.module.scss';
import { useEffect } from 'react';
import { TPixabayHit } from '../App.types';

export const Modal: React.FC<{ hit: TPixabayHit; closeModal: () => void }> = ({
  closeModal,
  hit,
}) => {
  const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code !== 'Escape') return;

      closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // destroy
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <img src={hit.largeImageURL} alt={hit.tags} />
      </div>
    </div>
  );
};
