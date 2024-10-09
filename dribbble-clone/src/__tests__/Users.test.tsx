import { render, screen } from "@testing-library/react";
import Users from "../pages/common/Users";
import "@testing-library/jest-dom";

describe("User", () => {
    test("renders heading", async () => {
        render(<Users />);
        expect(screen.getByRole("heading", { name: "Users" })).toBeInTheDocument();
    });

    test("renders a list of users", async () => {
        render(<Users />);
        const users = await screen.findAllByRole("listitem");
        expect(users).toHaveLength(2);
    });
});