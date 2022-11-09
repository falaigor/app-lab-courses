import { Form } from "./components/Form";
import { HomePageContainer, HomeHero, HomeWrapper, HeroInfo } from "./styles";

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

          <Form />
        </HomeHero>

        <img src="/background.png" alt="" />
      </HomeWrapper>
    </HomePageContainer>
  );
}
