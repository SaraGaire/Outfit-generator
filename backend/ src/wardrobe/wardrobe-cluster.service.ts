import { Injectable } from '@nestjs/common';

/**
 * This service is responsible for clustering wardrobe items into style groups.
 * It might be run by a background job.
 */
@Injectable()
export class WardrobeClusterService {
  async reclusterUserWardrobe(userId: string): Promise<void> {
    // TODO: fetch all item embeddings and run KMeans / similar algorithm
    return;
  }
}
