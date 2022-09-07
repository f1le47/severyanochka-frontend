export interface IPagination {
  items: number
  displayedItems: number
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}