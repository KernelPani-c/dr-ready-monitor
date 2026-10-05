/**
 * Browser-only demo authentication.
 * Accounts live in localStorage with SHA-256 hashed passwords (never plain text).
 * NOTE: this is a prototype — real security requires a backend later.
 * Replace these functions with API calls when the Node.js backend is ready.
 */
export type User = { name: string; email: string };
type StoredUser = User & { passwordHash: string };

const USERS_KEY = "dr-users";
const SESSION_KEY = "dr-session";

async function hash(text: string) {
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(bytes)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
const readUsers = (): StoredUser[] => JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

/** Creates an account. Throws if the email is already registered. */
export async function signup(name: string, email: string, password: string) {
  const users = readUsers();
  const e = email.trim().toLowerCase();
  if (users.some((u) => u.email === e)) throw new Error("An account with this email already exists.");
  users.push({ name: name.trim(), email: e, passwordHash: await hash(password) });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

/** Checks credentials and stores the session so a page refresh keeps the user signed in. */
export async function login(email: string, password: string): Promise<User> {
  const e = email.trim().toLowerCase();
  const passwordHash = await hash(password);
  const u = readUsers().find((x) => x.email === e && x.passwordHash === passwordHash);
  if (!u) throw new Error("Incorrect email or password.");
  const user = { name: u.name, email: u.email };
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return user;
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

/** Returns the signed-in user, or null. Only call in the browser. */
export function getCurrentUser(): User | null {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY) || "null"); } catch { return null; }
}
