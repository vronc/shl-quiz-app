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
    .catch((err) => {
      throw new Error(err);
    });
};

module.exports.getPlayerProfileImageUrl = getPlayerProfileImageUrl;
