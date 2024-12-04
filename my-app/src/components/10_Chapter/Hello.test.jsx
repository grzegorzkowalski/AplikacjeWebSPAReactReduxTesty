import { render, screen } from "@testing-library/react";
import Hello from "./Hello.jsx";

test("renders hello message", () => {
    render(<Hello message="World" />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
});
