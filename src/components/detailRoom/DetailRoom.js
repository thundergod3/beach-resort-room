import React from "react";

const DetailRoom = (props) => {
	const { room } = props;
	const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
	const defaultImg = images.slice(1, images.length);

	return (
		<>
			<section className="single-room">
				<div className="single-room-images">
					{defaultImg.map((image, index) => (
						<img key={index} src={image} alt={name} />
					))}
				</div>
				<div className="single-room-info">
					<article className="desc">
						<h3>details</h3>
						<p>{description}</p>
					</article>k
					<article className="info">
						<h3>info</h3>
						<p>price: ${price}</p>
						<p>size: {size} SQFT</p>
						<p>max capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}</p>
						<p>{pets ? "pets allowed" : "no pets allowed"}</p>
						<p>{breakfast && "free breakfast included"}</p>
					</article>
				</div>
			</section>
			<section className="room-extras">
				<h6>extras</h6>
				<ul className="extras">
					{extras.map((extra, index) => (
						<li key={index}>- {extra}</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default DetailRoom;
