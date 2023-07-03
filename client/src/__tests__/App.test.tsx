import App from "../App";
import { AppContext } from "../context/AppContext";

import { initMockState, mockFetch } from "./mocks/mocks";
import { render } from "@testing-library/react";
export const mockWithContext = (state = initMockState, component: any) => {
	return (
		<AppContext.Provider
			value={{
				state,
				setRootHandler: jest.fn(),
			}}
		>
			{component}
		</AppContext.Provider>
	);
};
describe("App", () => {
	global.fetch = mockFetch([]);
	test("should init App", () => {
		render(mockWithContext(initMockState, <App />));
	});
});
