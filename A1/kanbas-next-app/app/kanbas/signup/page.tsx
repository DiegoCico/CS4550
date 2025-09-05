import Sidebar from "../Sidebar";
export default function Signup() {
  return (
    <main style={{ display: "flex" }}>
      <Sidebar />
      <section style={{ padding: 24 }}>
        <h1>Signup</h1>
        <div><label>Username: <input type="text" defaultValue="new_user" /></label></div>
        <div><label>Password: <input type="password" defaultValue="pass123" /></label></div>
        <div><label>Verify Password: <input type="password" defaultValue="pass123" /></label></div>
        <p>
          <a href="/kanbas">Signin</a> ·{" "}
          <a href="/kanbas/profile">Continue to Profile</a>
        </p>
      </section>
    </main>
  );
}
