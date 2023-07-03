import { fireEvent, screen, render } from "@testing-library/react";
import Button from "../../../components/low/button/Button";

describe("Button", () => {
	test("should init component", () => {
		const props = {
			label: "Search",
			name: "search",
			handleClick: jest.fn(),
			active: false,
		};
		render(<Button {...props} type="button" />);
		const btn = screen.getByText("Search");
		fireEvent.click(btn);
		expect(props.handleClick).toHaveBeenCalled();
	});

	test("should init component - negative case", () => {
		const props = {
			label: "Search",
			name: "search",
			handleClick: jest.fn(),
			theme: "light",
			active: true,
		};
		render(<Button {...props} type="button" />);
		const btn = screen.getByText("Search");
		fireEvent.click(btn);
		expect(props.handleClick).toHaveBeenCalled();
	});
});
