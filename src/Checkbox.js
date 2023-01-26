import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Checkbox = () => {
    const [languages,  setLanguages] = useState ([])

    return (
        <View>
            <Text>Checkbox</Text>
        </View>
    )
}

export default Checkbox

const styles = StyleSheet.create({
    checkBox:{
        borderColor: 'green',
        width: 25,
        height:25,
        borderWidth: 2,
    },})
