import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Kanbas</h1>
      <p>Diego Cicotoste - CS4550 - Fall 2025</p>

      <nav style={{ display: "grid", gap: 8, marginTop: 16 }}>
        <Link href="/Kambaz/Account/Signin">Signin</Link>
        <Link href="/Kambaz/Account/Signup">Signup</Link>
        <Link href="/Kambaz/Account/Profile">Profile</Link>
        <Link href="/Kambaz/Dashboard">Dashboard</Link>
        <Link href="/Kambaz/Courses">Courses</Link>

        <Link href="/Labs/" style={{ marginTop: 16, fontWeight: 700 }}>
          ➜ Go to Lab 1
        </Link>
      </nav>
    </main>
  );
}
