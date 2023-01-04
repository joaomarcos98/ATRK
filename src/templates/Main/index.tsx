import { SignInButton } from "components/SignInButton";
import * as S from "./styles";

export const Main = ({
    title = "ATRK - Tv",
    description = "A streaming platform for series and films.",
}) => (
    <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>

        <S.LoginContainer>
            <S.Description>Sing In</S.Description>
            <SignInButton onSignIn={() => { }} />
        </S.LoginContainer>
    </S.Content>
);
