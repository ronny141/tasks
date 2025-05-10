import React from "react";
import {
  View,
  Modal as ModalNative,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";

interface Props {
  testID?: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  text: string;
  setText: (text: string) => void;
  onPressBotton: () => void;
}

const Modal = ({ testID,visible, setVisible, text, setText, onPressBotton }: Props) => {
  return (
    <ModalNative
      testID={testID}
      animationType="slide" // slide | fade | none
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)} // para Android
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            placeholder="descripcion"
            value={text}
            onChangeText={setText}
          />
          <Button
            title="Add"
            disabled={!text}
            onPress={onPressBotton}
          />
        </View>
      </View>
    </ModalNative>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // fondo oscuro
  },
  modalContent: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 30,
    alignItems: "center",
    elevation: 5,
    width: "100%",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
});
