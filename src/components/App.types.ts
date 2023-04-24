export type TPixabayHit = {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
};

export type TPixabayResult = {
  hits: TPixabayHit[] | null;
  total: number;
  totalHits: number;
};
