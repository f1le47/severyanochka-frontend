export interface IPagination {
  favoriteItems: number
  displayedItems: number
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}