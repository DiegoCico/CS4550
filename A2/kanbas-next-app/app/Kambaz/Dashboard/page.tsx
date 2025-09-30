"use client";

import Link from "next/link";
import { Row, Col, Card, Button } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" style={{ marginLeft: 140 }}>
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} className="g-0" style={{ rowGap: 36, columnGap: 36 }}>
          {/* CS1800 */}
          <Col className="wd-dashboard-course" style={{ width: 260 }}>
            <Link
              href="/Kambaz/Courses/1800/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="/next.svg"
                  height={160}
                  alt="CS1800"
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1800 Discrete Structures
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: 100 }}
                  >
                    Math foundations for CS
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          {/* CS2500 */}
          <Col className="wd-dashboard-course" style={{ width: 260 }}>
            <Link
              href="/Kambaz/Courses/2500/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="/next.svg"
                  height={160}
                  alt="CS2500"
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS2500 Fundamentals of CS
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: 100 }}
                  >
                    Intro to programming &amp; design
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          {/* CS2510 */}
          <Col className="wd-dashboard-course" style={{ width: 260 }}>
            <Link
              href="/Kambaz/Courses/2510/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="/next.svg"
                  height={160}
                  alt="CS2510"
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS2510 Fundamentals of CS 2
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: 100 }}
                  >
                    Data structures &amp; recursion
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          {/* CS3500 */}
          <Col className="wd-dashboard-course" style={{ width: 260 }}>
            <Link
              href="/Kambaz/Courses/3500/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="/next.svg"
                  height={160}
                  alt="CS3500"
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS3500 Object-Oriented Design
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: 100 }}
                  >
                    OOD principles in Java
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          {/* CS3650 */}
          <Col className="wd-dashboard-course" style={{ width: 260 }}>
            <Link
              href="/Kambaz/Courses/3650/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="/next.svg"
                  height={160}
                  alt="CS3650"
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS3650 Computer Systems
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: 100 }}
                  >
                    Operating systems &amp; C
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          {/* CS3800 */}
          <Col className="wd-dashboard-course" style={{ width: 260 }}>
            <Link
              href="/Kambaz/Courses/3800/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="/next.svg"
                  height={160}
                  alt="CS3800"
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS3800 Theory of Computation
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: 100 }}
                  >
                    Automata, languages, complexity
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          {/* DS3000 */}
          <Col className="wd-dashboard-course" style={{ width: 260 }}>
            <Link
              href="/Kambaz/Courses/DS3000/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="/next.svg"
                  height={160}
                  alt="DS3000"
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    DS3000 Foundations of Data Science
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: 100 }}
                  >
                    Statistics &amp; ML foundations
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}
