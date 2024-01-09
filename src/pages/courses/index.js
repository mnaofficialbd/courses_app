// courses/index.js
import Link from "next/link";
import coursesData from "../../data/courses.json";

const Courses = () => {
  return (
    <div>
      <h1>All Courses</h1>
      <ul>
        {coursesData.map((course) => (
          <li key={course.slug}>
            <Link href={`/courses/${course.slug}`}>
              <a>{course.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
