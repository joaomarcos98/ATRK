import * as S from "./styles"
import GoogleLogo from "../../assets/google.svg"
import Image from "next/image"

type SignInButton = {
    onSignIn(): void
}

export const SignInButton = ({ onSignIn }: SignInButton) => (
    <S.Content onClick={onSignIn}>
        <Image src={GoogleLogo} alt="Google" />
        <span> Entrar com o Google</span>
    </S.Content >
)
