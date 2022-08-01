import { SignInButton } from "components/SignInButton";
import * as S from "./styles";

export const SignIn = () => (
    <S.Content>
        <S.Aside>

        </S.Aside>

        <S.Container>
            <S.Title>Espaço zen</S.Title>
            <S.Box>
                <S.Text>Entre com as seguintes opções:</S.Text>
                <SignInButton onSignIn={() => { }} />
            </S.Box>
        </S.Container>
    </S.Content>
);
