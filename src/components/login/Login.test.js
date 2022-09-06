import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Login from "./Login"

jest.mock("axios", () => ({
    
    __esModule:true,

    default:{
        get: ()=> ({
            data:{id:1, name:"John"}
        })
    }
}))

test("username input should be rendered", () => {
    render(<Login />)
    const usernameInputEl = screen.getByPlaceholderText(/username/i)
    expect(usernameInputEl).toBeInTheDocument()
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

test("username input should be empty", () => {
    render(<Login />)
    const usernameInputEl = screen.getByPlaceholderText(/username/i)
    expect(usernameInputEl.value).toBe("")
})

test("password input should be empty", () => {
    render(<Login />)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    expect(passwordInputEl.value).toBe("")
})

test("login button should be disabled", () => {
    render(<Login />)
    const loginButton = screen.getByRole("button")
    expect(loginButton).toBeDisabled()
})

test("loading button should not be rendered", () => {
    render(<Login />)
    const loginButton = screen.getByRole("button")
    expect(loginButton).not.toHaveTextContent(/please wait/i)
})

test("error message should not be visible", () => {
    render(<Login />)
    const errorEl = screen.getByTestId("error")
    expect(errorEl).not.toBeVisible()
})

test("username input should change", () => {
    render(<Login />)
    const usernameInputEl = screen.getByPlaceholderText(/username/i)
    const testValue = "test"

    fireEvent.change(usernameInputEl, { target: { value: testValue } })
    expect(usernameInputEl.value).toBe(testValue)
})

test("password input should change", () => {
    render(<Login />)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    const testValue = "test"
    
    fireEvent.change(passwordInputEl, { target: { value: testValue } })
    expect(passwordInputEl.value).toBe(testValue)
})

test("login button should not be disabled when inputs exist", () => {
    render(<Login />)
    const loginButton = screen.getByRole("button")
    const usernameInputEl = screen.getByPlaceholderText(/username/i)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)

    const testValue = "test"
    fireEvent.change(usernameInputEl, { target: { value: testValue } })
    fireEvent.change(passwordInputEl, { target: { value: testValue } })

    expect(loginButton).not.toBeDisabled()
})

test("loading button should be rendered when click", () => {
    render(<Login />)
    const loginButton = screen.getByRole("button")
    const usernameInputEl = screen.getByPlaceholderText(/username/i)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)

    const testValue = "test"

    fireEvent.change(usernameInputEl, { target: { value: testValue } })
    fireEvent.change(passwordInputEl, { target: { value: testValue } })
    fireEvent.click(loginButton)

    expect(loginButton).toHaveTextContent(/please wait/i)
})

test("loading button should not be rendered after fetching", async () => {
    render(<Login />)
    const loginButton = screen.getByRole("button")
    const usernameInputEl = screen.getByPlaceholderText(/username/i)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)

    const testValue = "test"

    fireEvent.change(usernameInputEl, { target: { value: testValue } })
    fireEvent.change(passwordInputEl, { target: { value: testValue } })
    fireEvent.click(loginButton)

    await waitFor(() => 
         expect(loginButton).not.toHaveTextContent(/please wait/i)
    ) 
})

test("user should be rendered after fetching", async () => {
    render(<Login />)
    const loginButton = screen.getByRole("button")
    const usernameInputEl = screen.getByPlaceholderText(/username/i)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)

    const testValue = "test"

    fireEvent.change(usernameInputEl, { target: { value: testValue } })
    fireEvent.change(passwordInputEl, { target: { value: testValue } })
    fireEvent.click(loginButton)

    const userItem = await screen.findByText("John")

    expect(userItem).toBeInTheDocument()
})