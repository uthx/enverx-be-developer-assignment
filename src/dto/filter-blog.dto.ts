import { IsNotEmpty, IsEnum } from 'class-validator';
import { Categories } from 'src/entities';

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}
export class FilterDTO {
  @IsNotEmpty()
  @IsEnum(Categories)
  category: Categories;

  @IsNotEmpty()
  @IsEnum(SortOrder)
  sortOrder: SortOrder;
}
