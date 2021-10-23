import React from "react";

const NoteContext = React.createContext({
	video: "1_8ezksef0",
	notes: [],
	addNotes: (note) => {},
	removeNotes: (id) => {},
	loadVid: (id) => {},
});

export default NoteContext;
