import { BASE_URL } from "./base.js"

const getRandomQuote = () => {
    console.log(`${BASE_URL}/random`)
    return fetch(`${BASE_URL}/random`)
        .then((response) => {
            return response.json()
        }).then((data) => {
            return data
        })
}

export { getRandomQuote }