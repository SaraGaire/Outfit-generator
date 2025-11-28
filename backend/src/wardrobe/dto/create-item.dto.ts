import { IsOptional, IsString } from 'class-validator';

export class CreateItemDto {
  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  subCategory?: string;
}
