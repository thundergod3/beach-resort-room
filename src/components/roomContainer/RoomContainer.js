import React, { useContext } from "react";
import RoomFilter from "../roomFilter/RoomFilter";
import RoomList from "../roomList/RoomList";
import { RoomContext } from "../../contexts/RoomContextProvider";
import Loading from "../loading/Loading"

const RoomContainer = () => {
	const { loading, sortedRooms, rooms } = useContext(RoomContext);
  if(loading) {
    return <Loading/>
  }
  
	return (
		<div>
			<RoomFilter rooms={rooms}/>
			<RoomList sortedRooms={sortedRooms}/>
		</div>
	);
};

export default RoomContainer;
