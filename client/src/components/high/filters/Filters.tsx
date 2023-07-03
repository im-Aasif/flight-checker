import React, { useState, useContext, useEffect } from "react";
import Button from "../../low/button/Button";
import { SortOptions } from "../../../utils/basetypes";
import { AppContext } from "../../../context/AppContext";

const SortOpts: React.FC<any> = () => {
	const [selectedFilter, setSelectedFilter] = useState<string>("");
	const context = useContext(AppContext);
	useEffect(() => {
		if (context.state.sortBy) {
			setSelectedFilter(context.state.sortBy);
		}
	}, [context.state.sortBy]);
	function btnClickHandler(name: string) {
		setSelectedFilter(name);
		context.setRootHandler({
			...context.state,
			sortBy: name,
		});
	}
	return (
		<div>
			<Button
				label={"Cheapest"}
				type={"button"}
				name={SortOptions.cheapest}
				handleClick={btnClickHandler}
				theme={"light"}
				active={selectedFilter === SortOptions.cheapest}
			/>
			<Button
				label={"Fastest"}
				type={"submit"}
				name={SortOptions.fastest}
				handleClick={btnClickHandler}
				theme={"light"}
				active={selectedFilter === SortOptions.fastest}
			/>
		</div>
	);
};
export default SortOpts;
