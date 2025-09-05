export default function Lab1() {
  const onClick = () => {
    if (typeof window !== "undefined") {
      alert("Hello!");
    }
  };

  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      {/* Identify whose assignment this is */}
      <h1>Lab 1 — Diego Cicotoste</h1>
      <p>
        Links:{" "}
        <a href="/kanbas">Kambaz app</a> ·{" "}
        <a href="https://github.com/DiegoCico/CS4550/tree/main/A1/kanbas-next-app" target="_blank">Source Code</a> ·{" "}
        <a href="/">Landing</a>
      </p>

      {/* Heading tags */}
      <section>
        <h2>Heading Tags</h2>
        <h1>H1 Example</h1>
        <h2>H2 Example</h2>
        <h3>H3 Example</h3>
        <h4>H4 Example</h4>
        <h5>H5 Example</h5>
        <h6>H6 Example</h6>
      </section>

      {/* Paragraph */}
      <section>
        <h2>Paragraph</h2>
        <p>
          This is a sample paragraph demonstrating the paragraph tag. It shows
          wrapping text and basic inline content.
        </p>
      </section>

      {/* Lists */}
      <section>
        <h2>Lists</h2>
        <h3>Ordered List — Favorite Recipe Steps</h3>
        <ol>
          <li>Preheat oven to 375°F</li>
          <li>Mix ingredients</li>
          <li>Bake for 25 minutes</li>
        </ol>

        <h3>Unordered List — Favorite Books</h3>
        <ul>
          <li>Clean Code</li>
          <li>Designing Data-Intensive Applications</li>
          <li>The Pragmatic Programmer</li>
        </ul>
      </section>

      {/* Table Q3–Q10 with made-up dates and scores */}
      <section>
        <h2>Table — Q3 to Q10</h2>
        <table border={1} cellPadding={6}>
          <thead>
            <tr>
              <th>Quarter</th>
              <th>Date</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Q3", "2025-07-15", 92],
              ["Q4", "2025-08-02", 88],
              ["Q5", "2025-08-18", 95],
              ["Q6", "2025-08-30", 90],
              ["Q7", "2025-09-05", 91],
              ["Q8", "2025-09-10", 89],
              ["Q9", "2025-09-12", 93],
              ["Q10", "2025-09-14", 94],
            ].map(([q, d, s]) => (
              <tr key={q}>
                <td>{q}</td>
                <td>{d}</td>
                <td>{s as number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Images */}
      <section>
        <h2>Images</h2>
        <figure>
          <img src="/starship.jpg" alt="Starship" width={300} />
          <figcaption>Starship image</figcaption>
        </figure>
        <figure>
          <img src="/teslabot.jpg" alt="Teslabot" width={300} />
          <figcaption>Teslabot image</figcaption>
        </figure>
      </section>

      {/* Anchor tag */}
      <section>
        <h2>Anchor Tag</h2>
        <a href="https://www.northeastern.edu/" target="_blank">Go to NEU</a>
      </section>

      {/* Forms */}
      <section>
        <h2>Forms</h2>
        <form>
          <div>
            <label>Username: <input type="text" defaultValue="dcicotoste" /></label>
          </div>
          <div>
            <label>Password: <input type="password" defaultValue="pass1234" /></label>
          </div>
          <div>
            <label>First Name: <input type="text" defaultValue="Diego" /></label>
          </div>
          <div>
            <label>Last Name: <input type="text" defaultValue="Cicotoste" /></label>
          </div>
          <div>
            <label>Email: <input type="email" defaultValue="diego@example.com" /></label>
          </div>
          <div>
            <label>Salary: <input type="number" defaultValue={100000} /></label>
          </div>
          <div>
            <label>Rating: <input type="range" min={0} max={10} defaultValue={7} /></label>
          </div>
          <div>
            <label>Date of Birth: <input type="date" defaultValue="2003-05-20" /></label>
          </div>
          <div>
            <label>About you:</label><br />
            <textarea defaultValue="Write something here..." rows={4} cols={40} />
          </div>
          <div>
            <label>Upload file: <input type="file" /></label>
          </div>

          <fieldset>
            <legend>Genre (radio)</legend>
            <label><input type="radio" name="genre" defaultChecked /> Comedy</label>{" "}
            <label><input type="radio" name="genre" /> Drama</label>{" "}
            <label><input type="radio" name="genre" /> SciFi</label>{" "}
            <label><input type="radio" name="genre" /> Fantasy</label>
          </fieldset>

          <fieldset>
            <legend>Interests (checkbox)</legend>
            <label><input type="checkbox" defaultChecked /> Comedy</label>{" "}
            <label><input type="checkbox" /> Drama</label>{" "}
            <label><input type="checkbox" /> SciFi</label>{" "}
            <label><input type="checkbox" /> Fantasy</label>
          </fieldset>

          <div>
            <label>Role (select one):{" "}
              <select defaultValue="Student">
                <option>Student</option>
                <option>Faculty</option>
                <option>TA</option>
                <option>Admin</option>
              </select>
            </label>
          </div>

          <div>
            <label>Skills (select many):{" "}
              <select multiple defaultValue={["HTML", "CSS"]}>
                <option>HTML</option>
                <option>CSS</option>
                <option>JavaScript</option>
                <option>React</option>
              </select>
            </label>
          </div>

          <div style={{ marginTop: 12 }}>
            <button type="button" onClick={onClick}>Click me</button>
          </div>
        </form>
      </section>

      <hr />
      <p><a href="/">← Back to Landing</a> · <a href="/kanbas">Go to Kambaz →</a></p>
    </main>
  );
}
