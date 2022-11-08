import { BASE_URL } from "./base";

const getReviews = () => {
    return fetch(`${BASE_URL}/reviews`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        return data
    })
}

const postReview = ((title, comment, rating) => {
    return fetch(`${BASE_URL}/reviews`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          comment: comment,
          rating: rating
        })
    }).then((response) => {
        return response.json()
    }).then((data) => {
        return data
    })
})

export {getReviews, postReview}