import React, { createContext, useState, useEffect } from "react";
import items from "../data";
import Client from "../constants/ClientContentful";

const RoomContext = createContext();

const RoomContextProvider = (props) => {
	const [rooms, setRooms] = useState([]);
	const [sortedRooms, setSortedRooms] = useState([]);
	const [featureRooms, setFeatureRooms] = useState([]);
	const [loading, setLoading] = useState(true);
	const [type, setType] = useState("all");
	const [capacity, setCapacity] = useState(1);
	const [price, setPrice] = useState(0);
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(0);
	const [size, setSize] = useState(0);
	const [minSize, setMinSize] = useState(0);
	const [maxSize, setMaxSize] = useState(0);
	const [breakfast, setBreakfast] = useState(false);
	const [pets, setPets] = useState(false);

	const getData = async () => {
		try {
			let response = await Client.getEntries({ content_type: "beachResortRoom", order: "fields.price" });
			let rooms = formatData(response.items);
			let featureRooms = rooms.filter((room) => room.featured === true);
			let maxPrice = Math.max(...rooms.map((room) => room.price));
			let maxSize = Math.max(...rooms.map((room) => room.size));

			setFeatureRooms(featureRooms);
			setRooms(rooms);
			setSortedRooms(rooms);
			setLoading(false);
			setPrice(maxPrice);
			setMaxPrice(maxPrice);
			setMaxSize(maxSize);
		} catch (error) {
			console.log(error);
		}
	};

	const formatData = (items) => {
		let tempItems = items.map((item) => {
			let id = item.sys.id;
			let images = item.fields.images.map((image) => image.fields.file.url);
			let room = {
				...item.fields,
				id,
				images,
			};
			return room;
		});
		return tempItems;
	};

	const getRoomItem = (slug) => {
		let tempRooms = [...rooms];
		const roomFind = tempRooms.find((room) => room.slug === slug);
		return roomFind;
	};

	const handleChange = (event) => {
		const target = event.target;
		const name = target.name;
		const value = target.type === "checkbox" ? target.checked : target.value;

		switch (name) {
			case "type": {
				return setType(value);
			}
			case "capacity": {
				return setCapacity(value);
			}
			case "price": {
				return setPrice(value);
			}
			case "minSize": {
				if (value < 0) {
					return setMinSize(0);
				}
				return setMinSize(value);
			}
			case "maxSize": {
				if (value > Math.max(...rooms.map((room) => room.size))) {
					console.log("hello");
					return setMaxSize(Math.max(...rooms.map((room) => room.size)));
				}
				return setMaxSize(value);
			}
			case "breakfast": {
				console.log(value);
				return setBreakfast(value);
			}
			case "pets": {
				return setPets(value);
			}
		}
	};

	const filterRooms = () => {
		// all the room
		let tempRooms = [...rooms];
		let tempCapacity = capacity;
		let tempPrice = price;
		let tempSize = size;
		let tempMinSize = minSize;
		let tempMaxSize = maxPrice;
		let tempBreakfast = breakfast;
		let tempPets = pets;

		// transform value
		tempCapacity = parseInt(capacity);
		tempPrice = parseInt(price);

		// filter by type
		if (type !== "all") {
			tempRooms = tempRooms.filter((room) => room.type === type);
		}

		// filter by capacity
		if (tempCapacity !== 1) {
			tempRooms = tempRooms.filter((room) => room.capacity >= tempCapacity);
		}

		//filter by price
		if (tempPrice < Math.max(...rooms.map((room) => room.price))) {
			tempRooms = tempRooms.filter((room) => room.price < tempPrice);
		}

		// filter by size
		if (tempSize != 0) {
			tempRooms = tempRooms.filter((room) => room.size >= tempMinSize && room.size <= tempMaxSize);
		}

		// filter by breakfast
		if (tempBreakfast) {
			tempRooms = tempRooms.filter((room) => room.breakfast === true);
		}

		//filter by pets
		if (tempPets) {
			tempRooms = tempRooms.filter((room) => room.pets === true);
		}

		setSortedRooms(tempRooms);
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		if (rooms.length !== 0) filterRooms();
	}, [type, capacity, price, minSize, maxPrice, breakfast, pets]);

	return (
		<RoomContext.Provider
			value={{
				rooms,
				sortedRooms,
				featureRooms,
				loading,
				getRoomItem,
				handleChange,
				type,
				capacity,
				price,
				minPrice,
				maxPrice,
				size,
				minSize,
				maxSize,
				breakfast,
				pets,
			}}>
			{props.children}
		</RoomContext.Provider>
	);
};

export { RoomContextProvider, RoomContext };
