import { Module } from '@nestjs/common';
import { WardrobeService } from './wardrobe.service';
import { WardrobeController } from './wardrobe.controller';
import { WardrobeAnalysisService } from './wardrobe-analysis.service';
import { WardrobeEmbeddingService } from './wardrobe-embedding.service';
import { WardrobeClusterService } from './wardrobe-cluster.service';

@Module({
  providers: [
    WardrobeService,
    WardrobeAnalysisService,
    WardrobeEmbeddingService,
    WardrobeClusterService,
  ],
  controllers: [WardrobeController],
  exports: [WardrobeService],
})
export class WardrobeModule {}
