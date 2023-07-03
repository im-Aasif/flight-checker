import { fireEvent, render, screen } from "@testing-library/react";
import { initMockState, mockFetch } from "../../mocks/mocks";
import { mockWithContext } from "../../App.test";
import SearchContainer from "../../../components/high/search-container/SearchContainer";

describe("SearchContainer", () => {
	global.fetch = mockFetch({});

	test("should init component", () => {
		const props = {
			onFormSubmit: jest.fn(),
		};
		render(mockWithContext(initMockState, <SearchContainer {...props} />));
	});

	test("should render and handle select change", () => {
		const props = {
			onFormSubmit: jest.fn(),
		};
		render(mockWithContext(initMockState, <SearchContainer {...props} />));
		const origin = screen.getByTestId(/origin-select-field/);
		fireEvent.change(origin, { target: { value: "PNQ" } });
		const destination = screen.getByTestId(/destination-select-field/);
		fireEvent.change(destination, { target: { value: null } });
	});

	test("should render and handle submit change", () => {
		const props = {
			onFormSubmit: jest.fn(),
		};

		render(mockWithContext(initMockState, <SearchContainer {...props} />));
		const origin = screen.getByTestId(/origin-select-field/);
		fireEvent.change(origin, { target: { value: "PNQ" } });
		const destination = screen.getByTestId(/destination-select-field/);
		fireEvent.change(destination, { target: { value: "BER" } });

		const btnSearch = screen.getByTestId(/btn-search/);
		fireEvent.click(btnSearch);
	});
});
