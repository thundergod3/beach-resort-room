import React from "react";
import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/roomContainer/RoomContainer";

const RoomPage = () => {
	return (
		<>
			<Hero hero="roomsHero">
				<Banner title="our rooms">
					<Link to="/" className="btn-primary">
						return home
					</Link>
				</Banner>
			</Hero>
			<RoomContainer />
		</>
	);
};

export default RoomPage;
