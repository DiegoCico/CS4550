"use client";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import {
  BsGripVertical,
  BsThreeDotsVertical,
  BsCheckCircleFill,
  BsPlusLg,
} from "react-icons/bs";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import ModulesControls from "./ModulesControls";

// Small inline controls to match your original UI
function ModuleControlButtons() {
  return (
    <div className="d-flex align-items-center">
      <BsCheckCircleFill className="text-success me-3" />
      <BsPlusLg className="me-3" />
      <BsThreeDotsVertical />
    </div>
  );
}

function LessonControlButtons() {
  return (
    <div className="d-flex align-items-center">
      <BsCheckCircleFill className="text-success me-3" />
      <BsThreeDotsVertical />
    </div>
  );
}

export default function Modules() {
  const { cid } = useParams();
  const courseId = Array.isArray(cid) ? cid[0] : cid;
  const modules = db.modules;

  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />

      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: any) => module.course === courseId)
          .map((module: any) => (
            <ListGroupItem
              key={module._id ?? module.name}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  {module.name}
                </div>
                <ModuleControlButtons />
              </div>

              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroupItem
                      key={lesson._id ?? lesson.name}
                      className="wd-lesson p-3 ps-2 d-flex align-items-center justify-content-between"
                    >
                      <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        {lesson.name}
                      </div>
                      <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}
