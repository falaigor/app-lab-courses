import { CheckCircle, Eye } from "phosphor-react";
import { AsideBarContainer } from "./styles";

export const AsideBar = () => {
  return (
    <AsideBarContainer>
      <span className="title">Aulas</span>

      <ul>
        <li>
          <span className="classroom-status">
            <CheckCircle size={22} />
            Aula Concluida
          </span>
          <span className="classroom-type">Aula Pratica</span>
          <span className="classroom-title">
            Aula 01 - Criando o projeto e realizando o setup inicial
          </span>
        </li>

        <li className="select">
          <span className="classroom-status">
            <Eye size={22} />
            Em Andamento
          </span>
          <span className="classroom-type">Aula Pratica</span>
          <span className="classroom-title">
            Aula 01 - Criando o projeto e realizando o setup inicial
          </span>
        </li>
      </ul>
    </AsideBarContainer>
  );
};
