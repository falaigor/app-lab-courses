import { Footer } from "@/components/Footer";
import { CheckCircle } from "phosphor-react";
import {
  AsideBar,
  ClassroomContainer,
  ClassroomWrapper,
  ClassroomContent,
  ClassroomInfo,
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

            <div className="ClassroomAuthor">Autor</div>
          </ClassroomInfo>
          <Footer />
        </ClassroomContent>
      </ClassroomWrapper>

      <AsideBar>
        <span className="title">Aulas</span>

        <ul>
          <li>
            <span className="classroom-complete">
              <CheckCircle size={22} />
              Conteudo liberado
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
