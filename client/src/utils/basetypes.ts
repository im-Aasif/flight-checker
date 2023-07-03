export interface RootContext {
	cities: City[];
	isLoading: boolean;
	flights: any[];
	sortBy: SortOptions | string;
	filters: FilterOptions;
}

export interface Flight {
	id: string;
	origin: string;
	destination: string;
	departureDate: string;
	availableSeats: number;
	arrivalTime: string;
	totalTravelTime: number;
	price: Price;
	airline: Airline;
}

export interface Airline {
	code: string;
}

export interface City {
	key: string;
	value: string;
}

export interface Price {
	amount: string;
	currency: string;
}

export enum SortOptions {
	cheapest = "cheapest",
	fastest = "fastest",
}

export interface FilterOptions {
	origin: string;
	destination: string;
	departureDate: string;
}
