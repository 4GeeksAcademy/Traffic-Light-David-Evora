import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Lights from "./Lights";

//create your first component
const Home = () => {
	return (
		<div id="root">
			<Lights/>
		</div>
	);
};

export default Home;