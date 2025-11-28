import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { WardrobeService } from './wardrobe.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { AuthUser } from '../common/decorators/user.decorator';
import { CreateItemDto } from './dto/create-item.dto';
import { FilterItemsDto } from './dto/filter-items.dto';

@UseGuards(JwtAuthGuard)
@Controller('wardrobe')
export class WardrobeController {
  constructor(private readonly wardrobeService: WardrobeService) {}

  @Post('items')
  create(
    @AuthUser() user: any,
    @Body() body: CreateItemDto & { imageUrl: string },
  ) {
    return this.wardrobeService.createItem(user.id, body.imageUrl, body);
  }

  @Get('items')
  findAll(
    @AuthUser() user: any,
    @Query() query: FilterItemsDto,
  ) {
    return this.wardrobeService.findAll(user.id, query);
  }

  @Get('items/:id')
  findOne(@AuthUser() user: any, @Param('id') id: string) {
    return this.wardrobeService.findOne(user.id, id);
  }

  @Delete('items/:id')
  delete(@AuthUser() user: any, @Param('id') id: string) {
    return this.wardrobeService.delete(user.id, id);
  }
}
