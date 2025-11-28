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

# NestJS Bootstrap Configuration

This file starts the backend server with essential configurations.

## 🚀 Setup Steps

### 1️⃣ Create the App
```typescript
const app = await NestFactory.create(AppModule);
```
- Initializes the NestJS application from AppModule

---

### 2️⃣ Set API Prefix
```typescript
app.setGlobalPrefix('api');
```
- Adds `/api` to all routes
- Example: `/users` becomes `/api/users`

---

### 3️⃣ Enable Validation
```typescript
app.useGlobalPipes(new ValidationPipe({
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
}));
```

| Option | Purpose |
|--------|---------|
| `whitelist: true` | Removes properties not defined in DTOs |
| `forbidNonWhitelisted: true` | Throws error for unexpected properties |
| `transform: true` | Auto-converts data types (e.g., `"123"` → `123`) |

---

### 4️⃣ Enable CORS
```typescript
app.enableCors({
  origin: ['http://localhost:3000'],
  credentials: true,
});
```

- ✅ Allows frontend (`localhost:3000`) to communicate with backend
- ✅ **CORS** = Cross-Origin Resource Sharing (browser security)
- ✅ `credentials: true` enables cookies/auth headers

---

### 5️⃣ Start the Server
```typescript
const port = process.env.PORT || 4000;
await app.listen(port);
```

- 🌐 Server runs on **port 4000** (or custom PORT from environment)
- 🎉 Ready to handle requests!

Tech Stack

Backend Framework: NestJS (TypeScript)
AI/ML Services: Python (FastAPI, NumPy, scikit-learn, OpenAI embeddings)
Database: PostgreSQL + Prisma ORM
Cloud: AWS (S3, Lambda, EventBridge, SQS, CloudWatch, IAM)
Jobs: Redis / BullMQ
Vector Search: pgvector / Pinecone (optional)

                    ┌────────────────────┐
           Image →  │ Python Vision API  │
                    │  (FastAPI + ML)    │
                    └─────────┬──────────┘
                              │
                              ▼
                     ┌───────────────────┐
                     │ TS Backend (Nest) │
                     │ Auth / Wardrobe   │
                     │ Outfit Engine     │
                     └─────────┬─────────┘
                               │
                 ┌─────────────┼─────────────┐
                 ▼             ▼             ▼
        ┌────────────┐ ┌──────────────┐ ┌─────────────┐
        │ AWS S3      │ │ AWS RDS      │ │ SQS Workers │
        │ Image Store │ │ PostgreSQL   │ │ AI Jobs     │
        └────────────┘ └──────────────┘ └─────────────┘




📦 Setup Instructions
1. Clone the Repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME

2. Install Server Dependencies (TypeScript Backend)
npm install

3. Install Python Microservice Dependencies

The project includes Python-based AI microservices (vision analysis, clustering, embeddings, color processing, etc.).

pip install -r requirements.txt

4. Environment Variables

Create a .env file in the root directory with environment variables such as:

DATABASE_URL=postgres://...
JWT_SECRET=your-secret-key
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_REGION=...
S3_BUCKET_NAME=...

5. Run the TypeScript Backend (NestJS)
npm run start:dev


This launches the core API at:

http://localhost:4000

6. Run the Python AI Microservices

From the python-services folder (or equivalent):

uvicorn main:app --reload
