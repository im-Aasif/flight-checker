import { screen, render } from "@testing-library/react";
import Spinner from "../../../components/low/spinner/Spinner";

describe("Spinner", () => {
	test("should init component", () => {
		render(<Spinner />);
		const elem = screen.getByTestId("spinner");
		expect(elem).toBeInTheDocument();
	});
});
