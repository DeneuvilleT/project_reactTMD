import axios from 'axios';

export function getCat() {

    return axios.get("https://api.thecatapi.com/v1/images/search")
        .then(res => {
            return res
        }).catch(err => {
            return err
        })
}