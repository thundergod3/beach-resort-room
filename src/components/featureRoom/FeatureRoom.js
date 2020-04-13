import React, { useContext } from "react";
import { RoomContext } from "../../contexts/RoomContextProvider";
import Loading from "../loading/Loading";
import RoomItem from "../roomItem/RoomItem";
import Title from "../title/Title";

const FeatureRoom = () => {
	let { featureRooms, loading } = useContext(RoomContext);

	featureRooms = featureRooms.map((room) => <RoomItem key={room.id} room={room} />);

	return (
		<section className="featured-rooms">
			<Title title="featured rooms" />
			<div className="featured-rooms-center">{loading ? <Loading /> : featureRooms}</div>
		</section>
	);
};

export default FeatureRoom;
