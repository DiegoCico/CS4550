import Link from "next/link";

export default function LabsHome() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Lab 1 • CS4550</h1>
      <p>Diego Cicotoste • Section 11597</p>

      <h2>Exercises</h2>
      <ol>
        <li><Link href="/labs/headings">Heading Tags</Link></li>
        <li><Link href="/labs/paragraphs">Paragraph Tag</Link></li>
        <li><Link href="/labs/lists">Lists (ordered/unordered)</Link></li>
        <li><Link href="/labs/tables">Tables (Q3–Q10)</Link></li>
        <li><Link href="/labs/images">Images (Starship & Teslabot)</Link></li>
        <li><Link href="/labs/forms">Forms (all inputs)</Link></li>
        <li><Link href="/labs/links">Anchor Tag</Link></li>
        <li><Link href="/labs/spa-nav">SPA Navigation</Link></li>
      </ol>

      <p><Link href="/">Back to Kambaz</Link></p>
    </main>
  );
}
