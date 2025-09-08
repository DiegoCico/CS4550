import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />

      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="Courses/1800" className="wd-dashboard-course-link">
            <Image src="/next.svg" width={200} height={150} alt="Discrete" />
            <div>
              <h5>CS1800 Di screte Structures</h5>
              <p className="wd-dashboard-course-title">
                Math foundations for CS
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="Courses/2500" className="wd-dashboard-course-link">
            <Image src="/next.svg" width={200} height={150} alt="CS2500" />
            <div>
              <h5>CS2500 Fundamentals of CS</h5>
              <p className="wd-dashboard-course-title">
                Intro to programming & design
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="Courses/2510" className="wd-dashboard-course-link">
            <Image src="/next.svg" width={200} height={150} alt="CS2510" />
            <div>
              <h5>CS2510 Fundamentals of CS 2</h5>
              <p className="wd-dashboard-course-title">
                Data structures & recursion
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="Courses/3500" className="wd-dashboard-course-link">
            <Image src="/next.svg" width={200} height={150} alt="CS3500" />
            <div>
              <h5>CS3500 Object-Oriented Design</h5>
              <p className="wd-dashboard-course-title">
                OOD principles in Java
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="Courses/3650" className="wd-dashboard-course-link">
            <Image src="/next.svg" width={200} height={150} alt="CS3650" />
            <div>
              <h5>CS3650 Computer Systems</h5>
              <p className="wd-dashboard-course-title">
                Operating systems & C
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="Courses/3800" className="wd-dashboard-course-link">
            <Image src="/next.svg" width={200} height={150} alt="CS3800" />
            <div>
              <h5>CS3800 Theory of Computation</h5>
              <p className="wd-dashboard-course-title">
                Automata, languages, complexity
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="Courses/DS3000" className="wd-dashboard-course-link">
            <Image src="/next.svg" width={200} height={150} alt="DS3000" />
            <div>
              <h5>DS3000 Foundations of Data Science</h5>
              <p className="wd-dashboard-course-title">
                Statistics & ML foundations
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
