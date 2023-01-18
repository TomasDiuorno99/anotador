import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal } from 'react-native';

export default function App() {

  const [textItem, setTextItem] = useState ('')
  const[list, setList] = useState ([])
  const [itemSelected, setItemSelected] = useState ("")
  const [modalVisible, setModalVisible] = useState (false)

  const onHandleChangeItem = text => {
    setTextItem(text)
  }

  const addItem = () => {
    setList(prevState => [ ...prevState, textItem ])
    setTextItem("")
  }

  const renderItem = ({item}) => (
    <View style={styles.renderItemStyle}>
      <Text>{item}</Text>
      <Button title='Edit' onPress={() => setModalVisible(true)}/>
    </View>
  )

  return (
    <View style={styles.container}>
        <Text style={styles.title}> Mi lista de tareas </Text>
      <View>  
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder='Escribe tu tarea'
            style={styles.addItemInput}
            onChangeText={onHandleChangeItem}
            value={textItem}
          />
          <Button title='ADD' onPress={addItem}/>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList 
          data={list}
          renderItem={renderItem}
          keyExtractor ={item => item}
        />
      </View>
      <Modal
        animationType='fade'
        transparent= {true}
        visible= {modalVisible}
      >
        <View style={styles.modalStyle}>
          <Text>{itemSelected}</Text>
          <Button 
            title='Delete'
            onPress={() => console.log("borrar elemento")}
            />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingTop: 80,
    backgroundColor:"#EEEEEE",
  },
  inputContainer: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  addItemInput:{ 
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
  },
  title: {
    marginBottom: 40,
    fontSize: 24,
  },
  listContainer:{
    flex: 2,
    marginHorizontal: 30,
    marginTop: 40,
  },
  renderItemStyle: {
    backgroundColor: "white",
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 25,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    elevation: 3,
  },
  modalStyle:{
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "white",

  }
});
