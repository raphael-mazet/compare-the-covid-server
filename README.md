# compare-the-covid-server

Update local .env file (needs to be located in prisma folder) with: PORT, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME


In the Prisma folder, run: 
psql -h HOST -d DATABASE -U USER -f schema.sql 

npx prisma introspect 

npx prisma generate 
