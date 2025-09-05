import Sidebar from "../Sidebar";
export default function Profile() {
  return (
    <main style={{ display: "flex" }}>
      <Sidebar />
      <section style={{ padding: 24 }}>
        <h1>Profile</h1>
        <div><label>Username: <input type="text" defaultValue="alice" /></label></div>
        <div><label>First Name: <input type="text" defaultValue="Alice" /></label></div>
        <div><label>Last Name: <input type="text" defaultValue="Wonder" /></label></div>
        <div><label>Password: <input type="password" defaultValue="password" /></label></div>
        <div><label>Date of Birth: <input type="date" defaultValue="2000-01-01" /></label></div>
        <div><label>Email: <input type="email" defaultValue="alice@example.com" /></label></div>
        <div>
          <label>Role:{" "}
            <select defaultValue="Student">
              <option>Student</option><option>Faculty</option><option>TA</option><option>Admin</option>
            </select>
          </label>
        </div>
        <p><a href="/kanbas">Signout</a></p>
      </section>
    </main>
  );
}
