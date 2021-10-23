import React from "react";

import classes from "./Header.module.css";

const Header = (props) => {
	return (
		<React.Fragment>

			
	        
			<ul className={classes.nav}>
				<li>
				<input
	            	type="text"
	            	id="header-search"
	            	placeholder="Lecture Link"
	            	name="s" 
	        	/>
				</li>
                <li><a href="#">Submit</a></li>
                <li><a href="#">About</a></li>
             </ul>

            
    

		</React.Fragment>
	);
};

export default Header;
