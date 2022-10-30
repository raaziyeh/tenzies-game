import classes from "./Die.module.scss"

function Die(props) {
    let classNames = classes.dice
	if (props.isHeld) {
        classNames = classes.dice + " " + classes.held
    }

	return (
		<div className={classNames} onClick={props.onClick}>
			{props.number}
		</div>
	)
}

export default Die;