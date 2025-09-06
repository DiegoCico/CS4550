import Sidebar from "../../Sidebar";

export default function CourseHome({ params }: { params: { cid: string }}) {
  const { cid } = params;
  return (
    <main style={{ display: "flex" }}>
      <Sidebar />
      <section style={{ padding: 24, width: "100%" }}>
        <h1>{cid} — Home</h1>

        {/* In-course nav */}
        <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <a href={`/kanbas/courses/${cid}`}>Home</a>
          <a href={`/kanbas/courses/${cid}/modules`}>Modules</a>
          <a href="#">Piazza</a>
          <a href="#">Zoom</a>
          <a href="#">Quizzes</a>
          <a href={`/kanbas/courses/${cid}/assignments`}>Assignments</a>
          <a href="#">Grades</a>
        </nav>

        {/* Course Status + buttons + modules */}
        <section>
          <h2>Course Status</h2>
          <div style={{ display: "flex", gap: 8, margin: "8px 0" }}>
            <button>Publish</button>
            <button>Import</button>
            <button>View Course Stream</button>
          </div>

          <h2>Modules</h2>
          <details open>
            <summary>Module 1: Intro</summary>
            <ul>
              <li>Lesson 1.1</li>
              <li>Lesson 1.2</li>
            </ul>
          </details>
          <details>
            <summary>Module 2: Basics</summary>
            <ul>
              <li>Lesson 2.1</li>
              <li>Lesson 2.2</li>
            </ul>
          </details>
        </section>
      </section>
    </main>
  );
}
