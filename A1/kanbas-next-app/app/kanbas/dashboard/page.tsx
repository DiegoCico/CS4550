import Sidebar from "../Sidebar";
export default function Dashboard() {
  const courses = [
    { id: "CS4550", title: "Web Dev (CS4550)" },
    { id: "CS3000", title: "Algorithms (CS3000)" },
    { id: "DS4300", title: "Data Science (DS4300)" },
  ];
  return (
    <main style={{ display: "flex" }}>
      <Sidebar />
      <section style={{ padding: 24 }}>
        <h1>Dashboard</h1>
        <h2>Published Courses</h2>
        <ul>
          {courses.map((c) => (
            <li key={c.id}>
              <a href={`/kanbas/courses/${c.id}`}>{c.title}</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
