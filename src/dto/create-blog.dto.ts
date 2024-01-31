import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { Expose } from 'class-transformer';
import { Categories } from 'src/entities';
export class CreateBlogDTO {
  @Expose()
  @IsNotEmpty()
  @IsString()
  title: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  content: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  author: string;
  
  @Expose()
  @IsNotEmpty()
  @IsEnum(Categories, { each: true })
  category: Categories[];
}
