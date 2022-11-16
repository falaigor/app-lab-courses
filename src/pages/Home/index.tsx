import { FormProvider, useForm } from "react-hook-form";
import { LoginForm } from "./components/LoginForm";
import { HomePageContainer, HomeHero, HomeWrapper, HeroInfo } from "./styles";
import { useContext } from "react";
import { LabCourseContext } from "../../context/LabCourseContext";

interface SubmitLoginProps {
  email: string;
  password: string;
}

export function HomePage() {
  const { signIn, error } = useContext(LabCourseContext);
  const loginForm = useForm<SubmitLoginProps>();
  const { handleSubmit } = loginForm;

  function handSubmitSignIn(data: SubmitLoginProps) {
    signIn(data);
  }

  return (
    <HomePageContainer>
      <HomeWrapper>
        <HomeHero>
          <HeroInfo>
            <img src="/logo.svg" alt="logo" />
            <h1>
              Construa uma <span>aplicação completa</span>, do zero, com
              <span> React JS</span>
            </h1>
            <p>
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </HeroInfo>

          <form onSubmit={handleSubmit(handSubmitSignIn)}>
            <FormProvider {...loginForm}>
              <LoginForm />
              {error}
            </FormProvider>
          </form>
        </HomeHero>

        <img src="/background.png" alt="" />
      </HomeWrapper>
    </HomePageContainer>
  );
}
