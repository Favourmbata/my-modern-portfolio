import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://9d9aa68c288678b860b6a62da363e1f7@o4507812918657024.ingest.us.sentry.io/4507813032755200",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
    }),
  ],
});