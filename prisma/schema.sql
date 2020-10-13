CREATE TYPE alert_type AS ENUM ('confirmed', 'suspected', 'safe');

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar UNIQUE,
  "password" varchar UNIQUE,
  "firstName" varchar,
  "lastName" varchar
);

CREATE TABLE "locations" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "country" varchar,
  "googlemap_URL" varchar UNIQUE,
  "location_type" varchar,
  "longitude" float,
  "latitude" float
);

CREATE TABLE "events" (
  "id" SERIAL PRIMARY KEY,
  "alertType" alert_type,
  "alertDate" date,
  "alertScore" int,
  "location_id" int,
  FOREIGN KEY ("location_id") REFERENCES "locations"("id"),
  "created_at" timestamp,
  "expires_on" timestamp
);

CREATE TABLE "savedLocations" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE,
  "location_id" int,
  FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE CASCADE,
  "selection_date" timestamp
);
