import { FormEvent, useState, useEffect, useCallback } from 'react';
import { TPixabayHit, TPixabayResult } from './App.types';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import styles from './App.module.scss';

export const App: React.FC<{}> = () => {
  const [hits, setHits] = useState<TPixabayHit[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');

  const shouldDisplayLoadMore = ((!isLoading && hits?.length) ?? 0) < total;

  const loadPhotos = useCallback(async () => {
    setIsLoading(true);

    const per_page = 12;
    const { hits, total }: TPixabayResult = await fetch(
      `https://pixabay.com/api/?q=${filter}&page=${page}&key=34819237-929003d04d64445866cd0fd69&image_type=photo&orientation=horizontal&per_page=${per_page}`
    ).then((response) => response.json());

    setTotal(total);
    setHits((current) => {
      return [...current, ...hits];
    });
    setIsLoading(false);
  }, [filter, page]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);
    const filter = data
      .values()
      .next()
      .value.toLocaleLowerCase()
      .trim() as string;

    setFilter(filter);
    setHits([]);
    setTotal(0);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((state) => {
      return state + 1;
    });
  };

  useEffect(() => {
    if (filter === '') return;

    loadPhotos();
  }, [filter, page, loadPhotos]);

  return (
    <div className={styles.container}>
      <Searchbar onSubmit={onSubmit}></Searchbar>
      {isLoading && <Loader />}

      {!!hits?.length && <ImageGallery hits={hits} />}

      {shouldDisplayLoadMore && <Button onClick={handleLoadMore}></Button>}
    </div>
  );
};
