# Better UI

基于 React、TanStack Start 和 shadcn/ui 的个人 Web 开发模板，使用 Bun 运行。

## 开发

```bash
bun install --frozen-lockfile
bun run dev
```

检查和修复代码：

```bash
bun run check
bun run fix
```

## 构建

```bash
bun run build
bun run start
```

产物位于 `.output`，服务默认监听 `3000` 端口。

## Docker

```bash
docker compose up -d --build
docker compose logs -f web
docker compose down
```

访问 [localhost:3000](http://localhost:3000)。
