import React from "react";
import Sky from "react-sky";

const Events = () => {
  return (
    <>

	  <div align="center">
	  	  <iframe src="https://calendar.google.com/calendar/embed?src=eucj1o621p6tl8qa3336t00gho%40group.calendar.google.com&ctz=America%2FLos_Angeles" style={{ border: 0 }} width="800" height="600" frameborder="0" scrolling="no">
		  </iframe>
	  </div>
      {/* Linking to Teams works (accessing requires user to be part of the teams org) */}
      {/* <a href="https://teams.microsoft.com/l/file/365CF37B-7CA8-4963-ADBD-9C7372BF0DD5?tenantId=ce8a2002-448f-4f58-82b1-d86f73e3afdd&fileType=pptx&objectUrl=https%3A%2F%2Fcsula.sharepoint.com%2Fsites%2FRobosubGroup%2FShared%20Documents%2FGeneral%2FPresentations%2FRobosub%20Presentation.pptx&baseUrl=https%3A%2F%2Fcsula.sharepoint.com%2Fsites%2FRobosubGroup&serviceName=teams&threadId=19:34baf0b0d1104620a13f4a6d18b366cc@thread.skype&groupId=60cfbf4a-d224-4811-8947-bf2853d916c3">
        link
      </a> */}
    </>
  );
};

export default Events;
