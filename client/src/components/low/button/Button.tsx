import React from "react";
import styles from "./Button.module.scss";

interface BtnProps {
	label: string;
	name: string;
	handleClick?: (key: string) => any;
	type: "button" | "submit" | "reset" | undefined;
	theme?: "light" | "dark" | string;
	active?: boolean;
}
const Button: React.FC<BtnProps> = (props: BtnProps) => {
	const btnTheme = props.theme ?? "dark";
	const btnStyle =
		btnTheme === "dark"
			? [styles["button"], styles["button--dark"], styles["button--padding-16"]]
			: [
					styles["button"],
					styles["button--light"],
					styles["button--padding-8"],
			  ];
	if (props.active) {
		btnStyle.push(styles["button--active"]);
	}
	function clickHandler() {
		if (props.handleClick) {
			props.handleClick(props.name);
		}
	}
	return (
		<>
			<button
				data-testid={`btn-${props.name}`}
				onClick={clickHandler}
				className={btnStyle.join(" ")}
				key={props.name}
				type={props.type}
				aria-label={props.label}
			>
				{props.label}
			</button>
		</>
	);
};
export default Button;
