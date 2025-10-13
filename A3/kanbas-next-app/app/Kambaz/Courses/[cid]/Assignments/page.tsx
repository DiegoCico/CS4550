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
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
  const { cid } = useParams();
  const courseId = Array.isArray(cid) ? cid[0] : cid;

  const assignments =
    (db as any).assignments?.filter((a: any) => a.course === courseId) ?? [];

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
            {assignments.map((a: any) => (
              <ListGroupItem
                key={a._id}
                className="p-3 ps-2 d-flex align-items-start justify-content-between"
              >
                <div className="d-flex align-items-start">
                  <BsGripVertical className="me-2 fs-3 text-secondary" />
                  <div>
                    <Link
                      href={`/Kambaz/Courses/${courseId}/Assignments/${a._id}`}
                      className="fw-bold text-decoration-underline text-primary"
                    >
                      {a.title}
                    </Link>
                    <div className="text-muted small">
                      Multiple Modules |{" "}
                      {a.availableFrom && (
                        <>
                          <b>Not available until</b> {a.availableFrom} |{" "}
                        </>
                      )}
                      <b>Due</b> {a.due} | {a.points} pts
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <GreenCheckmark />
                  <BsThreeDotsVertical />
                </div>
              </ListGroupItem>
            ))}

            {assignments.length === 0 && (
              <ListGroupItem className="text-muted">
                No assignments for this course.
              </ListGroupItem>
            )}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
