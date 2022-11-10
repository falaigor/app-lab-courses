import { CourseItem, CoursesContainer, CoursesList } from "./styles";

export function CoursesPage() {
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
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </CoursesList>
    </CoursesContainer>
  );
}
