import styled, { css } from "styled-components";

export const Content = styled.button`
    ${({ theme }) => css`
        color: ${theme.colors.gray};
        padding: ${theme.spacings.xsmall} ${theme.spacings.large};
        border-radius: ${theme.border.radius};
        border: 2px solid ${theme.colors.gray};

        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.normal};

        display: flex;

        gap: ${theme.spacings.xxsmall};

        :hover{
            filter: brightness(0.95);
        }

        :active{
            filter: brightness(0.90);
        }

        cursor: pointer;
    `}
`;
