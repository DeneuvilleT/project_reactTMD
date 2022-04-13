import axios from 'axios';

export function getData(keyWord) {

    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=acc7fb5c99e94de089fe3049f362676b&language=en-US&query=${keyWord}&page=1&include_adult=false`)
        .then(res => {
            return res
        }).catch(err => {
            return err
        })
};