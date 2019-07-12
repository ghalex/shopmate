import wretch from "wretch";
import configs from "configs";

const auth = localStorage.getItem("shopmate-token");

export default wretch()
  .headers({ "USER-KEY": auth || "" })
  .url(configs.apiUrl);
