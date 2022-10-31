// React
import { useState, useEffect } from "react"
// Packages
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
//Components
import DicePlane from "./Components/Dice/DicePlane"
import Button from "./Components/UI/Button"
import classes from "./App.module.scss"

function rollDie() {
	return Math.floor(Math.random() * 6 + 1)
}

function initializeDice() {
	let dice = []
	for (let i = 0; i < 10; i++) {
		dice.push({
			id: nanoid(),
			number: rollDie(),
			isHeld: false,
		})
	}
	return dice
}

function App() {
	const [hasWon, setHasWon] = useState(false)
	const [dice, setDice] = useState(initializeDice)

	const toggleDieHold = (id) => {
		setDice(dice => {
			return dice.map(die => {
				if (die.id === id) {
					return {
						...die,
						isHeld: !die.isHeld
					}
				}
				return die				
			})
		})
	}

	const rollDice = () => {
		setDice(dice => {
			return dice.map(die => {
				if (die.isHeld) {
					return die
				}
				return {
					...die,
					number: rollDie()
				}
			})
		})
	}

	const resetGame = () => {
		setDice(initializeDice())
		setHasWon(false)
	}

	useEffect(() => {
		const isAllDiceIsHeld = dice.every(die => die.isHeld)
		const isAllSameValue = dice.every(die => die.number === dice[0].number)
		if (isAllDiceIsHeld && isAllSameValue) {
			setHasWon(true)
		}
	}, [dice])


	return (
		<main className={classes.main}>
			{hasWon && <Confetti />}
			<h1 className={classes.header}>Tenzies</h1>
			<p className={classes.description}>
				Roll until all dice are the same. Click each die to freeze it at its
				current value between rolls.
			</p>
			{hasWon && <p className={classes["wining-message"]}> Congratulations! You Won! 🎉</p>}
			<DicePlane dice={dice} toggleDieHold={toggleDieHold} />
			{!hasWon && <Button onClick={rollDice}>Roll</Button>}
			{hasWon && <Button onClick={resetGame}> New Game</Button>}
		</main>
	)
}

export default App
