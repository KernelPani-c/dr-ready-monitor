import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/features/dr/auth-pages";
export const Route = createFileRoute("/login")({ head: () => ({ meta: [{ title: "Sign In | DR Control" }, { name: "description", content: "Sign in to the DR testing and readiness console." }, { property: "og:title", content: "Sign In | DR Control" }, { property: "og:description", content: "Sign in to the DR testing and readiness console." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }), component: LoginPage });
