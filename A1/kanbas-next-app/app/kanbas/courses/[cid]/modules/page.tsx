import Sidebar from "../../../Sidebar";
export default function Modules({ params }: { params: { cid: string }}) {
  const { cid } = params;
  return (
    <main style={{ display: "flex" }}>
      <Sidebar />
      <section style={{ padding: 24 }}>
        <h1>{cid} — Modules</h1>
        <details open><summary>Module A</summary><ul><li>Lesson A1</li><li>Lesson A2</li></ul></details>
        <details><summary>Module B</summary><ul><li>Lesson B1</li><li>Lesson B2</li></ul></details>
      </section>
    </main>
  );
}
