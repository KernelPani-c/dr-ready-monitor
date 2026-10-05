import { Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { ShieldCheck } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login, signup } from "./auth";

function AuthCard({ title, sub, children }: { title: string; sub: string; children: ReactNode }) {
  return (
    <div className="grid min-h-screen place-items-center bg-background p-4 text-foreground">
      <div className="panel w-full max-w-md">
        <div className="panel-body space-y-5 p-6">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-md bg-primary text-primary-foreground"><ShieldCheck className="size-5" /></div>
            <div><b className="text-sm tracking-wide">DR CONTROL</b><p className="text-[10px] text-muted-foreground">OPERATIONS CENTER</p></div>
          </div>
          <div><h1 className="text-xl font-semibold">{title}</h1><p className="text-sm text-muted-foreground">{sub}</p></div>
          {children}
        </div>
      </div>
    </div>
  );
}

function Field({ label, error, ...props }: { label: string; error?: string } & React.ComponentProps<"input">) {
  return (
    <label className="block space-y-1 text-sm">
      <span className="font-medium">{label}</span>
      <Input {...props} aria-invalid={!!error} />
      {error && <span className="text-xs text-destructive">{error}</span>}
    </label>
  );
}

const signupSchema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email").max(255),
  password: z.string().min(8, "Password must be at least 8 characters").max(128),
  confirm: z.string().min(1, "Please confirm your password"),
}).refine((d) => d.password === d.confirm, { path: ["confirm"], message: "Passwords do not match" });

export function SignupPage() {
  const navigate = useNavigate();
  const [f, setF] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement>) => setF({ ...f, [k]: e.target.value });

  async function submit(e: FormEvent) {
    e.preventDefault();
    const r = signupSchema.safeParse(f);
    if (!r.success) { setErrors(Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message]))); return; }
    setErrors({}); setBusy(true);
    try { await signup(f.name, f.email, f.password); navigate({ to: "/login", search: { registered: 1 } as never }); }
    catch (err) { setErrors({ form: (err as Error).message }); }
    finally { setBusy(false); }
  }

  return (
    <AuthCard title="Create your account" sub="Get access to the DR operations console.">
      <form onSubmit={submit} className="space-y-4" noValidate>
        <Field label="Full Name" value={f.name} onChange={set("name")} error={errors.name} autoComplete="name" />
        <Field label="Email" type="email" value={f.email} onChange={set("email")} error={errors.email} autoComplete="email" />
        <Field label="Password" type="password" value={f.password} onChange={set("password")} error={errors.password} autoComplete="new-password" />
        <Field label="Confirm Password" type="password" value={f.confirm} onChange={set("confirm")} error={errors.confirm} autoComplete="new-password" />
        {errors.form && <p className="text-sm text-destructive">{errors.form}</p>}
        <Button className="w-full" disabled={busy}>{busy ? "Creating account..." : "Sign up"}</Button>
      </form>
      <p className="text-center text-sm text-muted-foreground">Already have an account? <Link to="/login" className="text-primary hover:underline">Login</Link></p>
    </AuthCard>
  );
}

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const registered = typeof window !== "undefined" && window.location.search.includes("registered");

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim() || !password) { setError("Email and password are required."); return; }
    setBusy(true); setError("");
    try { await login(email, password); navigate({ to: "/", replace: true }); }
    catch (err) { setError((err as Error).message); }
    finally { setBusy(false); }
  }

  return (
    <AuthCard title="Sign in" sub="Access the DR testing and readiness console.">
      {registered && <p className="rounded-md border border-success/30 bg-success/10 px-3 py-2 text-sm text-success">Account created. Please sign in.</p>}
      <form onSubmit={submit} className="space-y-4" noValidate>
        <Field label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        <Field label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button className="w-full" disabled={busy}>{busy ? "Signing in..." : "Login"}</Button>
      </form>
      <p className="text-center text-sm text-muted-foreground">Don't have an account? <Link to="/signup" className="text-primary hover:underline">Sign up</Link></p>
    </AuthCard>
  );
}
