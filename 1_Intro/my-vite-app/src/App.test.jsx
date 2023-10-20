import { describe, expect, it } from "vitest"

import App from "./App";

import { render, screen, userEvent } from "../test-utils";



describe("Simple working test", () => {

    it("the title is visible", () => {

        render(<App />);

        const welcomeText = screen.getByText(/Click on the Vite and React logos to learn more/i);

        screen.debug(welcomeText);

        expect(screen.getByText(/Click on the Vite and React logos to learn more/i)).toBeInTheDocument();

    });




    it("should increment count on click", async () => {

        render(<App />);

        userEvent.click(screen.getByRole("button"));

        expect(await screen.findByText(/count is/i)).toBeInTheDocument();
    });

});