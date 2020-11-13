import React from 'react';
import {ScrollView, Text, StyleSheet, Image, SafeAreaView, View, Dimensions, ImageBackground} from 'react-native'
import { color } from 'react-native-reanimated';
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
                <ImageBackground source={{uri:"https://img.freepik.com/vetores-gratis/fundo-abstrato-tecnologia-azul_1035-17929.jpg?size=626&ext=jpg"}} style={style.image}>
                    <View style={style.container}>
                        {items}
                    </View>
                </ImageBackground>
            </ScrollView>
        
    )
    
}
 
const style = StyleSheet.create({
    container: 
    {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 'auto',
        width: 300,
        color: '#FFFFFF'
    },
    scroll:
    {
        flex: 1,
		backgroundColor: '#FFF'
    },
    image:
    {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
})
 
export default PeopleList