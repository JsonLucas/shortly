CREATE DATABASE "shortly";
CREATE TABLE "users"(
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT UNIQUE NOT NULL,
    "password" TEXT NOT NULL
);

CREATE TABLE "sessions"(
    "id" SERIAL PRIMARY KEY,
    "userId" INTEGER NOT NULL REFERENCES "users"("id"),
    "authorization" TEXT NOT NULL
);

CREATE TABLE "urls"(
    "id" SERIAL PRIMARY KEY,
    "userId" INTEGER NOT NULL REFERENCES "users"("id"),
    "fullUrl" TEXT NOT NULL,
    "shortUrl" TEXT
);

CREATE TABLE "ranking"(
    "id" SERIAL PRIMARY KEY,
    "userId" INTEGER NOT NULL REFERENCES "users"("id"),
    "urlId" INTEGER NOT NULL REFERENCES "urls"("id"),
    "visitCount" INTEGER NOT NULL
);