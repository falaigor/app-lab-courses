import { api } from "@/services/api";
import { useEffect, useState, useContext } from "react";
import { LabCourseContext } from "@/context/LabCourseContext";
import { CourseItem } from "./components/CourseItem";
import { CoursesContainer, CoursesList } from "./styles";

export interface CourseProps {
  id: string;
  authorId: string;
  cover: string;
  name: string;
  description: string;
  slug: string;
  status: string;
}

export function CoursesPage() {
  const { token } = useContext(LabCourseContext);
  const [courses, setCourses] = useState<CourseProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/courses", {
        headers: { Authorization: "Bearer " + token },
      });

      setCourses(response.data);
    };

    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <CoursesContainer>
      <div className="description">
        <h1>
          Conheça nossos <span>cursos</span>
        </h1>
        <p>
          Em apenas uma semana você vai dominar na prática uma das tecnologias
          mais utilizadas e com alta demanda para acessar as melhores
          oportunidades do mercado.
        </p>
      </div>

      <CoursesList>
        {courses.map((course) => {
          return <CourseItem {...course} />;
        })}
      </CoursesList>
    </CoursesContainer>
  );
}
