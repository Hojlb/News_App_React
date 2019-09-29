import React from 'react';
import { IconContext } from 'react-icons';
import { FaEye } from 'react-icons/fa';

const  ViewersCounter = (props) =>
	<React.Fragment>
		<div className="views complementary">
			<IconContext.Provider value={{ color: "#a5a5a5", className: "global-class-name", size: "1.5em" }}>
					<FaEye />
			</IconContext.Provider>
			<span>{props.viewers}</span>
		</div>
	</React.Fragment>;

export default ViewersCounter;