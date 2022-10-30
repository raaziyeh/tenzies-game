import { useState } from "react"
import Die from "./Die"
import classes from "./DicePlane.module.scss"

const DUMMY_DICE = [
	{
		id: 1,
		number: 2,
		isHeld: false,
	},
	{
		id: 2,
		number: 2,
		isHeld: false,
	},
	{
		id: 3,
		number: 3,
		isHeld: false,
	},
	{
		id: 4,
		number: 5,
		isHeld: false,
	},
	{
		id: 5,
		number: 1,
		isHeld: false,
	},
	{
		id: 6,
		number: 4,
		isHeld: false,
	},
	{
		id: 7,
		number: 6,
		isHeld: false,
	},
	{
		id: 8,
		number: 6,
		isHeld: true,
	},
	{
		id: 9,
		number: 5,
		isHeld: false,
	},
	{
		id: 10,
		number: 4,
		isHeld: false,
	},
]
function DicePlane() {
	return (
		<div className={classes.wrapper}>
			<section className={classes.plane}>
				{DUMMY_DICE.map((die) => {
					return (
						<Die {...die} onClick={() => console.log("die id:" + die.id)} />
					)
				})}
			</section>
		</div>
	)
}

export default DicePlane;