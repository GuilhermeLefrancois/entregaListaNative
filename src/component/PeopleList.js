import React from 'react';
import {ScrollView, Text, StyleSheet, Image, SafeAreaView, View, Dimensions} from 'react-native'
import PeopleListItem from './PeopleListItem'
 
const PeopleList = props => 
{
    console.log('Props: ')
    console.log(props)
    const {peoples, onPressItem} = props
    const items = peoples.map(people => 
    {
        return (<PeopleListItem key={people.nome} people={people} onPressItemDetails={onPressItem}/>)        
    })

    return (
        <ScrollView style={style.scroll}>
            <View style={style.container}>
                {items}
            </View>
        </ScrollView>
    )
    
}
 
const style = StyleSheet.create({
    container: 
    {
        backgroundColor: '#DDDDDD',
        marginHorizontal: 'auto',
        width: 1100
    },
    scroll:
    {
        flex: 1,
		backgroundColor: '#FFF'
    }
})
 
export default PeopleList