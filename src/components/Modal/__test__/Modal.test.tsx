import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Modal from "../Modal";

const mockSetVisible = jest.fn();
const mockSetText = jest.fn();
const mockOnPress = jest.fn();

const mockModalId = "modal-test-id";

interface Props {
  testID?: string;
  visible?: boolean;
  text?: string;
  setVisible?: (visible: boolean) => void;
  setText?: (text: string) => void;
  onPressBotton?: () => void;
}

function makeView({
  testID = mockModalId,
  visible = false,
  text = "",
  setVisible = mockSetVisible,
  setText = mockSetText,
  onPressBotton = mockOnPress,
}: Props = {}): React.ReactElement {
  return (
    <Modal
      testID={testID}
      visible={visible}
      setVisible={setVisible}
      text={text}
      setText={setText}
      onPressBotton={onPressBotton}
    />
  );
}
describe("Modal component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("muestra el input y el botón cuando visible es true  aaa", () => {
    const { getByPlaceholderText, getByText } = render(
      makeView({ visible: true })
    );
    expect(getByPlaceholderText("descripcion")).toBeTruthy();
    expect(getByText("Add")).toBeTruthy();
  });

  it("actualiza el texto al escribir", () => {
    const { getByPlaceholderText } = render(makeView({ visible: true }));

    fireEvent.changeText(getByPlaceholderText("descripcion"), "nuevo valor");
    expect(mockSetText).toHaveBeenCalledWith("nuevo valor");
  });

  it("llama onPressBotton al presionar el botón", () => {
    const { getByText } = render(makeView({ text: 'hola', visible: true }));

    fireEvent.press(getByText("Add"));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it("no puede presionar onPressBotton boton disabled", () => {
    const { getByText } = render(makeView({ text: '', visible: true }));

    fireEvent.press(getByText("Add"));
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it("no muestra contenido cuando visible es false", () => {
    const { queryByPlaceholderText, queryByText } = render(
      makeView({ visible: false })
    );

    expect(queryByPlaceholderText("descripcion")).toBeNull();
    expect(queryByText("Add")).toBeNull();
  });

  it("cierra el modal cuando se dispara onRequestClose (usando testID)", () => {
    const { getByTestId } = render( makeView({ visible: true})
    );

    const modal = getByTestId(mockModalId);
    modal.props.onRequestClose();

    expect(mockSetVisible).toHaveBeenCalledWith(false);
  });
});
