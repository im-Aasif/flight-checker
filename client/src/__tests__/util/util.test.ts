import { Price, SortOptions } from "../../utils/basetypes";
import { calcPrice, formatDate, processFlights } from "../../utils/util";
import { mockFilters, mockFlights } from "../mocks/mocks";

describe("Util methods", () => {
	test("should call calcPrice to get formatted price", () => {
		const obj: Price = {
			amount: "988.22",
			currency: "EUR",
		};
		const formatted = calcPrice(obj);
		expect(formatted).toBe("988,22 €");
	});

	test("should call processFlights to get filtered and sorted flights by cheapest", () => {
		const processed = processFlights(
			mockFlights,
			mockFilters,
			SortOptions.cheapest
		);
		expect(processed).not.toBeNull();
	});

	test("should call processFlights to get filtered and sorted flights by fastest", () => {
		const processed = processFlights(
			mockFlights,
			mockFilters,
			SortOptions.fastest
		);
		expect(processed).not.toBeNull();
	});

	test("should call processFlights to get filtered and sorted flights by random", () => {
		const processed = processFlights(mockFlights, mockFilters, "random");
		expect(processed).not.toBeNull();
	});

	test("should call formatDate to get yyyy-MM-dd date", () => {
		const date = new Date(2023, 7, 20);
		expect(formatDate(date)).toBe("2023-07-20");
	});

	test("should call formatDate to get yyyy-MM-dd date - case 2", () => {
		const date = new Date(2023, 10, 8);
		expect(formatDate(date)).toBe("2023-10-08");
	});
});
