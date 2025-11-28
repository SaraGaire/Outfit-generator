import { IsOptional, IsArray, IsString } from 'class-validator';

export class UpdatePreferencesDto {
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  styles?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  colors?: string[];
}
