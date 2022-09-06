import { render, screen } from "@testing-library/react"
import Login from "./Login"

test("username input should be rendered", () => {
    render(<Login />)
    const userInputEl = screen.getByPlaceholderText(/username/i)
    expect(userInputEl).toBeInTheDocument()
})

test("password input should be rendered", () => {
    render(<Login />)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    expect(passwordInputEl).toBeInTheDocument()
})

test("login button should be rendered", () => {
    render(<Login />)
    const loginButton = screen.getByRole("button")
    expect(loginButton).toBeInTheDocument()
})