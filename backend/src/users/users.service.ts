import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UpdatePreferencesDto } from './dto/update-preferences.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  getMe(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  updateProfile(id: string, dto: UpdateProfileDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        height: dto.height,
        gender: dto.gender,
        location: dto.location,
      },
    });
  }

  updatePreferences(id: string, dto: UpdatePreferencesDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        stylePreferences: {
          styles: dto.styles ?? [],
          colors: dto.colors ?? [],
        } as any,
      },
    });
  }
}
