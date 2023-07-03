import { SortOptions, Price, Flight, FilterOptions } from "./basetypes";

export function calcPrice(price: Price) {
	const options = { style: "currency", currency: price.currency };
	return new Intl.NumberFormat("de-DE", options).format(
		parseFloat(price.amount)
	);
}

export function processFlights(
	flights: Flight[],
	filters: FilterOptions | {},
	sortBy: string
) {
	return sortFlights(filterFlights(filters, flights), sortBy);
}

export function filterFlights(filterObj: any, flights: any[]) {
	return flights.filter((flight) => {
		return (
			flight.origin === filterObj.origin &&
			flight.destination === filterObj.destination &&
			new Date(flight.departureDate)?.getTime() ===
				new Date(filterObj.departureDate).getTime()
		);
	});
}

export function sortFlights(flights: Flight[], filter: string) {
	switch (filter) {
		case SortOptions.cheapest:
			return flights.sort((a: Flight, b: Flight) => {
				const aPrice = parseFloat(a.price?.amount);
				const bPrice = parseFloat(b.price?.amount);
				return aPrice - bPrice;
			});
		case SortOptions.fastest:
			return flights.sort((a: Flight, b: Flight) => {
				const aTime = a.totalTravelTime;
				const bTime = b.totalTravelTime;
				return aTime - bTime;
			});
		default:
			return flights;
	}
}

export function formatDate(date: Date) {
	const formatDate =
		date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
	const formatMonth =
		date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
	const formattedDate = [date.getFullYear(), formatMonth, formatDate].join("-");
	return formattedDate;
}
