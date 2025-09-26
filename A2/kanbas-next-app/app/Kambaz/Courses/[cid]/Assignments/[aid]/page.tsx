export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" />
        <br />
        <br />
  
        <label htmlFor="wd-description">Description</label>
        <br />
        <textarea id="wd-description" rows={8} cols={55} defaultValue={
  `The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
  Your full name and section
  Links to each of the lab assignments
  Link to the Kanbas application
  Links to all relevant source code repositories
  The Kanbas application should include a link to navigate back to the landing page.`} />
        <br />
        <br />
  
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" type="number" defaultValue={100} />
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-group" defaultValue="assignments">
                  <option value="assignments">ASSIGNMENTS</option>
                  <option value="quizzes">QUIZZES</option>
                  <option value="exams">EXAMS</option>
                  <option value="projects">PROJECTS</option>
                </select>
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade">Display Grade as</label>
              </td>
              <td>
                <select id="wd-display-grade" defaultValue="percentage">
                  <option value="percentage">Percentage</option>
                  <option value="points">Points</option>
                  <option value="letter">Letter Grade</option>
                  <option value="complete">Complete/Incomplete</option>
                </select>
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type" defaultValue="online">
                  <option value="online">Online</option>
                  <option value="on-paper">On Paper</option>
                  <option value="external-tool">External Tool</option>
                </select>
  
                <div style={{ marginTop: 8 }}>
                  <div><b>Online Entry Options</b></div>
                  <label>
                    <input type="checkbox" defaultChecked /> Text Entry
                  </label><br />
                  <label>
                    <input type="checkbox" /> Website URL
                  </label><br />
                  <label>
                    <input type="checkbox" /> Media Recordings
                  </label><br />
                  <label>
                    <input type="checkbox" /> Student Annotation
                  </label><br />
                  <label>
                    <input type="checkbox" /> File Uploads
                  </label>
                </div>
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign to</label>
              </td>
              <td>
                <input id="wd-assign-to" defaultValue="Everyone" />
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due</label>
              </td>
              <td>
                <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
                &nbsp;
                <input id="wd-due-time" type="time" defaultValue="23:59" />
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-from">Available from</label>
              </td>
              <td>
                <input id="wd-available-from" type="date" defaultValue="2024-05-06" />
                &nbsp;
                <input id="wd-available-from-time" type="time" defaultValue="00:00" />
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-until">Until</label>
              </td>
              <td>
                <input id="wd-available-until" type="date" defaultValue="2024-05-20" />
                &nbsp;
                <input id="wd-available-until-time" type="time" defaultValue="00:00" />
              </td>
            </tr>
          </tbody>
        </table>
  
        <br />
        <button>Cancel</button>
        <button>Save</button>
      </div>
    );
  }
  