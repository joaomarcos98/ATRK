import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/renderWithTheme";
import userEvent from '@testing-library/user-event'

import { SignInButton } from ".";

const mock = jest.fn()

describe("<SignInButton/>", () => {
    it("should be render correctly", () => {
        const { container } = renderWithTheme(<SignInButton onSignIn={mock} />);
        
        expect(
            screen.getByRole("button", { name: /Sign In with Google/i })
        ).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });

    it("should be when user click dispath onSignIn", () => {
        renderWithTheme(<SignInButton onSignIn={mock} />);

        fireEvent.click(screen.getByRole("button", { name: /Sign In with Google/i }))

        expect(mock).toHaveBeenCalledTimes(1);
    });

    it("should be have accessibility", () => {
        renderWithTheme(<SignInButton onSignIn={mock} />);

        expect(document.body).toHaveFocus();

        userEvent.tab()

        expect(
            screen.getByRole("button", { name: /Sign In with Google/i })
        ).toHaveFocus();
    });
});
