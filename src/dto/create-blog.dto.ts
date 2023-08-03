import { IsString, IsNotEmpty, IsEnum, IsArray } from 'class-validator';
import { Categories } from 'src/entities';
export class CreateBlogDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsEnum(Categories, {each: true})
  category: Categories[];
}
