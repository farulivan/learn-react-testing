import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render 3 list items', () => {
  render(<App />);
  // select the list items
  const listItem = screen.getAllByRole("listitem");
  // test the quantity of the list items, example 1 :
  // expect(listItem).toHaveLength(3);
  // example 2 :
  // expect(listItem.length).toBe(3);
  // example 3 :
  expect(listItem.length).toEqual(3);
});

test('renders h1 intro', () => {
  render(<App />);
  //select using testId
  const headerIntro = screen.getByTestId("intro");
  //test if it's exist
  expect(headerIntro).toBeInTheDocument();
});

test('sum of span number should be 25', () => {
  render(<App />);
  //select using title
  const spanNumber = screen.getByTitle("sumNumber");
  //test if it have a text number 25 inside it
  // expect(spanNumber).toHaveTextContent("25");
  //or test if the text should exacty "total is 25"
  expect(spanNumber.textContent).toBe("total is 25")
});

//Note : you can "purchase" Wallaby extension in to show the result test inside the editor, not in the terminal.