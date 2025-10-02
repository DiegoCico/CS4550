"use client";

import Link from "next/link";
import {
  ListGroup,
  ListGroupItem,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import {
  BsGripVertical,
  BsThreeDotsVertical,
  BsPlusLg,
  BsSearch,
} from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="clearfix">
        <div className="w-50 d-inline-block">
          <InputGroup>
            <InputGroup.Text className="bg-white">
              <BsSearch />
            </InputGroup.Text>
            <Form.Control
              id="wd-search-assignment"
              placeholder="Search for Assignments"
            />
          </InputGroup>
        </div>

        <Button
          id="wd-add-assignment"
          variant="danger"
          size="lg"
          className="me-1 float-end"
        >
          <BsPlusLg className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </Button>
        <Button
          id="wd-add-assignment-group"
          variant="secondary"
          size="lg"
          className="float-end me-2"
        >
          <BsPlusLg className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </Button>
      </div>

      <br /><br /><br /><br />

      <ListGroup className="rounded-0">
        <ListGroupItem className="p-0 mb-4 fs-5 border-gray">
          <div className="p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between border-start border-4 border-success">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <span className="fw-bold">ASSIGNMENTS</span>
              <span className="ms-2">40% of Total</span>
            </div>
            <div className="d-flex align-items-center">
              <GreenCheckmark />
              <BsPlusLg className="me-3" />
              <BsThreeDotsVertical />
            </div>
          </div>

          <ListGroup className="rounded-0">
            {/* A1 */}
            <ListGroupItem className="p-3 ps-2 d-flex align-items-start justify-content-between">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3 text-secondary" />
                <div>
                  <Link
                    href="/Kambaz/Courses/1234/Assignments/123"
                    className="fw-bold text-decoration-underline text-primary"
                  >
                    A1 - ENV + HTML
                  </Link>
                  <div className="text-muted small">
                    Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <GreenCheckmark />
                <BsThreeDotsVertical />
              </div>
            </ListGroupItem>

            {/* A2 */}
            <ListGroupItem className="p-3 ps-2 d-flex align-items-start justify-content-between">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3 text-secondary" />
                <div>
                  <Link
                    href="/Kambaz/Courses/1234/Assignments/124"
                    className="fw-bold text-decoration-underline text-primary"
                  >
                    A2 - CSS + BOOTSTRAP
                  </Link>
                  <div className="text-muted small">
                    Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <GreenCheckmark />
                <BsThreeDotsVertical />
              </div>
            </ListGroupItem>

            {/* A3 */}
            <ListGroupItem className="p-3 ps-2 d-flex align-items-start justify-content-between">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3 text-secondary" />
                <div>
                  <Link
                    href="/Kambaz/Courses/1234/Assignments/125"
                    className="fw-bold text-decoration-underline text-primary"
                  >
                    A3 - JAVASCRIPT + REACT
                  </Link>
                  <div className="text-muted small">
                    Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <GreenCheckmark />
                <BsThreeDotsVertical />
              </div>
            </ListGroupItem>

            {/* A4 */}
            <ListGroupItem className="p-3 ps-2 d-flex align-items-start justify-content-between">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3 text-secondary" />
                <div>
                  <Link
                    href="/Kambaz/Courses/1234/Assignments/126"
                    className="fw-bold text-decoration-underline text-primary"
                  >
                    A4 - NODE + EXPRESS
                  </Link>
                  <div className="text-muted small">
                    Multiple Modules | <b>Not available until</b> May 27 at 12:00am | <b>Due</b> April 4 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <GreenCheckmark />
                <BsThreeDotsVertical />
              </div>
            </ListGroupItem>

            {/* A5 */}
            <ListGroupItem className="p-3 ps-2 d-flex align-items-start justify-content-between">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3 text-secondary" />
                <div>
                  <Link
                    href="/Kambaz/Courses/1234/Assignments/127"
                    className="fw-bold text-decoration-underline text-primary"
                  >
                    A5 - MONGO + MONGOOSE
                  </Link>
                  <div className="text-muted small">
                    Multiple Modules | <b>Not available until</b> April 11 at 12:00am | <b>Due</b> May 18 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <GreenCheckmark />
                <BsThreeDotsVertical />
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
