import React from "react";

const Title = (props) => {
  const { title } = props;
  
	return (
		<div className="section-title">
			<h4>{title}</h4>
			<div></div>
		</div>
	);
};

export default Title;
