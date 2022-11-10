import { Button } from "@/components/Button";
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
        <CourseItem>
          <img src="/cover-item.png" alt="" />
          <h3>Titulo</h3>
          <p>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
          <Button>Acessar Curso</Button>
        </CourseItem>

        <CourseItem>
          <img src="/cover-item.png" alt="" />
          <h3>Titulo</h3>
          <p>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
          <Button>Acessar Curso</Button>
        </CourseItem>

        <CourseItem>
          <img src="/cover-item.png" alt="" />
          <h3>Titulo</h3>
          <p>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
          <Button>Acessar Curso</Button>
        </CourseItem>

        <CourseItem>
          <img src="/cover-item.png" alt="" />
          <h3>Titulo</h3>
          <p>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
          <Button>Acessar Curso</Button>
        </CourseItem>
      </CoursesList>
    </CoursesContainer>
  );
}
