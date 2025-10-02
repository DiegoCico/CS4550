"use client";

import { Form, Row, Col, Card, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="w-100">
      <Form>

        <Form.Group controlId="wd-name" className="mb-3">
          <Form.Label className="fw-semibold">Assignment Name</Form.Label>
          <Form.Control defaultValue="A1 - ENV + HTML" />
        </Form.Group>

        <Form.Group controlId="wd-description" className="mb-4">
          <Form.Label className="fw-semibold">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={7}
            defaultValue={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col sm={3} className="text-sm-end">
            <Form.Label htmlFor="wd-points" className="mt-2 fw-semibold">Points</Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control id="wd-points" type="number" defaultValue={100} style={{ maxWidth: 160 }} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={3} className="text-sm-end">
            <Form.Label htmlFor="wd-group" className="mt-2 fw-semibold">Assignment Group</Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Select id="wd-group" defaultValue="assignments" style={{ maxWidth: 320 }}>
              <option value="assignments">ASSIGNMENTS</option>
              <option value="quizzes">QUIZZES</option>
              <option value="exams">EXAMS</option>
              <option value="projects">PROJECTS</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={3} className="text-sm-end">
            <Form.Label htmlFor="wd-display-grade" className="mt-2 fw-semibold">Display Grade as</Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Select id="wd-display-grade" defaultValue="percentage" style={{ maxWidth: 320 }}>
              <option value="percentage">Percentage</option>
              <option value="points">Points</option>
              <option value="letter">Letter Grade</option>
              <option value="complete">Complete/Incomplete</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col sm={3} className="text-sm-end">
            <Form.Label htmlFor="wd-submission-type" className="mt-2 fw-semibold">Submission Type</Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Select id="wd-submission-type" defaultValue="online" style={{ maxWidth: 320 }} className="mb-3">
              <option value="online">Online</option>
              <option value="on-paper">On Paper</option>
              <option value="external-tool">External Tool</option>
            </Form.Select>

            <Card className="border-1">
              <Card.Body>
                <div className="fw-semibold mb-2">Online Entry Options</div>
                <div className="d-flex flex-column gap-2">
                  <Form.Check id="wd-entry-text" type="checkbox" label="Text Entry" />
                  <Form.Check id="wd-entry-url" type="checkbox" label="Website URL" defaultChecked />
                  <Form.Check id="wd-entry-media" type="checkbox" label="Media Recordings" />
                  <Form.Check id="wd-entry-annotation" type="checkbox" label="Student Annotation" />
                  <Form.Check id="wd-entry-files" type="checkbox" label="File Uploads" />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={3} className="text-sm-end">
            <Form.Label htmlFor="wd-assign-to" className="mt-2 fw-semibold">Assign to</Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control id="wd-assign-to" defaultValue="Everyone" style={{ maxWidth: 420 }} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={3} className="text-sm-end">
            <Form.Label htmlFor="wd-due-date" className="mt-2 fw-semibold">Due</Form.Label>
          </Col>
          <Col sm={9} className="d-flex gap-2">
            <Form.Control id="wd-due-date" type="date" defaultValue="2024-05-13" style={{ maxWidth: 200 }} />
            <Form.Control id="wd-due-time" type="time" defaultValue="23:59" style={{ maxWidth: 160 }} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={3} className="text-sm-end">
            <Form.Label htmlFor="wd-available-from" className="mt-2 fw-semibold">Available from</Form.Label>
          </Col>
          <Col sm={9} className="d-flex gap-2">
            <Form.Control id="wd-available-from" type="date" defaultValue="2024-05-06" style={{ maxWidth: 200 }} />
            <Form.Control id="wd-available-from-time" type="time" defaultValue="00:00" style={{ maxWidth: 160 }} />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col sm={3} className="text-sm-end">
            <Form.Label htmlFor="wd-available-until" className="mt-2 fw-semibold">Until</Form.Label>
          </Col>
          <Col sm={9} className="d-flex gap-2">
            <Form.Control id="wd-available-until" type="date" defaultValue="2024-05-20" style={{ maxWidth: 200 }} />
            <Form.Control id="wd-available-until-time" type="time" defaultValue="00:00" style={{ maxWidth: 160 }} />
          </Col>
        </Row>

        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}
