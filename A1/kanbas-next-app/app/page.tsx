import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Kanbas (Kambaz)</h1>
      <p>CS4550 • Fall 2025</p>

      <nav style={{ display: "grid", gap: 8, marginTop: 16 }}>
        <Link href="/kanbas/signin">Signin</Link>
        <Link href="/kanbas/signup">Signup</Link>
        <Link href="/kanbas/profile">Profile</Link>
        <Link href="/kanbas/dashboard">Dashboard</Link>
        <Link href="/kanbas/courses">Courses</Link>
        <Link href="/kanbas/modules">Modules</Link>
        <Link href="/kanbas/assignments">Assignments</Link>
        <Link href="/labs" style={{ marginTop: 16, fontWeight: 700 }}>
          ➜ Go to Lab 1 (Exercises + Links + GitHub)
        </Link>
      </nav>
    </main>
  );
}
