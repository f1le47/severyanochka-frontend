import { DefaultDto } from 'dtos/DefaultDto';
import { ISavingsCardDto } from './ISavingsCardDto';
export class SavingsCardDto extends DefaultDto {
  savingsCard;

  constructor({savingsCard, message, status}: ISavingsCardDto) {
    super({message, status})

    this.savingsCard = savingsCard
  }
}