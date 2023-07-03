import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { API_URL, DATA_ENDPOINT } from "./constants";

const getData = () => {
	return fetch(`${API_URL}${DATA_ENDPOINT}`, { method: "GET" });
};
export default () => {
	const context = useContext(AppContext);
	useEffect(() => {
		const request = async () => {
			try {
				const result = await getData();
				const res = await result.json();
				if (res) {
					context.setRootHandler({
						...context.state,
						flights: res.flights,
						cities: res.cities,
					});
				}
			} catch (err: any) {
				console.log("Hook error - ", err);
			}
		};
		request();
	}, []);
};
