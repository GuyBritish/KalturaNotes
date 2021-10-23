import React, { useContext } from "react";

import NoteContext from "../store/noteContext";

import classes from "./Header.module.css";

const Header = (props) => {
	const noteCtx = useContext(NoteContext);

	const loadVideoHandler = () => {
		let id = document.getElementById("header-search").value;
		noteCtx.loadvid(id);
		props.onSubmit(id.substring(id.length - 10));
	};
	return (
		<React.Fragment>
			<ul className={classes.nav}>
				<li>
					<form>
						<input type="text" id="header-search" placeholder="Lecture Link" name="s" />
					</form>
				</li>
				<li>
					<button type="submit" onClick={loadVideoHandler}>
						Submit
					</button>
				</li>
				<li>
					<a href="#">About</a>
				</li>
			</ul>
		</React.Fragment>
	);
};

export default Header;
