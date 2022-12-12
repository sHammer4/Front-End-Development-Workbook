import 'isomorphic-fetch'

import { render, screen, act, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'

import { rest } from 'msw'; // this will essentially mock the rest calls.
import { setupServer } from 'msw/node'; // we'll set up a "mocked" server

import { BASE_URL } from '../utils/api/base';

import Home from '../pages';

const TEST_URL = "https:\/\/images.dog.ceo\/breeds\/kuvasz\/n02104029_4317.jpg"

const server = setupServer(
    rest.get(`${BASE_URL}/api/breeds/image/random`, (req, res, ctx) => {
        // respond using a mocked JSON body
        return res(ctx.json({
            "status":"success",
            "message":TEST_URL
        }))
    }) 
);

beforeAll(() => {
    server.listen();
})

afterAll(() => {
    server.close();
})

test("test checks if title loads correctly", async () => {
    await act(() => {
        render(<Home />)
    })

    const titleElement = screen.getByText("Welcome to Dinder")
    expect(titleElement).toBeInTheDocument()
})

test("test checks if buttons are rendered correctly", async () => {
    await act(() => {
        render(<Home />)
    })

    const nopeButtonElement = screen.getByText("Nope")
    const likeButtonElement = screen.getByText("Like")

    expect(nopeButtonElement).toBeInTheDocument()
    expect(likeButtonElement).toBeInTheDocument()
})

test("test checks if image loads successfully", async () => {
    await act(() => {
        render(<Home />)
    })

    const imageElement = screen.getByTestId("dog-image")
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute("src", TEST_URL)
})

test("test checks if new image loaded after like", async () => {
    await act(() => {
        render(<Home />)
    })

    const EXPECTED_IMAGE = "https:\/\/images.dog.ceo\/breeds\/corgi-cardigan\/n02113186_7231.jpg"
    const imageElement = screen.getByTestId("dog-image")
    const likeButtonElement = screen.getByText("Like")

    fireEvent.change(imageElement, {
        target: {src: EXPECTED_IMAGE}
    })

    act(() => {
        likeButtonElement.click()
    })

    expect(imageElement).toHaveAttribute("src", EXPECTED_IMAGE)
})

test("test checks if new image loaded after nope", async () => {
    await act(() => {
        render(<Home />)
    })

    const EXPECTED_IMAGE = "https:\/\/images.dog.ceo\/breeds\/corgi-cardigan\/n02113186_7231.jpg"
    const imageElement = screen.getByTestId("dog-image")
    const nopeButtonElement = screen.getByText("Nope")

    fireEvent.change(imageElement, {
        target: {src: EXPECTED_IMAGE}
    })

    act(() => {
        nopeButtonElement.click()
    })

    expect(imageElement).toHaveAttribute("src", EXPECTED_IMAGE)
})