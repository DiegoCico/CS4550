import Sidebar from "../../../../Sidebar";
export default function EditAssignment({ params }: { params: { cid: string }}) {
  const { cid } = params;
  return (
    <main style={{ display: "flex" }}>
      <Sidebar />
      <section style={{ padding: 24 }}>
        <h1>{cid} — Edit Assignment</h1>

        <div><label>Assignment Name: <input type="text" defaultValue="A1 — Basics" /></label></div>
        <div>
          <label>Description:<br />
            <textarea defaultValue="This is a sample assignment." rows={4} cols={40} />
          </label>
        </div>
        <div><label>Points: <input type="number" defaultValue={100} /></label></div>

        <div>
          <label>Assignment Group:{" "}
            <select defaultValue="Assignments">
              <option>Assignments</option><option>Quizzes</option><option>Exams</option><option>Project</option>
            </select>
          </label>
        </div>

        <div>
          <label>Display Grade:{" "}
            <select defaultValue="Percentage">
              <option>Percentage</option><option>Points</option><option>Letter Grade</option>
            </select>
          </label>
        </div>

        <div>
          <label>Submission Type:{" "}
            <select defaultValue="Online">
              <option>Online</option><option>On Paper</option><option>External Tool</option>
            </select>
          </label>
        </div>

        <fieldset>
          <legend>Online Entry Options</legend>
          <label><input type="checkbox" defaultChecked /> Text Entry</label>{" "}
          <label><input type="checkbox" /> Website URL</label>{" "}
          <label><input type="checkbox" /> Media Recordings</label>{" "}
          <label><input type="checkbox" /> File Uploads</label>
        </fieldset>

        <div><label>Assign to: <input type="text" defaultValue="Everyone" /></label></div>
        <div><label>Due date: <input type="date" defaultValue="2025-09-18" /></label></div>
        <div><label>Available from: <input type="date" defaultValue="2025-09-01" /></label></div>
        <div><label>Until: <input type="date" defaultValue="2025-09-30" /></label></div>
      </section>
    </main>
  );
}
