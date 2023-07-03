import { fireEvent, screen, render } from "@testing-library/react";
import Select from "../../../components/low/select/Select";
import { mockCities } from "../../mocks/mocks";

describe("Select", () => {
	test("should init component", () => {
		const props = {
			label: "Select",
			name: "select",
			onChangeHandler: jest.fn(),
			value: "",
			key: "select-key",
			data: mockCities,
		};
		render(<Select {...props} />);
		const select = screen.getByTestId(`${props.name}-select-field`);
		fireEvent.change(select, {
			target: { value: { key: "LHR", value: "London" } },
		});
		expect(props.onChangeHandler).toHaveBeenCalled();
	});
});
