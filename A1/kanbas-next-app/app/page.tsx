import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Kanbas</h1>
      <p>Diego Cicotoste - CS4550 - Fall 2025</p>

      <nav style={{ display: "grid", gap: 8, marginTop: 16 }}>
        <Link href="/Kanbas/signin">Signin</Link>
        <Link href="/Kanbas/signup">Signup</Link>
        <Link href="/Kanbas/profile">Profile</Link>
        <Link href="/Kanbas/dashboard">Dashboard</Link>
        <Link href="/Kanbas/courses">Courses</Link>

        <Link href="/Labs/" style={{ marginTop: 16, fontWeight: 700 }}>
          ➜ Go to Lab 1 (Exercises + Links + GitHub)
        </Link>
      </nav>
    </main>
  );
}
