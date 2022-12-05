import 'isomorphic-fetch' // needed for no "fetch is not defined errors

import { render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom'

import { rest } from 'msw'; // this will essentially mock the rest calls.
import { setupServer } from 'msw/node'; // we'll set up a "mocked" server

import { BASE_URL } from '../utils/api/base.js'; // we'll need this for our "mocked" server
import Home from '../pages/index.js'

const QUOTE = "All I required to be happy was friendship and people I could admire."
const AUTHOR = "Charles Baudelaire"

const server = setupServer(

    rest.get(`${BASE_URL}/random`, (req, res, ctx) => {
        // respond using a mocked JSON body
        return res(ctx.json({
            "_id":"someid",
            "content": QUOTE,
            "author": AUTHOR,
        }))
    }) 
);
 
beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

// ... we'll write our tests down here ...
test("test home loads a quote", async () => {
    //Render the component
    await act(() => {
        render(<Home />)
    })
    //Get the quote and author components on the page
    let quoteElement = screen.getByTestId("quote")
    let authorElement = screen.getByTestId("author")

    //Check to see if this loaded
    expect(quoteElement).toHaveTextContent(QUOTE)
    expect(authorElement).toHaveTextContent(AUTHOR)
})

test("home loads a new quote when clicking the button", async () => {
    await act(() => {
        render (<Home />)
    })

    //New quote and author to test that they've changed
    const NEW_QUOTE = "this class is tried tested and true"
    const NEW_AUTHOR = "Dan"

    // Replace a mock in this test
    server.use(
        rest.get(`${BASE_URL}/random`, (req, res, ctx) => {
            // respond using a mocked JSON body
            return res(ctx.json({
                "_id":"someid",
                "content": NEW_QUOTE,
                "author": NEW_AUTHOR,
            }))
        }) 
    )

    //Check to see if the new quote is on the page
    let quoteElement = screen.getByTestId("quote")
    let authorElement = screen.getByTestId("author")
    let buttonElement = screen.getByTestId("new-quote-button")

    //Click the button
    await act(() => {
        buttonElement.click()
    })

    //Check to see if this loaded
    expect(quoteElement).toHaveTextContent(NEW_QUOTE)
    expect(authorElement).toHaveTextContent(NEW_AUTHOR)
})