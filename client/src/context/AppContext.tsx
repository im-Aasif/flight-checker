import { createContext, useState } from "react";
import { RootContext, SortOptions } from "../utils/basetypes";

export const initialContext: RootContext = {
	cities: [],
	isLoading: false,
	flights: [],
	filters: {
		origin: "PNQ",
		destination: "BER",
		departureDate: "2023-07-20",
	},
	sortBy: SortOptions.cheapest,
};

export const AppContext = createContext<{
	state: RootContext;
	setRootHandler: (data: RootContext) => any;
}>({
	state: initialContext,
	setRootHandler: () => {},
});

export const AppContextProvider = (props: any) => {
	const [state, setRootState] = useState<RootContext>(initialContext);
	const setRootHandler = (data: RootContext) => {
		setRootState(data);
	};

	return (
		<AppContext.Provider
			value={{
				state,
				setRootHandler,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
