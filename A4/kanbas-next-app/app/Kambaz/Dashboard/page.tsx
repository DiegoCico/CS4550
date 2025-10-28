"use client";

import Link from "next/link";
import { Row, Col, Card, Button, CardImg, CardBody, CardTitle, CardText, FormControl } from "react-bootstrap";
import * as db from "../Database";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";

export default function Dashboard() {
  // const [courses, setCourses] = useState<any[]>(db.courses);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  if (!currentUser) {
    return (
      <div>
        <h2>Please Signin to access the Dashboard</h2>
        <Link href="/Kambaz/Account/Signin">Signin</Link>
      </div>
    );
  }

  return (
    <div id="wd-dashboard" style={{ marginLeft: 140 }}>
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h5>
        New / Edit Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={() => dispatch(addNewCourse(course))}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          id="wd-update-course-click"
          onClick={() => dispatch(updateCourse(course))}
        >
          Update
        </button>
      </h5>
      <br />

      <FormControl
        className="mb-2"
        value={course.name}
        placeholder="Course Name"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        className="mb-2"
        value={course.description}
        placeholder="Course Description"
        as="textarea"
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
              .filter((course) =>
      enrollments.some(
        (enrollment) =>
          enrollment.user === currentUser._id &&
          enrollment.course === course._id
         ))
.map((c) => (
            <Col key={c._id} style={{ width: 300 }}>
              <Card>
                <Link
                  href={`/Kambaz/Courses/${c._id}/Home`}
                  className="text-decoration-none text-dark"
                >
                  <CardImg
                    src={c.image || "/images/reactjs.jpg"}
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <CardBody>
                    <CardTitle className="text-nowrap overflow-hidden">
                      {c.name}
                    </CardTitle>
                    <CardText
                      className="overflow-hidden"
                      style={{ height: 100 }}
                    >
                      {c.description}
                    </CardText>
                  </CardBody>
                </Link>

                <div className="d-flex justify-content-between p-2">
                  <Button
                    variant="warning"
                    id="wd-edit-course-click"
                    onClick={(e) => {
                      e.preventDefault();
                      setCourse(c);
                    }}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="danger"
                    id="wd-delete-course-click"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(deleteCourse(course._id));
                    }}
                  >
                    Delete
                  </Button>

                  <Button variant="primary">Go</Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
