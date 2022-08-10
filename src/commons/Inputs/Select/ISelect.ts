export interface ISelect {
  selectName: string,
  selectLabel: string,
  options: string[]
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}