CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar,
  "password" varchar,
  "email" varchar
);

CREATE TABLE "savedLocations" (
  "user_id" int,
  "location_id" int
);

CREATE TABLE "locations" (
  "id" SERIAL PRIMARY KEY,
  "location_events" int,
  "name" varchar,
  "country" varchar,
  "googlemap_URL" varchar,
  "location_type" varchar,
  "longitude" float,
  "latitutde" float
);

CREATE TABLE "LocationEvents" (
  "id" SERIAL PRIMARY KEY,
  "alertType" varchar,
  "alertDate" date,
  "alertScore" int,
  "created_at" timestamp,
  "location_id" int,
  "expires_on" timestamp
);

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "savedLocations" ("user_id");

ALTER TABLE "locations" ADD FOREIGN KEY ("id") REFERENCES "savedLocations" ("location_id");

ALTER TABLE "LocationEvents" ADD FOREIGN KEY ("id") REFERENCES "locations" ("location_events");

-- ALTER TABLE "locations" ADD COLUMN type transaction_type;

COMMENT ON COLUMN "locations"."location_type" IS '
    1 = restaurant, 
    2 = shop,
    3 = office,
    4 = store
  ';

COMMENT ON COLUMN "LocationEvents"."alertType" IS '
      1 = covid detected
      2 = possible covid
      3 = no covid detected
    ';

COMMENT ON COLUMN "LocationEvents"."expires_on" IS '
    check latest log and deactivate if expired
  ';