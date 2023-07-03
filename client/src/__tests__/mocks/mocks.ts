import { FilterOptions, RootContext, SortOptions } from "../../utils/basetypes";

export const mockCities = [
	{
		value: "Pune",
		key: "PNQ",
	},
	{
		value: "Berlin",
		key: "BER",
	},
];

export const mockFlights = [
	{
		id: "8a10a8fb-067e-45f8-870a-ca56929c21ba",
		origin: "PNQ",
		destination: "BER",
		departureDate: "2023-07-20",
		availableSeats: 33,
		departureTime: "09:00 am",
		arrivalTime: "10:30 pm",
		totalTravelTime: 13.5,
		price: { amount: "168.12", currency: "EUR" },
		airline: { code: "VS" },
	},
	{
		id: "83c56dcd-ff8a-405c-8804-78ff6ff0da96",
		origin: "PNQ",
		destination: "BER",
		departureDate: "2023-07-20",
		availableSeats: 41,
		departureTime: "09:30 am",
		arrivalTime: "11:30 pm",
		totalTravelTime: 14.0,
		price: { amount: "95.12", currency: "EUR" },
		airline: { code: "LH" },
	},
];

export const mockFilters: FilterOptions = {
	origin: "PNQ",
	destination: "BER",
	departureDate: "2023-07-20",
};

export const initMockState: RootContext = {
	cities: mockCities,
	flights: mockFlights,
	isLoading: false,
	filters: mockFilters,
	sortBy: SortOptions.cheapest,
};

export const mockFetch = (res: any) => {
	return jest.fn(() =>
		Promise.resolve({
			json: () => Promise.resolve(res),
		})
	) as jest.Mock;
};
