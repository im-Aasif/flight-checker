import { fireEvent, render, screen } from "@testing-library/react";
import { initMockState, mockFetch } from "../../mocks/mocks";
import { mockWithContext } from "../../App.test";
import SortOpts from "../../../components/high/filters/Filters";

describe("Filters", () => {
	global.fetch = mockFetch({});
	test("should init component", () => {
		render(mockWithContext(initMockState, <SortOpts />));
	});

	test("should init component - button click case", () => {
		render(mockWithContext(initMockState, <SortOpts />));
		const btn = screen.getByText(/Cheapest/);
		fireEvent.click(btn);
	});
});
