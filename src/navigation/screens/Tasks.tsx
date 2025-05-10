import React, { useCallback, useState } from "react";
import { Button, StyleSheet, View, TextInput, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/slices/taks";
import { RootState } from "../../store/store";
import { Modal } from "../../components";

export function Tasks() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");

  const tasks = useSelector((state: RootState) => state.task.tasks);

  const handlerPressModal = useCallback(() => {
    dispatch(add(text));
    setText("");
    setVisible(false);
  }, [text, dispatch]);

  return (
    <View style={styles.container}>
      <Button onPress={() => setVisible(true)} title={"New Task"} />
      {tasks.map((task, index) => (
        <View key={`${task}-${index}`}>
          <Text>{task}</Text>
        </View>
      ))}
      <Modal
        testID="modal-test-id"
        visible={visible}
        setVisible={setVisible}
        text={text}
        setText={setText}
        onPressBotton={() => handlerPressModal()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
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
  modalText: {
    fontSize: 18,
    marginBottom: 20,
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
