import { render } from "@testing-library/react";
import { AppContextProvider } from "../../context/AppContext";
import App from "../../App";
import { mockFetch } from "../mocks/mocks";

describe("AppContext", () => {
	global.fetch = mockFetch([]);
	test("should init AppContext Provider", () => {
		const props = {
			children: <App />,
		};
		render(<AppContextProvider {...props}></AppContextProvider>);
	});
});
