import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import Modal from './src/components/Modal';
import AddItem from './src/components/AddItem';


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

  const handleModal = (item) => {
    setItemSelected (item)
    setModalVisible (true)
  }

  const renderItem = ({item}) => (
    <View style={styles.renderItemStyle}>
      <Button title='Edit' onPress={() => handleModal(item)}/>
      <Text>{item}</Text>
    </View>
  )
  
  const onHandleDelete = (item) => {
    setList(prevState => prevState.filter(element => element !== item))
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}> Mi lista de tareas </Text>
      <View>  
      <AddItem
      onChange={onHandleChangeItem}
      textValue={textItem}
      onAddItem={addItem}
      />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor ={item => item}
        />
      </View>
      <Modal 
      isVisible ={modalVisible}
      actionDeleteItem={() => onHandleDelete(itemSelected)}
      itemSelected ={itemSelected}
      onDismissModal ={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingTop: 80,
    backgroundColor:"#E7EAF2",
  },
  title: {
    marginBottom: 40,
    fontSize: 24,
  },
  listContainer:{
    flex: 2,
    marginHorizontal: 20,
    marginTop: 40,
  },
  renderItemStyle: {
    flex: 2,
    backgroundColor: "white",
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 25,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-around',
    elevation: 3,
  },
});