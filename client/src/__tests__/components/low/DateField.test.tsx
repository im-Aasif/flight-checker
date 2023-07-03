import { screen, render, fireEvent } from "@testing-library/react";
import DateField from "../../../components/low/date-field/DateField";

describe("DateField", () => {
	test("should init component", () => {
		const props = {
			label: "Date input",
			onChangeHandler: jest.fn(),
			name: "dateInp",
			value: "2023-07-21",
		};
		render(<DateField {...props} />);
		const inp = screen.getByTestId(`${props.name}-date-field`);
		fireEvent.change(inp, { target: { value: "2023-07-26" } });
		expect(props.onChangeHandler).toHaveBeenCalled();
	});
});
