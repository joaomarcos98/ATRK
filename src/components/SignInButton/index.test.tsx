import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/renderWithTheme";

import { SignInButton } from ".";

describe("<SignInButton/>", () => {
    it("should render the heading", () => {
        const { container } = renderWithTheme(<SignInButton />);
        renderWithTheme

        expect(
            screen.getByRole("heading", { name: /SignInButton/i })
        ).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
