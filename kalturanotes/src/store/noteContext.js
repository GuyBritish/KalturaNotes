import React from "react";

const noteContext = React.createContext({
	video: "1_8ezksef0",
	notes: [],
	total: 0,
	addNotes: (note) => {},
	removeNotes: (id) => {},
});

export default noteContext;
