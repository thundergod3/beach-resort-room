import React from "react";

const Banner = (props) => {
	const { children, title, subTitle } = props;

	return (
		<div className="banner">
			<h1>{title}</h1>
			<div></div>
			<p>{subTitle}</p>
			{children}
		</div>
	);
};

export default Banner;
