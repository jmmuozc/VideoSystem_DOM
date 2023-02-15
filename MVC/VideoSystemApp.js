"use strict";

import videoSystemController from "./VideoSystemController.js";
import videoSystemView from "./VideoSystemView.js";
import videoSystem from "./VideoSystemModel.js";

let VideoSystemApp;

(function () {
	VideoSystemApp = new videoSystemController(videoSystem.getInstance("VideoSystem"),new videoSystemView());
})();

export default VideoSystemApp;