import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from './common/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { WardrobeModule } from './wardrobe/wardrobe.module';
import { OutfitModule } from './outfit/outfit.module';
import { WeatherModule } from './weather/weather.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { RecommendationModule } from './recommendation/recommendation.module';
import { TravelModule } from './travel/travel.module';
import { ColorAnalysisModule } from './color-analysis/color-analysis.module';
import { PremiumStylistModule } from './premium-stylist/premium-stylist.module';
import { CommerceModule } from './commerce/commerce.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    WardrobeModule,
    OutfitModule,
    WeatherModule,
    AnalyticsModule,
    RecommendationModule,
    TravelModule,
    ColorAnalysisModule,
    PremiumStylistModule,
    CommerceModule,
  ],
})
export class AppModule {}
