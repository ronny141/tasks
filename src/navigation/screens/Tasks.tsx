import React, { useState } from 'react';
import { Button, Modal, StyleSheet, View, TextInput, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/slices/taks';
import { RootState } from '../../store/store';


export function Tasks() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  
  const tasks = useSelector((state: RootState) => state.task.tasks);
  
  return (
    <View style={styles.container}>
      <Button onPress={() => setVisible(true)} title={'New Task'}/>
      {tasks.map((task, index) => (
        <View key={`${task}-${index}`}>
          <Text>{task}</Text>
        </View>
      ))}
      
      <Modal
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
            <Button title="Add" onPress={() => {
              dispatch(add(text))
              setText('');
              setVisible(false);
            }} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // fondo oscuro
  },
  modalContent: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    elevation: 5,
    width: '100%',
    
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
   input: {
    width: '100%',
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});
