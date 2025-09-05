"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { signInEmail, signInWithGoogle } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    try {
      await signInEmail(email, password);
      router.replace("/dashboard");
    } catch (error: any) {
      setErr(error?.message ?? "Login failed");
    } finally {
      setBusy(false);
    }
  };

  const handleGoogle = async () => {
    setBusy(true);
    setErr(null);
    try {
      await signInWithGoogle();
      router.replace("/dashboard");
    } catch (error: any) {
      setErr(error?.message ?? "Google sign-in failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="mx-auto max-w-md px-6 py-16">
      <h1 className="text-3xl font-semibold">Log in</h1>
      <form onSubmit={handleEmailLogin} className="mt-6 space-y-4">
        <input
          className="w-full rounded-2xl border px-4 py-2"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full rounded-2xl border px-4 py-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {err && <p className="text-sm text-red-600">{err}</p>}
        <button disabled={busy} className="w-full rounded-2xl border px-4 py-2">
          {busy ? "Please wait..." : "Log in"}
        </button>
      </form>

      <div className="mt-6">
        <button onClick={handleGoogle} className="w-full rounded-2xl border px-4 py-2">
          Continue with Google
        </button>
      </div>

      <p className="mt-4 text-sm">
        Don’t have an account? <a className="underline" href="/signup">Sign up</a>
      </p>
    </main>
  );
}
