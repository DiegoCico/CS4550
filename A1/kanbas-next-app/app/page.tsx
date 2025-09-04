export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Kanbas (Kambaz)</h1>
      <p>CS4550 • Fall 2025</p>

      <nav style={{ display: "grid", gap: 8, marginTop: 16 }}>
        <a href="/kanbas/signin">Signin</a>
        <a href="/kanbas/signup">Signup</a>
        <a href="/kanbas/profile">Profile</a>
        <a href="/kanbas/dashboard">Dashboard</a>
        <a href="/kanbas/courses">Courses</a>
        <a href="/kanbas/modules">Modules</a>
        <a href="/kanbas/assignments">Assignments</a>
        <a href="/labs" style={{ marginTop: 16, fontWeight: 700 }}>
          ➜ Go to Lab 1 (Exercises + Links + GitHub)
        </a>
      </nav>
    </main>
  );
}
