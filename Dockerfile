FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
RUN apk add --no-cache libc6-compat && \
  yarn --frozen-lockfile && \
  yarn build

FROM node:16-alpine AS deps
WORKDIR /app
COPY --from=builder /app .

CMD ["yarn", "start"]