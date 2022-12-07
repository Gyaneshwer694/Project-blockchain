const axios = require("axios");
const blockchainModel = require("../models/blockchainModel")

let getAssets = async function (req, res) {
  try {
    let options = {
      method: "get",
      // headers: {
      //   'Authorization': `${apiKey}`,
      //   "Access-Control-Allow-Origin": '*',
      // },
      url: "https://api.coincap.io/v2/assets",
    };
    //    curl --location --request GET 'api.coincap.io/v2/assets'
    let Asssets = await axios(options);
    console.log(Asssets);
    let data = Asssets.data;
    res.status(200).send({ status: true, msg: data, });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

module.exports.getAssets = getAssets;
