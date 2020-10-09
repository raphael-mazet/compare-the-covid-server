CREATE TYPE location_type AS ENUM ('restaurant', 'shop', 'office', 'store');

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "username" VARCHAR(255),
  "userpassword" VARCHAR(255),
  "email" VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE "events" (
  "id" SERIAL PRIMARY KEY,
  "alertType" location_type,
  "alertDate" date,
  "alertScore" int,
  "created_at" timestamp,
  "expires_on" timestamp
);

CREATE TABLE "locations" (
  "id" SERIAL PRIMARY KEY,
  "location_events" int,
  "name" varchar,
  "country" varchar,
  "googlemap_URL" varchar,
  "location_type" varchar,
  "longitude" float,
  "latitutde" float,
  FOREIGN KEY ("location_events") REFERENCES "events"("id")
);

CREATE TABLE "savedLocations" (
  "user_id" int,
  "location_id" int,
  FOREIGN KEY ("user_id") REFERENCES "users" ("id"),
  FOREIGN KEY ("location_id") REFERENCES "locations" ("id")
);

