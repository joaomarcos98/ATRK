import styled, { css } from "styled-components";

export const Content = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.background};
        color: ${theme.colors.white};
        width: 100%;
        height: 100%;
        padding: 3rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `}
`;

export const Title = styled.h1`
    font-size: 2.5rem;
`;

export const Description = styled.h2`
    font-size: 2rem;
    font-weight: 400;
`;

export const LoginContainer = styled.main`
    ${({ theme }) => css`
    border-radius: .5rem;
        background-color: ${theme.colors.black};
        margin-top: 5rem;
        padding: 2.5rem 5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    `}
`;
