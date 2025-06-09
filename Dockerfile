FROM node:24-alpine AS base

WORKDIR /app

COPY package.json yarn.lock* ./

RUN yarn install --frozen-lockfile

COPY . .

COPY .env.example .env

RUN yarn build

RUN npx prisma generate

EXPOSE 3333

CMD ["sh", "-c", "npx prisma db push && yarn start:prod"]
