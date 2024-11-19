import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./counter";
import Display from "./display"; // Import komponen Display

describe("Counter Component", () => {
  test("renders the initial count value as 0", () => {
    render(<Counter />);
    const countValue = screen.getByTestId("counter-value");
    expect(countValue).toHaveTextContent("0");
  });

  test("increments count when increment button is clicked", () => {
    render(<Counter />);
    const countValue = screen.getByTestId("counter-value");
    const incrementButton = screen.getByTestId("increment-button");

    fireEvent.click(incrementButton);
    expect(countValue).toHaveTextContent("1");
  });

  test("decrements count when decrement button is clicked", () => {
    render(<Counter />);
    const countValue = screen.getByTestId("counter-value");
    const decrementButton = screen.getByTestId("decrement-button");

    fireEvent.click(decrementButton);
    expect(countValue).toHaveTextContent("-1");
  });

  test("renders the correct value passed as a prop", () => {
    const testValue = 42;
    render(<Display value={testValue} />);
    const displayValue = screen.getByTestId("display-value");

    expect(displayValue).toHaveTextContent(`Value: ${testValue}`);
  }); 
});
