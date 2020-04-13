import React, { useContext } from "react";
import { RoomContext } from "../../contexts/RoomContextProvider";
import Title from "../title/Title";

const RoomFilter = (props) => {
	const { rooms } = props;
	const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = useContext(
		RoomContext
	);

	const getUnique = (rooms, value) => {
		return [...new Set(rooms.map((room) => room[value]))];
	};

	// get unique types
	let types = getUnique(rooms, "type");
	// add all
	types = ["all", ...types];
	// map to jsx
	types = types.map((type, index) => (
		<option value={type} key={index}>
			{type}
		</option>
	));

	let peopleCapacity = getUnique(rooms, "capacity");
	peopleCapacity = peopleCapacity.map((people, index) => (
		<option value={people} key={index}>
			{people}
		</option>
	));

	return (
		<section className="filter-container">
			<Title title="search rooms" />
			<form className="filter-form">
				{/* select type */}
				<div className="form-group">
					<label htmlFor="type">room type</label>
					<select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
						{types}
					</select>
				</div>
				{/* end type */}
				{/* guests */}
				<div className="form-group">
					<label htmlFor="capacity">Guest</label>
					<select
						name="capacity"
						id="capacity"
						value={capacity}
						className="form-control"
						onChange={handleChange}>
						{peopleCapacity}
					</select>
				</div>
				{/* end guests */}
				{/* room price */}
				<div className="form-group">
					<label htmlFor="price">room price ${price}</label>
					<input
						type="range"
						name="price"
						min={minPrice}
						max={maxPrice}
						id="price"
						value={price}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				{/* end of room price */}
				{/* size */}
				<div className="form-group">
					<label htmlFor="size">room size</label>
					<div className="size-inputs">
						<input
							type="number"
							name="minSize"
							id="size"
							value={minSize}
							onChange={handleChange}
							className="size-input"
						/>
						<input
							type="number"
							name="maxSize"
							id="size"
							value={maxSize}
							onChange={handleChange}
							className="size-input"
						/>
					</div>
				</div>
				{/* end of size */}
				{/* extras */}
				<div className="form-group">
					<div className="single-extras">
						<input
							type="checkbox"
							name="breakfast"
							id="breakfast"
							checked={breakfast}
							onChange={handleChange}
						/>
						<label htmlFor="breakfast">breakfast</label>
						<input
							type="checkbox"
							name="pets"
							id="pets"
							checked={pets}
							onChange={handleChange}
						/>
						<label htmlFor="pets">pets</label>
					</div>
				</div>
				{/* end of extras */}
			</form>
		</section>
	);
};

export default RoomFilter;
