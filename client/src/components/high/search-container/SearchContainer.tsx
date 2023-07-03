import { useEffect, useState, useContext } from "react";
import Select from "../../low/select/Select";
import styles from "./SearchContainer.module.scss";
import Button from "../../low/button/Button";
import { AppContext } from "../../../context/AppContext";
import { City, FilterOptions } from "../../../utils/basetypes";
import DateField from "../../low/date-field/DateField";

interface SCProps {
	onFormSubmit: (searchObj: any) => any;
}

function SearchContainer(props: SCProps) {
	const context = useContext(AppContext);
	const [cities, setCities] = useState<City | any>([]);
	const [searchObj, setSearchData] = useState<FilterOptions | any>({});

	useEffect(() => {
		if (context.state.filters) {
			setSearchData({ ...context.state.filters });
		}
	}, [context.state.filters]);

	useEffect(() => {
		if (context.state.cities?.length > 0) {
			const arr = [...context.state.cities];
			setCities(arr);
		}
	}, [context.state]);

	const handleChange = (key: string, value: string) => {
		if (!value) return;
		const obj = { [key]: value };
		setSearchData({ ...searchObj, ...obj });
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		const { destination, origin } = searchObj;
		if (!destination || !origin) return;
		props.onFormSubmit(searchObj);
	};
	const { origin, destination, departureDate } = searchObj;
	return (
		<section key={"search-container"} className={styles["search-container"]}>
			<form
				className={styles["search-container__form"]}
				onSubmit={handleSubmit}
			>
				<Select
					name={"origin"}
					label={"Departure"}
					key={"origin"}
					value={origin}
					data={cities}
					onChangeHandler={handleChange}
				/>

				<Select
					name={"destination"}
					label={"Arrival"}
					key={"destination"}
					value={destination}
					data={cities}
					onChangeHandler={handleChange}
				/>

				<DateField
					name={"departureDate"}
					label={"Departure date"}
					key={"departureDate"}
					value={departureDate}
					onChangeHandler={handleChange}
				/>

				<Button
					label={"Search"}
					type={"submit"}
					name={"search"}
					theme={"dark"}
				/>
			</form>
		</section>
	);
}
export default SearchContainer;
