import { BASE_URL } from "./base";

const fetchAuthors = (authorKey) => {
    return fetch(`${BASE_URL}/authors/${authorKey}.json`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        return data
    })
}

const getBooks = (authorKey) => {
    return fetch(`${BASE_URL}/authors/${authorKey}/works.json`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        return data
    })
}

export { fetchAuthors, getBooks }