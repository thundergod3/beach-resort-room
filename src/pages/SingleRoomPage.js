import React, { useEffect, useState, useContext } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { RoomContext } from "../contexts/RoomContextProvider";
import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner";
import { StyledHero } from "../components/hero/StyledHero";
import DetailRoom from "../components/detailRoom/DetailRoom";

const SingleRoomPage = (props) => {
	const { getRoomItem } = useContext(RoomContext);
	const [slug, setSlug] = useState(props.match.params.slug);

	const room = getRoomItem(slug);
	if (!room) {
		return (
			<div className="error">
				<h3>no such room could be found...</h3>
				<Link to="/rooms" className="btn-primary">
					back to rooms{" "}
				</Link>
			</div>
		);
	}

	const { name, images } = room;
	const mainImg = images.slice(0, 1);
	console.log(mainImg)

	return (
		<>
			<StyledHero img={mainImg || defaultBcg}>
				<Banner title={`${name} room`}>
					<Link to="/rooms" className="btn-primary">
						back to rooms
					</Link>
				</Banner>
			</StyledHero>
			<DetailRoom room={room} />
		</>
	);
};

export default SingleRoomPage;
