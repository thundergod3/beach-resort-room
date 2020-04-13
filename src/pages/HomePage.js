import React from "react";
import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner";
import { Link } from "react-router-dom";
import Services from "../components/services/Services";
import FeatureRoom from "../components/featureRoom/FeatureRoom";

const HomePage = () => {
	return (
		<>
			<Hero>
				<Banner title="luxurios rooms" subTitle="deluxe rooms starting at $299">
					<Link to="/rooms" className="btn-primary">
						our rooms
					</Link>
				</Banner>
			</Hero>
			<Services />
			<FeatureRoom />
		</>
	);
};

export default HomePage;
