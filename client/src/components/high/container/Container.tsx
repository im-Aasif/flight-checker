import { useEffect, useState, useContext } from "react";
import SearchContainer from "../search-container/SearchContainer";
import styles from "./Container.module.scss";
import { AppContext } from "../../../context/AppContext";
import Spinner from "../../low/spinner/Spinner";
import Card from "../../low/card/Card";
import { processFlights } from "../../../utils/util";
import SortOpts from "../filters/Filters";
import { Flight } from "../../../utils/basetypes";
import useFetch from "../../../utils/useFetch";

function Container() {
	const context = useContext(AppContext);
	const [filteredFlights, setFilteredFlights] = useState<Flight[]>([]);
	const [isFormSubmitted, setFormSubmitted] = useState(false);
	const [sameCityError, setSameCityError] = useState(false);

	useFetch();

	useEffect(() => {
		const { flights, filters, sortBy } = context.state;
		const processed = processFlights(flights, filters, sortBy);
		setFilteredFlights([...processed]);
	}, [context.state.filters, context.state.sortBy]);

	const formSubmitHandler = (obj: any) => {
		const { destination, origin } = obj;
		if (destination === origin) {
			setSameCityError(true);
			setFilteredFlights([]);
			setFormSubmitted(false);
			return;
		}
		setSameCityError(false);
		setFormSubmitted(true);
		const filters = { ...obj };
		context.setRootHandler({
			...context.state,
			filters,
		});
	};

	return (
		<>
			{context.state.isLoading ? (
				<Spinner />
			) : (
				<main key={"main-container"} className={styles.container}>
					<p className={styles["container__disclaimer"]}>
						Mocked data available for: 20/07/2023
					</p>
					<SearchContainer onFormSubmit={formSubmitHandler} />
					{sameCityError ? (
						<p className={styles["container__error"]}>
							Please select different departure and arrival locations.
						</p>
					) : (
						<></>
					)}
					{isFormSubmitted && filteredFlights.length > 0 ? (
						<>
							<div className={styles["container__sort-options"]}>
								<SortOpts />
							</div>
							<div className={styles["container__cards"]}>
								{filteredFlights.map((data: any) => (
									<Card key={data.id} data={data} />
								))}
							</div>
						</>
					) : isFormSubmitted ? (
						<p className={styles["container__error"]}>No flights found.</p>
					) : (
						<></>
					)}
				</main>
			)}
		</>
	);
}
export default Container;
