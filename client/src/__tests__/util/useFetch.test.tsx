import { renderHook } from "@testing-library/react";
import useFetch from "../../utils/useFetch";
import { mockFetch } from "../mocks/mocks";
// import { mockCities, mockFetch, mockFlights } from "../mocks/mocks";

describe("useFetch", () => {
	global.fetch = mockFetch({});

	test("should call useFetch", () => {
		renderHook(() => useFetch());
	});
});
