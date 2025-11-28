import { Injectable } from '@nestjs/common';
import { Item } from '@prisma/client';

/**
 * This service will generate and store vector embeddings for items.
 * You can plug in OpenAI embeddings, Cohere, etc.
 */
@Injectable()
export class WardrobeEmbeddingService {
  async createEmbedding(item: Item): Promise<void> {
    // TODO: call embedding model and store vector in a vector DB or JSON
    return;
  }

  async findSimilarItems(
    itemId: string,
    userId: string,
  ): Promise<{ id: string; similarity: number }[]> {
    // TODO: query vector DB
    return [];
  }
}
