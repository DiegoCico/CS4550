import Sidebar from "../Sidebar";
export default function Signin() {
  return (
    <main style={{ display: "flex" }}>
      <Sidebar />
      <section style={{ padding: 24 }}>
        <h1>Signin</h1>
        <div>
          <label>Username: <input type="text" defaultValue="alice" /></label>
        </div>
        <div>
          <label>Password: <input type="password" defaultValue="password" /></label>
        </div>
        <p>
          <a href="/kanbas/profile">Signin</a> ·{" "}
          <a href="/kanbas/signup">Signup</a>
        </p>
        <p><a href="/">Back to Landing</a></p>
      </section>
    </main>
  );
}
