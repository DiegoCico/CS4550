import Sidebar from "../Sidebar";
export default function Courses() {
  const list = ["CS4550", "CS3000", "DS4300"];
  return (
    <main style={{ display: "flex" }}>
      <Sidebar />
      <section style={{ padding: 24 }}>
        <h1>Courses</h1>
        <ul>{list.map((id) => <li key={id}><a href={`/kanbas/courses/${id}`}>{id}</a></li>)}</ul>
      </section>
    </main>
  );
}
