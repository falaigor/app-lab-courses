import { CourseItemContainer } from "./styles";
import { Button } from "@/components/Button";

export const CourseItem = () => {
  return (
    <CourseItemContainer>
      <img src="/cover-item.png" alt="" />
      <h3>Titulo</h3>
      <p>
        Em apenas uma semana você vai dominar na prática uma das tecnologias
        mais utilizadas e com alta demanda para acessar as melhores
        oportunidades do mercado.
      </p>
      <Button>Acessar Curso</Button>
    </CourseItemContainer>
  );
};
