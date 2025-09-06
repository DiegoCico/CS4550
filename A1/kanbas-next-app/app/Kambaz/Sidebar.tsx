export default function Sidebar() {
    return (
      <aside style={{ width: 220, padding: 16, borderRight: "1px solid #ddd" }}>
        <nav>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 8 }}>
            <li><a href="https://www.northeastern.edu/" target="_blank">NEU</a></li>
            <li><a href="/kanbas">Account</a></li>
            <li><a href="/kanbas/dashboard">Dashboard</a></li>
            <li><a href="/kanbas/courses">Courses</a></li>
            <li><a href="/labs/lab1">Labs</a></li>
            <li><a href="/kanbas">Signin</a></li>
            <li><a href="/kanbas/signup">Signup</a></li>
            <li><a href="/kanbas/profile">Profile</a></li>
          </ul>
        </nav>
      </aside>
    );
  }
  