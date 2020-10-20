# compare-the-covid-server

Update local .env file (needs to be located in prisma folder) with: PORT, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME and DATABASE_URL = postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}

Create an empty database in psql which corresponds to your DB_NAME

In the Prisma folder, run: 
psql -h DB_HOST -d DB_NAME -U DB_USER -f schema.sql 

npx prisma introspect 

npx prisma generate 
