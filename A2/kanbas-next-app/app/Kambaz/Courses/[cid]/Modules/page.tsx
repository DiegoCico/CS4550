"use client";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import {
  BsGripVertical,
  BsThreeDotsVertical,
  BsCheckCircleFill,
  BsPlusLg,
} from "react-icons/bs";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              Week 1
            </div>
            <div className="d-flex align-items-center">
              <BsCheckCircleFill className="text-success me-3" />
              <BsPlusLg className="me-3" />
              <BsThreeDotsVertical />
            </div>
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-2 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
              </div>
              <div className="d-flex align-items-center">
                <BsCheckCircleFill className="text-success me-3" />
                <BsThreeDotsVertical />
              </div>
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-2 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Introduction to the course
              </div>
              <div className="d-flex align-items-center">
                <BsCheckCircleFill className="text-success me-3" />
                <BsThreeDotsVertical />
              </div>
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-2 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Learn what is Web Development
              </div>
              <div className="d-flex align-items-center">
                <BsCheckCircleFill className="text-success me-3" />
                <BsThreeDotsVertical />
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              Week 2
            </div>
            <div className="d-flex align-items-center">
              <BsCheckCircleFill className="text-success me-3" />
              <BsPlusLg className="me-3" />
              <BsThreeDotsVertical />
            </div>
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-2 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                LESSON 1
              </div>
              <div className="d-flex align-items-center">
                <BsCheckCircleFill className="text-success me-3" />
                <BsThreeDotsVertical />
              </div>
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-2 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                LESSON 2
              </div>
              <div className="d-flex align-items-center">
                <BsCheckCircleFill className="text-success me-3" />
                <BsThreeDotsVertical />
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              Week 3
            </div>
            <div className="d-flex align-items-center">
              <BsCheckCircleFill className="text-success me-3" />
              <BsPlusLg className="me-3" />
              <BsThreeDotsVertical />
            </div>
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-2 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Introduction to CSS
              </div>
              <div className="d-flex align-items-center">
                <BsCheckCircleFill className="text-success me-3" />
                <BsThreeDotsVertical />
              </div>
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-2 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                Selectors &amp; styling text
              </div>
              <div className="d-flex align-items-center">
                <BsCheckCircleFill className="text-success me-3" />
                <BsThreeDotsVertical />
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
