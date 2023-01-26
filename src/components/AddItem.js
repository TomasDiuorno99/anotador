import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'

const AddItem = ({onChange, textValue, onAddItem}) => {
    return (
    <View style={styles.inputContainer}>
        <TextInput 
            placeholder='Escribe tu tarea'
            style={styles.addItemInput}
            onChangeText={onChange}
            value={textValue}
        />
        <Button title='ADD' onPress={onAddItem}/>
    </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    addItemInput:{ 
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 200,
    },})