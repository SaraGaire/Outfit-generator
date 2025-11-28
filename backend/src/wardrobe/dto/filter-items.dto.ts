import { IsOptional, IsString } from 'class-validator';

export class FilterItemsDto {
  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  style?: string;
}
