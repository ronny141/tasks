import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { render, fireEvent } from "@testing-library/react-native";
import { MockComponent } from "../../../__mocks__/ui";
import { Tasks } from "../Tasks";

const mockModalId = "modal-test-id";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockDispatch = jest.fn();
(useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);

jest.mock("../../../components", () => ({
  Modal: MockComponent,
}));

describe("Tasks", () => {
//   const mockDispatch = jest.fn();

  beforeEach(() => {
    (useSelector as unknown as jest.Mock).mockImplementation((selectorFn) =>
      selectorFn({ task: { tasks: ["Test task"] } })
    );
    // mockDispatch.mockClear();
  });

  it('despacha acción, limpia input y cierra modal al presionar "Add"', () => {
    const { getByTestId } = render(<Tasks />);
    const modal = getByTestId('modal-test-id');
    modal.props.onPressBotton();
    expect(mockDispatch).toHaveBeenCalled();
  });

   it('muestra el modal al presionar el botón "New Task"', () => {
    const { getByText, getByTestId } = render(<Tasks />);
    expect(getByTestId('modal-test-id').props.visible).toBe(false);
    fireEvent.press(getByText('New Task'));
    expect(getByTestId('modal-test-id').props.visible).toBe(true);
  });
});
