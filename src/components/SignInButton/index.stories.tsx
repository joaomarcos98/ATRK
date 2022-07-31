import { Meta, Story } from "@storybook/react/types-6-0";
import { SignInButton } from ".";

export default {
    title: "SignInButton",
    component: SignInButton
} as Meta;

export const Template: Story = (args) => <SignInButton {...args} />;
