import Sidebar from "../../../Sidebar";
export default function Assignments({ params }: { params: { cid: string }}) {
  const { cid } = params;
  return (
    <main style={{ display: "flex" }}>
      <Sidebar />
      <section style={{ padding: 24 }}>
        <h1>{cid} — Assignments</h1>
        <input placeholder="Search assignments" />
        <div style={{ display: "flex", gap: 8, margin: "8px 0" }}>
          <button>+ Assignment</button>
          <button>+ Quiz</button>
          <button>+ Exam</button>
          <button>+ Project</button>
        </div>

        <h2>Assignments</h2>
        <ul><li><a href={`/kanbas/courses/${cid}/assignments/edit`}>A1 — Basics</a></li></ul>

        <h2>Quizzes</h2>
        <ul><li>Q1 — HTML</li></ul>

        <h2>Exams</h2>
        <ul><li>Midterm</li></ul>

        <h2>Project</h2>
        <ul><li>Final Project</li></ul>
      </section>
    </main>
  );
}
