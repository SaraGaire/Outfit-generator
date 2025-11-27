# Outfit-generator
#backend/
  package.json
  tsconfig.json
  nest-cli.json
  .env
  prisma/
    schema.prisma

  src/
    main.ts
    app.module.ts

    common/
      prisma/
        prisma.module.ts
        prisma.service.ts
      guards/
        jwt-auth.guard.ts
      decorators/
        user.decorator.ts
      interfaces/
        auth-user.interface.ts

    auth/
      auth.module.ts
      auth.controller.ts
      auth.service.ts
      dto/
        register.dto.ts
        login.dto.ts

    users/
      users.module.ts
      users.controller.ts
      users.service.ts
      dto/
        update-profile.dto.ts
        update-preferences.dto.ts

    wardrobe/
      wardrobe.module.ts
      wardrobe.controller.ts
      wardrobe.service.ts
      wardrobe-analysis.service.ts
      wardrobe-embedding.service.ts
      wardrobe-cluster.service.ts
      dto/
        create-item.dto.ts
        filter-items.dto.ts
      types/
        analyzed-item.interface.ts

    outfit/
      outfit.module.ts
      outfit.controller.ts
      outfit.service.ts
      outfit-composer.service.ts
      vibe-interpreter.service.ts
      outfit-embedding.service.ts
      dto/
        generate-outfit.dto.ts
        outfit-feedback.dto.ts

    weather/
      weather.module.ts
      weather.service.ts
      dto/
        weather-query.dto.ts

    analytics/
      analytics.module.ts
      analytics.controller.ts
      analytics.service.ts
      wardrobe-completeness.service.ts
      usage-tracking.service.ts

    recommendation/
      recommendation.module.ts
      recommendation.controller.ts
      recommendation.service.ts
      missing-items.service.ts
      trend-predictor.service.ts
      seasonal-advisor.service.ts

    travel/
      travel.module.ts
      travel.controller.ts
      travel.service.ts
      travel-packing.service.ts
      travel-outfit-planner.service.ts
      dto/
        travel-plan.dto.ts

    color-analysis/
      color-analysis.module.ts
      color-analysis.controller.ts
      color-analysis.service.ts
      skin-tone.service.ts
      palette.service.ts
      dto/
        selfie-upload.dto.ts

    premium-stylist/
      premium-stylist.module.ts
      premium-stylist.controller.ts
      premium-stylist.service.ts
      stylist-chat.service.ts
      fit-critique.service.ts
      dto/
        stylist-chat.dto.ts
        fit-critique.dto.ts

    commerce/
      commerce.module.ts
      commerce.controller.ts
      commerce.service.ts
      commerce-search.service.ts
      price-tracking.service.ts
      sustainability.service.ts
      dto/
        search-products.dto.ts

    jobs/
      jobs.module.ts
      daily-outfit.processor.ts
      clustering.processor.ts
      price-tracking.processor.ts
      queue.module.ts
      queue.constants.ts
