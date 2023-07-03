import { render, screen } from "@testing-library/react";
import Card from "../../../components/low/card/Card";
import { mockWithContext } from "../../App.test";
import { initMockState, mockFetch } from "../../mocks/mocks";

describe("Card", () => {
	global.fetch = mockFetch([]);
	test("should init component", () => {
		const props = {
			data: {
				id: "8a10a8fb-067e-45f8-870a-ca56929c21ba",
				origin: "BER",
				destination: "PNQ",
				departureDate: "2023-07-20",
				availableSeats: 33,
				departureTime: "09:00 am",
				arrivalTime: "10:30 pm",
				totalTravelTime: 13.5,
				price: { amount: "168.12", currency: "EUR" },
				airline: { code: "VS" },
			},
		};
		render(mockWithContext(initMockState, <Card {...props} />));
		const origin = screen.getByTestId("origination");
		const destination = screen.getByTestId("destination");
		expect(origin.innerHTML).toContain(props.data.origin);
		expect(destination.innerHTML).toContain(props.data.destination);
	});

	test("should init component - test case 2; missing airplane code and price missing", () => {
		const props = {
			data: {
				id: "8a10a8fb-067e-45f8-870a-ca56929c21ba",
				origin: "BER",
				destination: "PNQ",
				departureDate: "2023-07-20",
				availableSeats: 33,
				departureTime: "09:00 am",
				arrivalTime: "10:30 pm",
				totalTravelTime: 13.5,
				price: { currency: "EUR" },
			},
		};
		render(mockWithContext(initMockState, <Card {...props} />));
		const origin = screen.getByTestId("origination");
		const destination = screen.getByTestId("destination");
		expect(origin.innerHTML).toContain(props.data.origin);
		expect(destination.innerHTML).toContain(props.data.destination);
	});

	test("should init component - test case 3; missing data props", () => {
		const props = {
			data: null,
		};
		render(mockWithContext(initMockState, <Card {...props} />));
	});
});
