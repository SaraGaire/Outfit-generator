import { Processor, WorkerHost } from '@nestjs/bullmq';
import { DAILY_OUTFIT_QUEUE } from './queue.constants';
import { OutfitService } from '../outfit/outfit.service';
import { PrismaService } from '../common/prisma/prisma.service';

@Processor(DAILY_OUTFIT_QUEUE)
export class DailyOutfitProcessor extends WorkerHost {
  constructor(
    private readonly outfitService: OutfitService,
    private readonly prisma: PrismaService,
  ) {
    super();
  }

  async process(): Promise<void> {
    const users = await this.prisma.user.findMany({
      where: { dailyOutfitEnabled: true },
    });

    for (const user of users) {
      await this.outfitService.generateOutfit(user.id, {
        look: user.defaultDailyLook ?? 'casual',
      });
      // you can also push notifications here
    }
  }
}
