import { fireEvent, render, screen } from "@testing-library/react";
import { initMockState, mockFetch } from "../../mocks/mocks";
import Container from "../../../components/high/container/Container";
import { mockWithContext } from "../../App.test";
import { RootContext } from "../../../utils/basetypes";

describe("Container", () => {
	global.fetch = mockFetch({});

	test("should init component", () => {
		render(mockWithContext(initMockState, <Container />));
	});

	test("should init component -same origin and destination error case", () => {
		const state = {
			...initMockState,
			filters: {
				origin: "BER",
				destination: "BER",
				departureDate: "2023-07-20",
			},
		};
		render(mockWithContext(state, <Container />));
		const btn = screen.getByTestId(/btn-search/);
		fireEvent.click(btn);
		const sameCityErrorDiv = screen.getByText(
			/Please select different departure and arrival locations./
		);
		expect(sameCityErrorDiv).toBeInTheDocument();
	});

	test("should render no flights div", () => {
		const state: RootContext = {
			...initMockState,
			flights: [],
			sortBy: "",
			isLoading: false,
		};
		render(mockWithContext(state, <Container />));
		const btn = screen.getByTestId(/btn-search/);
		fireEvent.click(btn);
		const noFlightFound = screen.getByText(/No flights found./);
		expect(noFlightFound).toBeInTheDocument();
	});

	test("should render loader", () => {
		const state: RootContext = {
			...initMockState,
			isLoading: true,
		};
		render(mockWithContext(state, <Container />));
		const spinner = screen.getByTestId(/spinner/);
		expect(spinner).toBeInTheDocument();
	});

	test("should render sort options", () => {
		const state: RootContext = {
			...initMockState,
			isLoading: false,
		};
		jest.mock("../../../utils/useFetch");

		render(mockWithContext(state, <Container />));
		const btn = screen.getByTestId(/btn-search/);
		fireEvent.click(btn);
		const btnFast = screen.getByTestId(/btn-fastest/);
		fireEvent.click(btnFast);
		expect(btnFast).toBeInTheDocument();
	});
});
