import * as S from "./styles"
import { GoogleLogo } from "phosphor-react"

type SignInButton = {
    onSignIn(): void
}

export const SignInButton = ({ onSignIn }: SignInButton) => (
    <S.Content onClick={onSignIn}>
        <GoogleLogo />
        <span> Sign In with Google</span>
    </S.Content >
)
