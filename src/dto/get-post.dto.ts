import { IsString, IsNotEmpty } from 'class-validator';

export class GetPostDTO {
  @IsNotEmpty()
  @IsString()
  id: string;
}
