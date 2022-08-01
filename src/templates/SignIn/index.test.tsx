import { screen } from "@testing-library/react"
import { renderWithTheme } from "utils/tests/renderWithTheme"


import { SignIn } from "."

describe("<SignIn/>", () => {
    it("should render the heading", () => {
        const { container } = renderWithTheme(<SignIn />);

        expect(
            screen.getByRole("heading", { name: /SignIn/i })
        ).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    })
})
