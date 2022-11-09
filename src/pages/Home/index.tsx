import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import {
  HomePageContainer,
  HomeHero,
  HomeWrapper,
  HeroInfo,
  HeroForm,
} from "./styles";

export function HomePage() {
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

          <HeroForm>
            <h2>Faça seu login na plataforma</h2>

            <Input type="email" placeholder="Seu email" />
            <Input type="password" placeholder="Sua senha" />

            <Button>Entrar</Button>
          </HeroForm>
        </HomeHero>

        <img src="/background.png" alt="" />
      </HomeWrapper>
    </HomePageContainer>
  );
}
