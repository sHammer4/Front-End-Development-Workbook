import {fireEvent, render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom'

import TodoList from '../components/TodoList'

//Introduce test, render, screen.getByText, and expect
test('todo list title renders correctly', () => {
    //Renders component so you can use screen to get stuff
    render(<TodoList />)
    const titleElement = screen.getByText("Our Todo List")
    //Expect passes or fails
    //Expects element to be in the document
    expect(titleElement).toBeInTheDocument()
})

//Introduce getByLabelText
test('input and button render', () => {
    render(<TodoList />)
    //Check the input
    const inputElement = screen.getByLabelText("New Todo")
    expect(inputElement).toBeInTheDocument()

    //Check the button
    const buttonElement = screen.getByText("Add Todo")
    expect(buttonElement).toBeInTheDocument()
})

//Introduce fireEvent
test('todo input updates successfully', () => {
    render(<TodoList />)
    const inputElement = screen.getByLabelText("New Todo")
    const buttonElement = screen.getByText("Add Todo")
    const listElement = screen.getByTestId("todo-item-list")
    const EXPECTED_TODO = "Learn Testing"

    //Firing the event of change on the element 
    //  and setting the target's value to the string
    fireEvent.change(inputElement, {
        target: {value: EXPECTED_TODO}
    })

    expect(inputElement.value).toBe(EXPECTED_TODO)
})

//Introduce act
test('todo is added successfully', () => {
    render(<TodoList />)
    const inputElement = screen.getByLabelText("New Todo")
    const buttonElement = screen.getByText("Add Todo")
    const listElement = screen.getByTestId("todo-item-list")
    const EXPECTED_TODO = "Learn Testing"

    fireEvent.change(inputElement, {
        target: {value: EXPECTED_TODO}
    })

    /* 
        Call the button element
        Since we're updating state in a couple of things we need
            to use something called act
    */
    act(() => {
        buttonElement.click()
    })

    //inputElement should now be blank because todo was submitted
    //If following line was before act, test would fail
    expect(inputElement.value).toBe("")
    //Checks if todo successfully submits
    expect(listElement).toHaveTextContent(EXPECTED_TODO)
})