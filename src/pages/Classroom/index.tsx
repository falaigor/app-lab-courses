import { AsideBar } from "./components/AsideBar";
import { Author } from "./components/Author";
import { ComplementaryMaterial } from "./components/ComplementaryMaterial/index";
import {
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

            <Author />
          </ClassroomInfo>

          <ComplementaryMaterial />
        </ClassroomContent>
      </ClassroomWrapper>

      <AsideBar />
    </ClassroomContainer>
  );
}
