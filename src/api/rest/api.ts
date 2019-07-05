import wretch from "wretch";
import configs from "configs";

export default wretch().url(configs.apiUrl);
