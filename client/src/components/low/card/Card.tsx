import React, { useContext } from "react";
import style from "./Card.module.scss";
import { AppContext } from "../../../context/AppContext";
import { calcPrice } from "../../../utils/util";
interface CardProps {
	data: any;
}
const Card: React.FC<CardProps> = (props: CardProps) => {
	const context = useContext(AppContext);
	const { data } = props;
	if (!data) {
		return <></>;
	}
	const { cities } = context.state;
	const id = data.id;
	const {
		destination,
		origin,
		price,
		arrivalTime,
		departureTime,
		totalTravelTime,
		availableSeats,
	} = data;
	const destinationCity: any = cities.find((city) => city.key === destination);
	const originCity: any = cities.find((city) => city.key === origin);
	const airplaneCode = data.airline?.code?.toLowerCase() ?? "generic";

	return (
		<section key={id} className={style["card"]}>
			<div className={style["card__content"]}>
				<img
					className={style["card__content__icon"]}
					alt={"airplane company logo"}
					src={`./assets/${airplaneCode}.svg`}
				/>
				<div className={style["card__content__details"]}>
					<div className={style["card__content__details__item"]}>
						<div className={style["card__content__details__item__col-section"]}>
							<span className={style["card__content__details__item--light"]}>
								Departure
							</span>
							<span
								data-testid={"origination"}
								className={style["card__content__details__item--large"]}
							>
								{originCity?.value}&nbsp;({origin})
							</span>
							<span className={style["card__content__details__item--regular"]}>
								{departureTime}
							</span>
						</div>
						<img
							className={style["card__content__details__arrow-icon"]}
							src={"./assets/right-arrow.svg"}
							alt={"right arrow"}
						/>
						<div className={style["card__content__details__item__col-section"]}>
							<span className={style["card__content__details__item--light"]}>
								Arrival
							</span>
							<span
								data-testid={"destination"}
								className={style["card__content__details__item--large"]}
							>
								{destinationCity?.value}&nbsp;({destination})
							</span>
							<span className={style["card__content__details__item--regular"]}>
								{arrivalTime}
							</span>
						</div>
					</div>
					<div className={style["card__content__details__item"]}>
						<p
							className={[
								style["card__content__details__item--light"],
								style["card__content__details__item--no-margin"],
							].join(" ")}
						>
							Seats available:&nbsp;
							<span
								className={[
									style["card__content__details__item--large"],
									style["card__content__details__item--weight"],
								].join(" ")}
							>
								{availableSeats}
							</span>
						</p>
					</div>
				</div>
				<div className={style["card__content__price"]}>
					<span className={style["card__content__price--light"]}>
						Total travel time:
					</span>
					<span className={style["card__content__price--large-weight"]}>
						{`${totalTravelTime}h`}
					</span>
				</div>
				{price?.amount ? (
					<div className={style["card__content__price"]}>
						<span className={style["card__content__price--light"]}>
							Total price:
						</span>
						<span className={style["card__content__price--large-weight"]}>
							{calcPrice(price)}
						</span>
					</div>
				) : (
					<></>
				)}
				{/* <img
					className={style["card__content__down-arrow"]}
					src={"./assets/down-arrow.svg"}
				/> */}
			</div>
		</section>
	);
};
export default Card;
