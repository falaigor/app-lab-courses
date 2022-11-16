import { Button } from "@/components/Button";
import { api } from "@/services/api";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "./styles";
import { LabCourseContext } from "../../../../context/LabCourseContext";

interface SubmitLoginProps {
  email: string;
  password: string;
}

export const Form = () => {
  const { register, handleSubmit } = useForm<SubmitLoginProps>();
  const { signIn } = useContext(LabCourseContext);
  const [data, setData] = useState();
  const navigate = useNavigate();

  async function handleSubmitLogin(data: SubmitLoginProps) {
    try {
      const response = await api.post("/auth/session", data);
      setData(response.data);

      navigate("/courses");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSubmitLogin)}>
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
