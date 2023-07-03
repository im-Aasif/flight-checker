import styles from "./Spinner.module.scss";
function Spinner() {
	return (
		<div className={styles["overlay"]}>
			<div data-testid={"spinner"} className={styles["overlay__spinner"]}></div>
			<div>Loading...</div>
		</div>
	);
}

export default Spinner;
