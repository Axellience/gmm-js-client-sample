/**
	This is a sample pure JS client for the GenMyModel public API
*/

var GMM_API_URL = "https://api.genmymodel.com/";

/**
 * Client constructor
 * @constructor
 */
function GMMClientSample () {
}


/************************************
/*
/*			Requests
/*
************************************/

/**
 * Send a generic request to the API
 * @param {String} resource Path to call on the API (See GenMyModel API reference)
 * @param {Function} callback Callback to call when results are available
 * @param {String} [accessTokenHeader] Access token to include in header
 * @param {String} [method='GET'] HTTP method (GET, POST...)
 * @param {Object} [params=null] Parameters to send to the API
 */
GMMClientSample.prototype.requestAPI = function (resource, callback, accessTokenHeader, method, params) {
	// Default method is GET
	if (!method) {method = "GET";}
	// If params, turn them to string
	if (params) {params = JSON.stringify(params)}

	// Create XHR
	var xhr = new XMLHttpRequest();

	// Callback management
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				// Everything went OK
				callback(null, JSON.parse(xhr.responseText));
			} else {
				// Something went wrong
				callback({status: xhr.status, error: JSON.parse(xhr.responseText)}, null);
			}
		}
	};

	// Open XHR
	xhr.open(method, GMM_API_URL + resource, true);

	// Set headers for request
	xhr.setRequestHeader("Content-Type", "application/json");
	if (accessTokenHeader) {
		xhr.setRequestHeader("Authorization", accessTokenHeader);
	}

	// And send it
	xhr.send(params);
};