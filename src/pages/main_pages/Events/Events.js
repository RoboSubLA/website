import React from "react";
import Sky from "react-sky";
import "./Events.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Typical from "react-typical";

const Events = () => {
  return (
	<div className="event">
	<div className="bg" align="center"></div>
	<div className="bg bg2" align="center"></div>
	<div className="bg bg3" align="center"></div>
		<div className="content" align="center">
			<div className="centerCalendar">
				<iframe src="https://calendar.google.com/calendar/embed?src=eucj1o621p6tl8qa3336t00gho%40group.calendar.google.com&ctz=America%2FLos_Angeles" style={{ border: 0 }} width="800" height="600" frameborder="0" scrolling="no">
					</iframe>
			</div>
		</div>
	</div>
  );
};

export default Events;
