import CourseCard from "../components/CourseCard";
import coursesData from "../data/courses.json";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Course Selling Website</h1>
      <div>
        {coursesData.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Home;
