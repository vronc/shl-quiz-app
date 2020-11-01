const axios = require("axios");
const qs = require("querystring");

const baseUrl = "https://openapi.shl.se",
  auth = "/oauth2/token";

const CONNECTION_REQ_FORM = {
  client_id: process.env.SHL_API_ID,
  client_secret: process.env.SHL_API_SECRET,
  grant_type: "client_credentials",
};

const HEADERS = {
  "Content-Type": "application/x-www-form-urlencoded",
};

class ShlConnection {
  constructor() {
    this.accessToken = undefined;
    this.expires = new Date();
  }

  connect() {
    axios
      .post(baseUrl + auth, qs.stringify(CONNECTION_REQ_FORM), {
        headers: HEADERS,
      })
      .then((body) => {
        this.accessToken = body.data.access_token;
        this.expires.setSeconds(
          this.expires.getSeconds() + body.data.expires_in
        );
      })
      .catch((e) => console.log(e));
  }

  isConnected = function () {
    return this.accessToken && new Date() <= this.expires;
  };
}

module.exports = ShlConnection;
