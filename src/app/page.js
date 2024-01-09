import CourseCard from "../components/CourseCard";
import styles from "./page.module.css";
// import coursesData from "../data/courses.json";
import coursesData from "../data/courses.json";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Welcome to the Course Selling Website</h1>
        <div>
          {coursesData.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </main>
  );
}
