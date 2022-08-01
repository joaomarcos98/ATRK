import styled, { css } from "styled-components"
import media from "styled-media-query"

export const Content = styled.div`

    ${media.lessThan("medium")`
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    ${media.greaterThan("medium")`
        display: grid;
        grid-template-columns: auto 600px;
        grid-template-rows: 100vh;
    `}
`

export const Aside = styled.aside`
    ${({ theme }) => css`
        background-color: ${theme.colors.green};

        ${media.greaterThan("medium")`    
            width: 100%;
            height: 100%;
        `}
    `}
`

export const Container = styled.main`

    ${media.lessThan("medium")`
        width: 100vw;
        height: 100vh;
    `}

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


`

export const Box = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.lightGray};
        padding: ${theme.spacings.medium};
        border-radius: ${theme.border.radius};

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`

export const Title = styled.h2`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.xxlarge};
        text-align: center;
        margin-bottom: ${theme.spacings.large};
    `}
`

export const Text = styled.p`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.medium};
        margin-bottom: ${theme.spacings.small};
    `}
`
