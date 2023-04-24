import React, { FormEvent } from 'react';
import styles from './Searchbar.module.scss';
import { BiSearch } from 'react-icons/bi';

type SearchBarProps = {
  onSubmit: (event: FormEvent) => void;
};

export const Searchbar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  return (
    <header className={styles.searchbar}>
      <form onSubmit={onSubmit} className={styles.form}>
        <button type="submit" className={styles.button}>
          <span className={styles.button_label}></span>
          <BiSearch fontSize={24} />
        </button>

        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="filter"
        />
      </form>
    </header>
  );
};
