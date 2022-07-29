import { render } from "@testing-library/react"
import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../../ui/styles/theme"

type RenderWithThemeProps = {
    children: React.ReactNode
}

export const renderWithTheme = ({ children }: RenderWithThemeProps) => {
    return render(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}