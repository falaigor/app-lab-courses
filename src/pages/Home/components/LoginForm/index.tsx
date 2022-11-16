import { useFormContext } from "react-hook-form";
import { Button } from "@/components/Button";
import { FormContainer } from "./styles";

export const LoginForm = () => {
  const { register } = useFormContext();

  return (
    <FormContainer>
      <h2>Faça seu login na plataforma</h2>

      <input type="email" placeholder="Seu email" {...register("email")} />
      <input
        type="password"
        placeholder="Sua senha"
        {...register("password")}
      />

      <Button type="submit">Entrar</Button>
    </FormContainer>
  );
};
