import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles/index.css?url";

const shellComponent = ({ children }: { children: React.ReactNode }) => (
  <html lang="zh-CN">
    <head>
      <HeadContent />
    </head>
    <body>
      {children}
      <Scripts />
    </body>
  </html>
);

const head = () => ({
  meta: [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: "Better UI" },
    { name: "robots", content: "noindex, nofollow" },
  ],
  links: [
    { rel: "stylesheet", href: appCss },
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  ],
});

export const Route = createRootRoute({
  head,
  shellComponent,
});
