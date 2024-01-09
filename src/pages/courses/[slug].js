import { useRouter } from "next/router";
import coursesData from "../../data/courses.json";

const CourseDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>Price: ${course.price}</p>
    </div>
  );
};

export default CourseDetail;
