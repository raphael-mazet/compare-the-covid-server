CREATE TYPE alert_type AS ENUM ('confirmed', 'suspected', 'safe');

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar,
  "password" varchar,
  "email" varchar
);

CREATE TABLE "events" (
  "id" SERIAL PRIMARY KEY,
  "alertType" alert_type,
  "alertDate" date,
  "alertScore" int,
  "created_at" timestamp,
  "expires_on" timestamp
);

CREATE TABLE "locations" (
  "id" SERIAL PRIMARY KEY,
  "location_events" int,
  FOREIGN KEY ("location_events") REFERENCES "events"("id") ON DELETE CASCADE,
  "name" varchar,
  "country" varchar,
  "googlemap_URL" varchar,
  "location_type" varchar,
  "longitude" float,
  "latitutde" float
);

CREATE TABLE "savedLocations" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE,
  "location_id" int,
  FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE CASCADE,
  "selection_date" timestamp
);
