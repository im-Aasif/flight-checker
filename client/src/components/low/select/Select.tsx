import React from "react";
import styles from "./Select.module.scss";
interface SelectProps {
	key: string;
	name: string;
	label: string;
	value: string;
	data: any[];
	onChangeHandler: (key: string, value: string) => any;
}
const Select: React.FC<SelectProps> = (props: SelectProps) => {
	return (
		<div className={styles["select-container"]}>
			<label aria-label={props.label}>
				<span>{props.label}</span>
			</label>
			<select
				data-testid={`${props.name}-select-field`}
				className={styles["select-container__select"]}
				aria-label={props.label}
				required
				name={props.name}
				value={props.value}
				onChange={(e) => {
					props.onChangeHandler(props.name, e.target.value);
				}}
			>
				{props?.data?.length > 0 ? (
					props.data.map((d) => (
						<option key={d.key} value={d.key}>
							{d.value}
						</option>
					))
				) : (
					<></>
				)}
			</select>
		</div>
	);
};
export default Select;
