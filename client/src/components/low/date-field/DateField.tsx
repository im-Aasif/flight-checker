import React from "react";
import styles from "./DateField.module.scss";
import { formatDate } from "../../../utils/util";

interface DateProps {
	label: string;
	onChangeHandler: (identifier: string, value: string) => any;
	name: string;
	value: string;
}
const DateField: React.FC<DateProps> = (props: DateProps) => {
	const minDate = formatDate(new Date());
	const { name, value, label } = props;
	return (
		<div className={styles["date-container"]}>
			<label className={styles["date-container__label"]} aria-label={label}>
				<span>{label}</span>
			</label>

			<input
				data-testid={`${name}-date-field`}
				type="date"
				className={styles["date-container__input"]}
				aria-label={label}
				required
				min={minDate}
				name={name}
				defaultValue={value}
				onChange={(e) => {
					props.onChangeHandler(name, e.target.value);
				}}
			/>
		</div>
	);
};

export default DateField;
