import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { FormContainer } from "./styles";

export const Form = () => {
  return (
    <FormContainer>
      <h2>Faça seu login na plataforma</h2>

      <Input type="email" placeholder="Seu email" />
      <Input type="password" placeholder="Sua senha" />

      <Button>Entrar</Button>
    </FormContainer>
  );
};
