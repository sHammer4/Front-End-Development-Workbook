import { BASE_URL } from './base.js'

export const getBookData = (bookID) => {
    return fetch(`${BASE_URL}/works/${bookID}.json`)
    .then((response)=> {
        return response.json()
    }).then((data)=> {
        return data
    })
}