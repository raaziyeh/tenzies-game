import Die from "./Die"
import classes from "./DicePlane.module.scss"

function DicePlane(props) {
	return (
		<div className={classes.wrapper}>
			<section className={classes.plane}>
				{props.dice.map((die) => {
					return (
						<Die {...die} key={die.id} onClick={() => props.toggleDieHold(die.id)} />
					)
				})}
			</section>
		</div>
	)
}

export default DicePlane;