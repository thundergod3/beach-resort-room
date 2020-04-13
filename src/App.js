import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import RoomPage from "./pages/RoomPage";
import SingleRoomPage from "./pages/SingleRoomPage";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

const App = () => {
	return (
		<>
			<NavBar />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/rooms/" component={RoomPage} />
				<Route exact path="/rooms/:slug" component={SingleRoomPage} />
				<Route component={ErrorPage} />
			</Switch>
		</>
	);
};

export default App;
