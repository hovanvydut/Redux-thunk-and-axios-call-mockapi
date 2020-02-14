import axios from "axios";
import * as config from "./../constants/config";

export default function callAPI(endpoint, method = "GET", data = null) {
    return axios({
        method: method,
        url: config.API_URL + endpoint,
        data: data
    }).catch(err => {
        console.log(err);
        window.location.replace("error");
    });
}
