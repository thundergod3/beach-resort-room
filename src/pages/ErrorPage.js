import React from "react";
import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<Hero>
			<Banner title="404" subTitle="page not found">
				<Link to="/" className="btn-primary">
					return home
				</Link>
			</Banner>
		</Hero>
	);
};

export default ErrorPage;
