import styles from "./NavBar.module.scss";
// import logo from "./assets/comp-logo.svg";

function NavBar() {
	return (
		<header className={styles.header}>
			<div className={styles["header__content"]}>
				<img
					src={"./assets/comp-logo.svg"}
					className={styles["header__content__logo"]}
					alt="main logo"
				/>
				<h3 className={styles["header__content__title"]}>Flight Checker</h3>
			</div>
		</header>
	);
}

export default NavBar;
