//Components
import DicePlane from "./Components/Dice/DicePlane"
import Button from "./Components/UI/Button"
import classes from './App.module.scss';

function App() {
  return (
		<main className={classes.main}>
			<h1 className={classes.header}>Tenzies</h1>
			<p className={classes.description}>
				Roll until all dice are the same. Click each die to freeze it at its
				current value between rolls.
			</p>
			<DicePlane />
			<Button onClick={() => console.log("roll")}>Roll</Button>
		</main>

	)
}

export default App;
