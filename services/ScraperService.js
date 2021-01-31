const cheerio = require("cheerio");
const axios = require("axios");

const getPlayerProfileImageUrl = async (playerProfileUrl) => {
  return axios
    .get(playerProfileUrl)
    .then((response) => {
      if (response.status === 200) {
        const html = response.data;
        const $ = cheerio.load(html);
        return $("img[src^='https://cdn.ramses.nu']")[0].attribs.src;
      }
    })
    .catch((e) => {
      console.log(
        "There was a problem fetching player image from url: " +
          e.config.url +
          ". Retrying fetch..."
      );
      return getPlayerProfileImageUrl(playerProfileUrl);
    });
};

module.exports.getPlayerProfileImageUrl = getPlayerProfileImageUrl;
