"use client";

import Link from "next/link";
import {
  Row,
  Col,
  Card,
  Button,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  FormControl,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import {
  toggleShowAllCourses,
  enrollCourse,
  unenrollCourse,
} from "../Enrollments/reducer";
import { setCurrentUser } from "../Account/reducer";

export default function Dashboard() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { showAllCourses, enrollments } = useSelector(
    (state: any) => state.enrollmentsReducer
  );

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser && !currentUser) {
      dispatch(setCurrentUser(JSON.parse(savedUser)));
    }
  }, [dispatch, currentUser]);

  if (!currentUser) {
    return (
      <div className="text-center mt-5">
        <h2>Please Sign In to access the Dashboard</h2>
        <Link href="/Kambaz/Account/Signin" className="btn btn-primary mt-3">
          Sign In
        </Link>
      </div>
    );
  }

  const userId = currentUser._id;
  const userRole = currentUser.role;
  const userEnrollments = enrollments.filter((e: any) => e.user === userId);
  const enrolledCourseIds = userEnrollments.map((e: any) => e.course);

  const visibleCourses = showAllCourses
    ? courses
    : courses.filter((c: any) => enrolledCourseIds.includes(c._id));

  const isEnrolled = (courseId: string) =>
    enrolledCourseIds.includes(courseId);

  const handleEnroll = (courseId: string) => {
    dispatch(enrollCourse({ userId, courseId }));
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollCourse({ userId, courseId }));
  };

  const handleGo = (courseId: string) => {
    if (isEnrolled(courseId)) {
      router.push(`/Kambaz/Courses/${courseId}/Home`);
    } else {
      alert("You must enroll in this course first.");
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    dispatch(setCurrentUser(null));
    router.push("/Kambaz/Account/Signin");
  };

  return (
    <div id="wd-dashboard" className="px-4" style={{ marginLeft: 140 }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <div className="d-flex gap-2">
          <Button
            variant="primary"
            className="fw-semibold"
            onClick={() => dispatch(toggleShowAllCourses())}
          >
            {showAllCourses ? "Show My Enrollments" : "Show All Courses"}
          </Button>
          <Button variant="outline-danger" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </div>

      <hr />

      {userRole === "FACULTY" && (
        <>
          <h5 className="fw-semibold">
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
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : "My Enrollments"} (
        {visibleCourses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {visibleCourses.map((c: any) => (
            <Col key={c._id} style={{ width: 300 }}>
              <Card className="h-100 shadow-sm">
                <CardImg
                  src={c.image || "/images/reactjs.jpg"}
                  variant="top"
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="fw-bold text-truncate">
                    {c.name}
                  </CardTitle>
                  <CardText
                    className="text-muted"
                    style={{
                      maxHeight: 100,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {c.description}
                  </CardText>
                </CardBody>

                <div className="d-flex justify-content-between align-items-center p-2">
                  {isEnrolled(c._id) ? (
                    <Button
                      variant="danger"
                      onClick={() => handleUnenroll(c._id)}
                    >
                      Unenroll
                    </Button>
                  ) : (
                    <Button
                      variant="success"
                      onClick={() => handleEnroll(c._id)}
                    >
                      Enroll
                    </Button>
                  )}

                  <Button variant="secondary" onClick={() => handleGo(c._id)}>
                    Go
                  </Button>

                  {userRole === "FACULTY" && (
                    <>
                      <Button
                        variant="warning"
                        onClick={(e) => {
                          e.preventDefault();
                          setCourse(c);
                        }}
                      >
                        Edit
                      </Button>

                      <Button
                        variant="outline-danger"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(deleteCourse(c._id));
                        }}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
