import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';
import { Categories } from 'src/entities';
export class UpdateBlogDTO {
  @Expose()
  @IsOptional()
  @IsString()
  title: string;

  @Expose()
  @IsOptional()
  @IsString()
  content: string;

  @Expose()
  @IsOptional()
  @IsEnum(Categories, { each: true })
  category: Categories[];
}
export class UpdateBlogIdDTO {
  @IsNotEmpty()
  @IsString()
  id: string;
}
