# syntax=docker/dockerfile:1

ARG BUN_VERSION=1.4.2

FROM oven/bun:${BUN_VERSION}-slim AS build
WORKDIR /app

COPY package.json bun.lock ./
# The build context has no Git metadata, so skip install lifecycle hooks.
RUN --mount=type=cache,target=/root/.bun/install/cache \
    bun install --frozen-lockfile --ignore-scripts

COPY . .
ENV NODE_ENV=production
RUN bun --bun run build

FROM oven/bun:${BUN_VERSION}-slim AS runtime
WORKDIR /app

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000

COPY --from=build --chown=bun:bun /app/.output ./.output

USER bun
EXPOSE 3000
CMD ["bun", "--no-install", "run", "./.output/server/index.mjs"]
