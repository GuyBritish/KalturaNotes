import React from "react";

import classes from "./VideoPlayer.module.css";

const VideoPlayer = (props) => {
	return (
		<React.Fragment>
			<h1> This is our video</h1>
			<iframe
				id="kaltura_player"
				src="https://cdnapisec.kaltura.com/p/1660902/sp/166090200/embedIframeJs/uiconf_id/44363851/partner_id/1660902?iframeembed=true&playerId=kaltura_player&entry_id=1_8ezksef0&flashvars[streamerType]=auto&amp;
			flashvars[localizationCode]=en_US&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;
			flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;
			flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;
			flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[mediaProxy.mediaPlayFrom]=960&amp;
			flashvars[Kaltura.addCrossoriginToIframe]=true&amp;
			&wid=1_5kpj17v6"
				width="500"
				height="569"
				allowfullscreen
				webkitallowfullscreen
				mozAllowFullScreen
				allow="autoplay *; fullscreen *; encrypted-media *"
				frameborder="0"
				title="Kaltura Player"
			></iframe>
		</React.Fragment>
	);
};

export default VideoPlayer;
