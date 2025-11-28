import { Injectable } from '@nestjs/common';
import { AnalyzedItem } from './types/analyzed-item.interface';

/**
 * This service will call your vision + LLM APIs
 * to analyze an image and return structured tags.
 */
@Injectable()
export class WardrobeAnalysisService {
  async analyzeImage(imageUrl: string): Promise<AnalyzedItem> {
    // TODO: integrate with OpenAI Vision or other model
    // For now, return a dummy object.
    return {
      category: 'top',
      subCategory: 'tshirt',
      colors: ['white'],
      patterns: 'plain',
      fit: 'regular',
      formalityLevel: 'casual',
      seasons: ['summer', 'spring'],
      styleTags: ['minimal'],
      metadata: { source: 'mock' },
    };
  }
}
