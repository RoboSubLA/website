import React from 'react';
import'./VideoSection.css';
import Typical from "react-typical";

const VideoSection = ({src, heading, children}) => {
	return (
		<div className="video-container">
			<img alt="decoration" className="splashpage-img" src={src} />
			<h1 className="title">{heading}</h1>
			<p id="under-p">
				{" "}
				<Typical
					steps={["Design | Code | Build | Test | Compete", 5000, "", 2000]}
					loop={Infinity}
					wrapper="b"
					id="under-p"
				/>
			</p>
			{children}
		</div>
	);
}
export default VideoSection;
