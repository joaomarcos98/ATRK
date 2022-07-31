import * as S from "./styles";

export const Main = ({
    title = "React Avançado",
    description = "Typescript, ReactJS, NextJS e Styled-Components"
}) => (
    <S.Content>
        <S.Logo src="/img/logo.svg" alt="logo" />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Illustration src="/img/hero-illustration.svg" alt="ilustração" />
    </S.Content>
);
