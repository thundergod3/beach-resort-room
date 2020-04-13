import React from "react";
import RoomItem from "../roomItem/RoomItem";

const RoomList = (props) => {
	const { sortedRooms } = props;
	console.log(sortedRooms)
	if (sortedRooms.length === 0) {
		return (
			<div className="empty-search">
				<h3>unfortunately no rooms matched your search parameters</h3>
			</div>
		);
	}

	return (
		<section className="roomslist">
			<div className="roomslist-center">
				{sortedRooms.map((room) => (
					<RoomItem key={room.id} room={room} />
				))}
			</div>
		</section>
	);
};

export default RoomList;
