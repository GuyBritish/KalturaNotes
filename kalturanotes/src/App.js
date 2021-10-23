import React, { useState, useContext } from "react";

import NoteContext from "./store/noteContext";
import NoteProvider from "./store/noteProvider";

import VideoPlayer from "./Video/VideoPlayer";
import Header from "./Layout/Header";

function App() {
	const noteCtx = useContext(NoteContext);
	const [videoState, setVideoState] = useState();

	const onSubmitHandler = (id) => {
		setVideoState(id);
	};

	return (
		<NoteProvider>
			<Header onSubmit={onSubmitHandler} />
			<VideoPlayer vidurl={videoState} />
		</NoteProvider>
	);
}

export default App;
