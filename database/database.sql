create database shortly;
create table "users"(
    "id" serial primary key,
    "name" text not null,
    "email" text unique not null,
    "password" text not null
);

create table "sessions"(
    "id" serial primary key,
    "userId" integer not null references "users"("id"),
    "authorization" text not null
);

create table "urls"(
    "id" serial primary key,
    "userId" integer not null references "users"("id"),
    "fullUrl" text not null,
    "shortUrl" text
);

create table "ranking"(
    "id" serial primary key,
    "userId" integer not null references "users"("id"),
    "urlId" integer not null references "urls"("id"),
    "visitCount" integer not null
);