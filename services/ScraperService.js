const cheerio = require("cheerio");
const axios = require("axios");

const getPlayerProfileImageUrl = async (playerProfileUrl, retries = 3) => {
  return axios
    .get(playerProfileUrl)
    .then((response) => {
      if (response.status === 200) {
        const html = response.data;
        const $ = cheerio.load(html);
        const image = $("img[src^='https://cdn.ramses.nu']");
        return image ? image[0].attribs.src : "";
      }
    })
    .catch((e) => {
      if (retries > 0) {
        console.log(
          `There was a problem fetching player image from url: ${
            e.config ? e.config.url : "<url not found>"
          }. Retrying fetch...`
        );
        return getPlayerProfileImageUrl(playerProfileUrl, retries - 1);
      }
    });
};

module.exports.getPlayerProfileImageUrl = getPlayerProfileImageUrl;
