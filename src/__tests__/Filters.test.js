import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Filters from "../components/Filters";

test("calls the onChangeType prop callback when the animal type select changes", () => {
  const onChangeType = jest.fn(); // Mock function for the callback

  render(<Filters onChangeType={onChangeType} onFindPetsClick={() => {}} />);

  // Find the select element by its aria-label
  const select = screen.getByLabelText(/Animal type/);

  // Fire a change event
  fireEvent.change(select, { target: { value: "dog" } });

  // Assert that onChangeType was called with the correct value
  expect(onChangeType).toHaveBeenCalledWith("dog");
  expect(onChangeType).toHaveBeenCalledTimes(1);
});
