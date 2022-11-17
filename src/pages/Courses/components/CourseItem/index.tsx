import { CourseItemContainer } from "./styles";
import { CourseProps } from "../..";
import { Link } from "react-router-dom";

export const CourseItem = (course: CourseProps) => {
  return (
    <>
      <CourseItemContainer>
        <img src={course.cover} alt={course.name} />
        <h3>{course.name}</h3>
        <p>{course.description}</p>
        <Link to={course.slug}>Acessar Curso</Link>
      </CourseItemContainer>
    </>
  );
};
