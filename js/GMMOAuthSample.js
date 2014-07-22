/**
	This is a sample OAuth2 mechanism for the GenMyModel API
	Feel free to make your own
 */

var GMM_API_URL = "https://api.genmymodel.com/";

/**
 * Client constructor
 * @constructor
 */
function GMMOAuthSample () {
	// When starting, try to find the access token in the URL hash
	var hashVars = this._getHashVars();
	var accessToken = hashVars["access_token"] || hashVars["/access_token"];
	var accessTokenType = hashVars["token_type"];
	var expires_in = hashVars["expires_in"];

	// If we got OAuth token in URL hash, set it
	if (accessToken && accessTokenType && expires_in) {
		var now = new Date().getTime();
		var msToAdd = (parseInt(expires_in) - 100) * 1000;

		this.accessToken = {
			token: accessToken,
			type: accessTokenType,
			expiration: now + msToAdd
		};
	}
}

/**
 * Ensure that the user is logged in
 * Will redirect the browser to GenMyModel API login if we don't have a token
 * @return {boolean} true if logged in, false otherwise
 */
GMMOAuthSample.prototype.ensureLoggedIn = function () {
	if (!this.accessToken) {
		// If no access token, request it
		this.refreshToken();
		return false;
	}
	return true;
};

/**
 * Return access token value for header
 * @returns {string}
 */
GMMOAuthSample.prototype.getAccessTokenHeader = function () {
	if (!this.hasAccessToken()) {return "";}

	return this.accessToken.type + " " + this.accessToken.token;
};

/**
 * Refresh token
 */
GMMOAuthSample.prototype.refreshToken = function () {
	// If no access token, request it
	window.location = GMM_API_URL + "oauth/authorize?response_type=token&client_id=gmm&redirect_uri=" + window.location;
};

/**
 * Check if we have an access token
 * @return {boolean} true if has access token, false otherwise
 */
GMMOAuthSample.prototype.hasAccessToken = function () {
	return !!this.accessToken;
};


/**
 * Return url hash variables
 * @returns {{}} Map of hash variables
 */
GMMOAuthSample.prototype._getHashVars = function() {
	var tmpLoc = window.location.href;

	var hashPos = tmpLoc.indexOf("#");
	if (hashPos == -1) {
		return {};
	}

	tmpLoc = tmpLoc.slice(hashPos);

	var vars = {};
	tmpLoc.replace(/[#&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
};