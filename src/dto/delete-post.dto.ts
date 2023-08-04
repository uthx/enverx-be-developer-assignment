import { IsString, IsNotEmpty } from 'class-validator';

export class DeletePostDTO {
  @IsNotEmpty()
  @IsString()
  id: string;
}
