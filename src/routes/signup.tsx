import { createFileRoute } from "@tanstack/react-router";
import { SignupPage } from "@/features/dr/auth-pages";
export const Route = createFileRoute("/signup")({ head: () => ({ meta: [{ title: "Create Account | DR Control" }, { name: "description", content: "Create an account for the DR operations console." }, { property: "og:title", content: "Create Account | DR Control" }, { property: "og:description", content: "Create an account for the DR operations console." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }), component: SignupPage });
