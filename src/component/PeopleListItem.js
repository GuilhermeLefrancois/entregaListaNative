import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
//teste
const PeopleListItem = props => 
{
    const {people, onPressItemDetails} = props
    const { nome } = people.nome
    //console.log(people.nome)
    return (
        <TouchableOpacity onPress={() => {onPressItemDetails(people)}}>
            <View style={style.line}>
                <Image style={style.avatar} source={{uri: people.foto}}/>
                <Text style={style.linetext} key={nome}>{`Nome: ${people.nome}\nCargo: ${people.cargo}`}</Text>          
            </View>
        </TouchableOpacity>
    )
}
 
const style = StyleSheet.create({
    line: 
    {
        height: 100,
        borderWidth: 3,
        borderColor: '#000000',
        alignItems: 'center',
        textAlignVertical: 'center',
        flexDirection: 'row'
    },
    linetext:
    {
        fontSize:15,
        paddingLeft: 20,
        flex: 7
    },
    avatar:
    {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#000000'
    }
})
export default PeopleListItem