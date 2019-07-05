/* tslint:disable */
const { version } = require("../package.json");

export default {
  apiUrl: process.env.API_URL as string,
  imagesUrl: process.env.IMAGES_URL as string,
  version
};
