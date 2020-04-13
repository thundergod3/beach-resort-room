import React, { useState } from "react";
import Title from "../title/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
	const [services, setServices] = useState([
		{
			icon: <FaCocktail />,
			title: "free cocktails",
			info:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		},
		{
			icon: <FaHiking />,
			title: "endless hiking",
			info:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		},
		{
			icon: <FaShuttleVan />,
			title: "free shuttle",
			info:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		},
		{
			icon: <FaBeer />,
			title: "strongest beer",
			info:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		},
	]);
	return (
		<section className="services">
			<Title title="services" />
			<div className="services-center">
				{services.map((service, index) => (
					<article key={index} className="service">
						<span>{service.icon}</span>
						<h6>{service.title}</h6>
						<p>{service.info}</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default Services;
