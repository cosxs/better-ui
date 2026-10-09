import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

const HomeComponent = () => (
  <main className="flex min-h-svh flex-col items-center justify-center gap-4 p-6">
    <h1 className="text-2xl font-semibold tracking-tight">Better UI</h1>
    <Button type="button">Button</Button>
  </main>
);

export const Route = createFileRoute("/")({ component: HomeComponent });
