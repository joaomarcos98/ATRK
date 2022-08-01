import * as S from "./styles"
import GoogleLogo from "../../assets/google.svg"

type SignInButton = {
    onSignIn(): void
}

export const SignInButton = ({ onSignIn }: SignInButton) => (
    <S.Content onClick={onSignIn}>
        <img src={GoogleLogo} alt="" />
        <span> Sign In with Google</span>
    </S.Content >
)
