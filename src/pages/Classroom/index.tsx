import { Footer } from "@/components/Footer";
import { CheckCircle, Eye, FileArrowDown } from "phosphor-react";
import {
  AsideBar,
  ClassroomContainer,
  ClassroomWrapper,
  ClassroomContent,
  ClassroomInfo,
  ClassroomAuthor,
  MaterialComplementary,
} from "./styles";

export function ClassroomPage() {
  return (
    <ClassroomContainer>
      <ClassroomWrapper>
        <img src="/video.png" style={{ width: "100%" }} />

        <ClassroomContent>
          <ClassroomInfo>
            <h1>Titulo maneiro da aula</h1>
            <p>Descricao legal da aula</p>

            <ClassroomAuthor>
              <img src="/author-cover.png" alt="" />
              <p>
                <span>Diego Fernandes</span>
                <br />
                CEO e Fundador
              </p>
            </ClassroomAuthor>
          </ClassroomInfo>

          <MaterialComplementary>
            <div className="icon">
              <FileArrowDown size={32} />
            </div>
            <p>
              <span>Material complementar</span>
              <br />
              Acesse o material complementar dessa aula
            </p>
          </MaterialComplementary>
        </ClassroomContent>
      </ClassroomWrapper>

      <AsideBar>
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
      </AsideBar>
    </ClassroomContainer>
  );
}
