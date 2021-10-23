import React, { useReducer } from "react";

import NoteContext from "./noteContext";

const NoteDefaultState = {
	video: "1_8ezksef0",
	notes: [],
};

const noteReducer = (state, action) => {
	if (action.type === "ADD") {
		const noteEntryIndex = state.notes.findIndex((note) => {
			return note.id === action.note.id;
		});

		const noteEntry = state.notes[noteEntryIndex];
		let newNote;

		if (noteEntry) {
			const newNoteEntry = {
				...noteEntry,
				time: action.note.time,
				text: action.note.text,
			};
			newNote = [...state.notes];
			newNote[noteEntryIndex] = newNoteEntry;
		} else {
			newNote = state.notes.concat(action.note);
		}

		return {
			notes: newNote,
		};
	}

	if (action.type === "RMV") {
		let newNote = state.notes.filter((note) => {
			return action.id !== note.id;
		});
		return {
			notes: newNote,
		};
	}

	if (action.type === "LDV") {
		let newURL = `https://cdnapisec.kaltura.com/p/1660902/sp/166090200/embedIframeJs/uiconf_id/44363851/partner_id/1660902?iframeembed=true&playerId=kaltura_player&entry_id=${action.id}&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en_US&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[mediaProxy.mediaPlayFrom]=960&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_5kpj17v6`;
		return {
			video: action.id,
		};
	}
};

const CartProvider = (props) => {
	const [noteState, dispatchNoteAction] = useReducer(noteReducer, NoteDefaultState);

	const addToNoteHandler = (note) => {
		dispatchNoteAction({ type: "ADD", note: note });
	};

	const removeFromNoteHandler = (id) => {
		dispatchNoteAction({ type: "RMV", id: id });
	};

	const loadNewVidHandler = (id) => {
		dispatchNoteAction({ type: "LDV", id: id });
	};

	const noteContext = {
		notes: noteState.notes,
		total: noteState.total,
		addnote: addToNoteHandler,
		removenote: removeFromNoteHandler,
		loadvid: loadNewVidHandler,
	};

	return <NoteContext.Provider value={noteContext}>{props.children}</NoteContext.Provider>;
};

export default CartProvider;
