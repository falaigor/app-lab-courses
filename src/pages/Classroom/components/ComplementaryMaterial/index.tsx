import { FileArrowDown } from "phosphor-react";
import { ComplementaryMaterialContainer } from "./styles";

export const ComplementaryMaterial = () => {
  return (
    <ComplementaryMaterialContainer>
      <div className="icon">
        <FileArrowDown size={32} />
      </div>
      <p>
        <span>Material complementar</span>
        <br />
        Acesse o material complementar dessa aula
      </p>
    </ComplementaryMaterialContainer>
  );
};
