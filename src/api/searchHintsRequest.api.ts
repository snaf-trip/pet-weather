import axios from "axios";

const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = "536c6b135859427ae5d135a6529b14afb36f2182";
let query = "мо";

export const searchHintsRequest = () => {
    axios.post(url, JSON.stringify({ query: query }), {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
    }).then(response => console.log(response)).catch(error => console.log(error))
}
