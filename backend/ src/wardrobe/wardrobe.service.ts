import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateItemDto } from './dto/create-item.dto';
import { WardrobeAnalysisService } from './wardrobe-analysis.service';
import { WardrobeEmbeddingService } from './wardrobe-embedding.service';

@Injectable()
export class WardrobeService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly analysis: WardrobeAnalysisService,
    private readonly embedding: WardrobeEmbeddingService,
  ) {}

  async createItem(
    userId: string,
    imageUrl: string,
    dto: CreateItemDto,
  ) {
    const analyzed = await this.analysis.analyzeImage(imageUrl);

    const item = await this.prisma.item.create({
      data: {
        userId,
        imageUrl,
        category: dto.category ?? analyzed.category,
        subCategory: dto.subCategory ?? analyzed.subCategory,
        colors: analyzed.colors,
        patterns: analyzed.patterns,
        fit: analyzed.fit,
        formalityLevel: analyzed.formalityLevel,
        seasons: analyzed.seasons,
        styleTags: analyzed.styleTags,
        metadata: analyzed.metadata,
      },
    });

    await this.embedding.createEmbedding(item);
    return item;
  }

  async findAll(userId: string, filters: { category?: string; style?: string }) {
    return this.prisma.item.findMany({
      where: {
        userId,
        ...(filters.category ? { category: filters.category } : {}),
      },
    });
  }

  async findOne(userId: string, id: string) {
    return this.prisma.item.findFirst({
      where: { id, userId },
    });
  }

  async delete(userId: string, id: string) {
    await this.prisma.item.delete({ where: { id } });
    return { success: true };
  }
}
