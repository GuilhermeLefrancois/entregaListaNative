import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {toUpperFirst} from '../util'

 
const PilotoListItem = props => {
    const {people, onPressItemDetails} = props
    const {driverId, GivenName,FamilyName} = people
    console.log(driverId)
  
    return ( 

        <TouchableOpacity onPress={() => {
            onPressItemDetails(people)
        }}>

        <View style={style.line}>
            <Image style={style.avatar} source={{uri: people.img}}/>
            <Text style={style.linetext} key={driverId}>
            {`${
                    toUpperFirst(driverId)
                } ${
                    toUpperFirst(GivenName)
                } ${
                    toUpperFirst(FamilyName)
                }`}
            </Text>            
        </View>
        
        </TouchableOpacity>
    )

   
}
 
const style = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'
    },
    linetext:{
        fontSize:20,
        paddingLeft: 20,
        flex: 7
    },
    avatar:{
        aspectRatio: 1,
        flex: 1,
        marginLeft: 10,
        borderRadius: 50
    }
}
)
 
export default PilotoListItem  