import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import {
  DAILY_OUTFIT_QUEUE,
  CLUSTERING_QUEUE,
  PRICE_TRACKING_QUEUE,
  ANALYTICS_QUEUE,
} from './queue.constants';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT ?? 6379),
      },
    }),
    BullModule.registerQueue(
      { name: DAILY_OUTFIT_QUEUE },
      { name: CLUSTERING_QUEUE },
      { name: PRICE_TRACKING_QUEUE },
      { name: ANALYTICS_QUEUE },
    ),
  ],
  exports: [BullModule],
})
export class QueueModule {}
