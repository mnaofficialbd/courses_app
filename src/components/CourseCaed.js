import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <Link href={`/courses/${course.slug}`}>
        <a>View Details</a>
      </Link>
    </div>
  );
};

export default CourseCard;
