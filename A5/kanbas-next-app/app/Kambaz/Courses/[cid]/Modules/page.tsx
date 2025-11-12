"use client";

import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "next/navigation";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function LessonControlButtons() {
  return (
    <div className="d-flex align-items-center">
      <BsGripVertical className="text-success me-3" />
    </div>
  );
}

export default function Modules() {
  const { cid } = useParams();
  const courseId = Array.isArray(cid) ? cid[0] : cid;
  const [moduleName, setModuleName] = useState("");

  const modules = useSelector((state: any) => state.modulesReducer.modules);
  const dispatch = useDispatch();

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: courseId }));
          setModuleName("");
        }}
      />
      <br /><br /><br /><br />

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
                  {!module.editing && module.name}

                  {module.editing && (
                    <FormControl
                      className="w-50 d-inline-block"
                      onChange={(e) =>
                        dispatch(updateModule({ ...module, name: e.target.value }))
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(updateModule({ ...module, editing: false }));
                        }
                      }}
                      defaultValue={module.name}
                    />
                  )}
                </div>

                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(id: string) => dispatch(deleteModule(id))}
                  editModule={(id: string) => dispatch(editModule(id))}
                />
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
