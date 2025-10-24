import { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa6";
import { courses } from "../../Database";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";

export default async function CoursesLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const course = courses.find((c) => c._id === cid);

  return (
    <div id="wd-courses" className="p-3">
      <h2 className="d-flex align-items-center gap-2 m-0">
        <FaAlignJustify className="text-danger fs-5" />
        <Breadcrumb course={course} />
      </h2>

      <hr className="mt-3" />

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation cid={cid} />
        </div>
        <div className="flex-fill ps-3">{children}</div>
      </div>
    </div>
  );
}
